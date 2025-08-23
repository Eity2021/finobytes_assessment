import App from "./App";
import React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <ToastContainer />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
