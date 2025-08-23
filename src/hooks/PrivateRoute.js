// src/routes/PrivateRoute.js
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const auth = JSON.parse(localStorage.getItem("auth")); 

  if (!auth?.token && !auth?.role) return <Navigate to="/login" replace />;

  if (auth?.role && auth.role !== auth?.role) return <Navigate to="/forbidden" replace />;

  return <Outlet />;
}
