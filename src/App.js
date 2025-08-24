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

function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Place new routes over this */}
          <Route path="/*" element={<Main />} />
          {/* <Route
            path="*"
            element={<Navigate to={token ? "/welcome" : "/login"} replace />}
          /> */}
        </Routes>
      </Router>



    </>
  );
}

export default App;
