import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loginAction } from "./actions";

// pages
import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} action={loginAction} element={<SignIn />} />
    </Route>,
  ),
);
