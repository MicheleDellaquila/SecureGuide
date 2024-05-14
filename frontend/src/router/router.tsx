import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import { Root } from "./root";
import { SignIn } from "@/pages/signIn/signIn";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index={true} element={<SignIn />} />
    </Route>,
  ),
);
