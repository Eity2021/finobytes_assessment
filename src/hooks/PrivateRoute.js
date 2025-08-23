// // src/routes/PrivateRoute.js
// import { Navigate, Outlet } from "react-router";

// export default function PrivateRoute({ allowedRoles }) {
//   const auth = JSON.parse(localStorage.getItem("auth"));

//   if (!auth?.token) {
//     return <Navigate to="/login" replace />;
//   }

//   return <Outlet />; 
// }

import React from 'react';
import { Navigate } from 'react-router';

export default function PrivateRoutes({ children }) {
  const auth = JSON.parse(localStorage.getItem("auth"));
  if (auth?.token && auth?.role) {
    return children;
  }
  return <Navigate to="/login" replace={true}></Navigate>;
}
