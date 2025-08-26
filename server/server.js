import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const seedUsers = async () => {
  const users = [
    {
      id: 1,
      name: "Alice Admin",
      email: "admin@example.com",
      role: "admin",
      password: "admin123",
    },
    {
      id: 2,
      name: "Mohan Merchant",
      email: "merchant@example.com",
      role: "merchant",
      password: "merchant123",
    },
    {
      id: 3,
      name: "Mina Member",
      email: "member@example.com",
      role: "member",
      password: "member123",
    },
  ];
  for (const u of users) {
    u.passwordHash = await bcrypt.hash(u.password, 10);
    delete u.password;
  }
  return users;
};
let USERS = await seedUsers();

const signToken = (payload) =>
  jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES || "2h",
  });

const auth = (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id, email, role, name }
    next();
  } catch (e) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
const allowRoles =
  (...roles) =>
  (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: "Unauthenticated" });
    if (!roles.includes(req.user.role))
      return res.status(403).json({ error: "Forbidden" });
    next();
  };

app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  const user = USERS.find((u) => u.email === email);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Invalid credentials" });

  const token = signToken({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
  });
  res.json({
    token,
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
  });
});

app.get("/auth/me", auth, (req, res) => {
  res.json({ user: req.user });
});

// admin
app.get("/admin/users", auth, allowRoles("admin"), (req, res) => {
  const filteredUsers = USERS.filter(
    (u) => u.role === "merchant" || u.role === "member"
  ).map(({ passwordHash, ...rest }) => rest);

  res.json({ users: filteredUsers });
});

app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
