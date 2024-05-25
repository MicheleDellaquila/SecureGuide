import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { loginAction, signUpAction, updateProfileAction } from "./actions";

// pages
import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";
import { SignUp } from "@/pages/signUp/signUp";
import { ProtectedRoute } from "@/components/protectedRoute/protectedRoute";
import { Home } from "@/pages/home/home";
// import { UpdateProfile } from "@/pages/updateProfile/updateProfile";
// import { Chat } from "@/pages/chat/chat";

// layouts
import HomeLayout from "@/layouts/homeLayout/homeLayout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} action={loginAction} element={<SignIn />} />
      <Route path="/signUp" action={signUpAction} element={<SignUp />} />
      <Route path="/home" element={<ProtectedRoute element={<HomeLayout />} />}>
        <Route index={true} element={<Home />} />
        {/* <Route path=":chatId" element={<Chat />} />
        <Route path="modifica-profilo" action={updateProfileAction} element={<UpdateProfile />} /> */}
      </Route>
    </Route>,
  ),
);
