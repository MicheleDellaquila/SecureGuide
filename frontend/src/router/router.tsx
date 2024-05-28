import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loginAction, signUpAction, homeAction } from "./actions";

// pages
import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";
import { SignUp } from "@/pages/signUp/signUp";
import { ProtectedRoute } from "@/components/protectedRoute/protectedRoute";
// import { Home } from "@/pages/home/home";
import { Chat } from "@/pages/chat/chat";

// layouts
import HomeLayout from "@/layouts/homeLayout/homeLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} action={loginAction} element={<SignIn />} />
      <Route path="/signUp" action={signUpAction} element={<SignUp />} />
      <Route path="/home" action={homeAction} element={<ProtectedRoute element={<HomeLayout />} />}>
        <Route index={true} element={<p>chat</p>} />
        <Route path=":chatId" element={<Chat />} />
      </Route>
    </Route>,
  ),
);
