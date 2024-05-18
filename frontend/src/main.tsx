import React from "react";
import "./index.css";
import "./reset.css"
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from "react-dom/client";
import { router } from "./router/router.tsx";

import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
