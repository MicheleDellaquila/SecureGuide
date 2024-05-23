import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loginAction, resetPasswordAction, signUpAction, updateProfileAction } from "./actions";

// pages
import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";
import { SignUp } from "@/pages/signUp/signUp";
import { ProtectedRoute } from "@/components/protectedRoute/protectedRoute";
import { UpdateProfile } from "@/pages/updateProfile/updateProfile";

// layouts
import HomeLayout from "@/layouts/home/homeLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} action={loginAction} element={<SignIn />} />
      <Route path="/reset-password" action={resetPasswordAction} element={<p>ciao</p>} />
      <Route path="/signUp" action={signUpAction} element={<SignUp />} />
      <Route path="/home" element={<ProtectedRoute element={<HomeLayout />} />}>
        <Route index={true} element={<p>chat</p>} />
        <Route path="modifica-profilo" action={updateProfileAction} element={<UpdateProfile />} />
      </Route>
    </Route>,
  ),
);
