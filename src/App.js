import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router";

import Login from "./constants/auth/Login";
import Main from "./constants/main/Main";
import PrivateRoutes from "./hooks/PrivateRoute";

function App() {
  const auth = JSON.parse(localStorage.getItem("auth"));
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<PrivateRoutes> <Main /></PrivateRoutes>} />
          <Route
            path="*"
            element={<Navigate to={auth?.token ? "/welcome" : "/login"} replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
