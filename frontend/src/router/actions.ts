import { redirect, type ActionFunction } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "@/services/firebase";
import { getDocReference } from "@/services/firebaseQuery";
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

    // sign in user with email and password and send code
    await signInWithEmailAndPassword(auth, email, password);

    toast.success("Login avvenuto con successo!");
    return { ok: true };
  } catch (error: any) {
    toast.error(error.message);
    localStorage.removeItem("user");
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

    // check if email and password are provided
    if (!fullName || !email || !password) throw new Error("Fullname, Email e password sono richiesti");

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(firestore, "users", userCredential.user.uid), { fullName, email });
    await updateProfile(userCredential.user, { displayName: fullName });

    toast.success("Registrazione avvenuta con successo!");
    return { ok: true };
  } catch (error: any) {
    console.error(error);
    if (error.code === "auth/email-already-in-use") return toast.error("Email già in uso");
    toast.error(error.message);
    return null;
  }
};

// reset password action
export const resetPasswordAction: ActionFunction = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get("email")?.toString().trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // check if email is provided or valid
    if (!email || !regex.test(email)) throw new Error("Controlla l'email inserita");

    await sendPasswordResetEmail(auth, email);
    toast.success("Abbiamo inviato un'email per reimpostare la password!");
    return redirect("/");
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
};

// home action
export const homeAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const user = Object.fromEntries(formData);
  console.log(user)

  // try {
  //   // check if user is authenticated
  //   const currentUser = auth.currentUser;
  //   if (!currentUser) throw new Error("Utente non autenticato");

  //   // get user profile reference and update user data
  //   const profileRef = await getDocReference("users", currentUser.uid);
  //   await updateDoc(profileRef, { fullName: user.fullName, email: user.email });
  //   await updateProfile(currentUser, user);

  //   localStorage.setItem("user", JSON.stringify(user));
  //   toast.success("Il tuo profilo è stato aggiornato con successo!");
  //   return redirect("/home");
  // } catch (error: any) {
  //   toast.error(error.message);
  //   return null;
  // }
};
