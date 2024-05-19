import { type ActionFunction } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from "@/services/firebase";
import { toast } from "react-toastify";

/* FOR CORRECT SANITIZATION OF DATA, INSERT OK: TRUE ON EACH ACTION SO THE FORM CAN BE RESET */

// login action
export const loginAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    // check if email and password are provided
    if (!email || !password) throw new Error("Email e password sono richiesti");

    await signInWithEmailAndPassword(auth, email, password);
    toast.success("Login avvenuto con successo!");
    return { isSuccessful: true, ok: true };
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
};

// signup action
export const signUpAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const fullName = formData.get("fullName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const password = formData.get("password")?.toString().trim();
    const code = formData.get("code")?.toString().trim();
    const action = formData.get("action")?.toString().trim();
    console.log(code)

    // check if action is verifyCode
    // TODO: IMPLEMENT API TO VERIFY CODE AND FUNCTION TO HANDLE IT
    if (action === "verifyCode") return null;

    // check if email and password are provided
    if (!fullName || !email || !password) throw new Error("Fullname, Email e password sono richiesti");

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(firestore, "users", userCredential.user.uid), { fullName, email });
    await updateProfile(userCredential.user, { displayName: fullName });
    toast.success("Registrazione avvenuta con successo!");
    return { isSuccessful: true, ok: true };
  } catch (error: any) {
    console.error(error);
    if (error.code === "auth/email-already-in-use") return toast.error("Email già in uso");
    toast.error(error.message);
    return null;
  }
};
