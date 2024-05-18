import type { ActionFunction } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/services/firebase";
import { toast } from "react-toastify";

export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    // check if email and password are provided
    if (!email || !password) throw new Error("Email e password sono richiesti");

    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login avvenuto con successo!");
    return { isSuccessful: true };
  } catch (error: any) {
    toast.error(error.message);
    return null
  }
};
