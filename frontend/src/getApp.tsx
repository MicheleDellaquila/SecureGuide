import React from "react";
import { router } from "./router/router.tsx";
import "react-toastify/dist/ReactToastify.css";

// components
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const getApp = () => {
  if (import.meta.env.MODE === "development")
    return (
      <React.StrictMode>
        <ToastContainer />
        <RouterProvider router={router} />
      </React.StrictMode>
    );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default getApp;
