import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loginAction, signUpAction } from "./actions";

// pages
import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";
import { SignUp } from "@/pages/signUp/signUp";
import { Home } from "@/pages/home/home";
import ProtectedRoute from "@/components/protectedRoute/protectedRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} action={loginAction} element={<SignIn />} />
      <Route path="/signUp" action={signUpAction} element={<SignUp />} />
      <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
    </Route>,
  ),
);
