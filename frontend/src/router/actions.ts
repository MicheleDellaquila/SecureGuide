import { redirect, type ActionFunction } from "react-router-dom";
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  getAuth,
  verifyBeforeUpdateEmail,
  signOut,
} from "firebase/auth";
import { setDoc, doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "@/services/firebase";
import { getDocReference } from "@/services/firebaseQuery";
import { toast } from "react-toastify";
import getAnswer from "@/services/apis/getAnswer";
import createChatFirestore from "@/helpers/createChatFirestore";

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
    await sendEmailVerification(getAuth().currentUser as User);

    toast.success("Registrazione avvenuta con successo. Controlla la tua email per confermare l'account.");
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

// update profile action
const updateProfileAction = async (formData: FormData) => {
  try {
    const fullName = formData.get("fullName")?.toString().trim();
    const email = formData.get("email")?.toString().trim();

    // check if user is authenticated
    const currentUser = auth.currentUser;
    if (!currentUser) throw new Error("Utente non autenticato");

    // get user profile reference
    const profileRef = getDocReference("users", currentUser.uid);

    // check if fullname is different from the current one
    if (fullName !== currentUser.displayName && email !== currentUser.email) {
      await updateDoc(profileRef, { fullName: fullName, email: email });
      await updateProfile(currentUser, { displayName: fullName });
      await verifyBeforeUpdateEmail(currentUser, email as string);
      toast.success("Il tuo profilo è stato aggiornato con successo. Controlla la tua email per confermare l'account.");
    } else if (fullName !== currentUser.displayName) {
      await updateDoc(profileRef, { fullName: fullName });
      await updateProfile(currentUser, { displayName: fullName });
      toast.success("Il tuo profilo è stato aggiornato con successo!");
    } else {
      await updateDoc(profileRef, { email: email });
      await verifyBeforeUpdateEmail(currentUser, email as string);
      toast.success("Il tuo profilo è stato aggiornato con successo. Controlla la tua email per confermare l'account.");
    }

    localStorage.setItem("user", JSON.stringify({ fullName, email }));
    return { isSuccessful: true };
  } catch (error: any) {
    if (error.code === "auth/requires-recent-login") {
      toast.info("Per favore, effettua nuovamente il login per aggiornare l'email.");
      await signOut(auth);
      return redirect("/");
    }

    toast.error(error.message);
    return null;
  }
};

// home action
export const homeAction: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const actionType = formData.get("actionType")?.toString();

  // call update profile action if action type is updateProfile
  if (actionType === "updateProfile") return updateProfileAction(formData);

  try {
    const user = JSON.parse(localStorage.getItem("user") as string);
    if (!user) throw new Error("Utente non autenticato");

    // get question from form data and history chat
    const question = formData.get("message")?.toString().trim();
    const historyChat = new Array(formData.get("historyChat"));
    if (!question) throw new Error("Inserisci una domanda");

    // get answer from getAnswer API
    const { title, html } = await getAnswer(question, historyChat.length > 0 ? historyChat : []);
    if (!title || !html) throw new Error("Errore nella risposta");

    // create chat in firebase
    const chat = await createChatFirestore(title, [{ question, answer: html }], user.uid);

    return { answer: html, chat, ok: true };
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
};
