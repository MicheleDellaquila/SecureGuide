import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, sendPasswordResetEmail, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const initializeFirebase = () => {
  try {
    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);
    const analytics = getAnalytics(app);
    const auth = getAuth(app);
    const storage = getStorage(app);
    const storageRef = ref(storage);
    const documentsRef = ref(storage, "documents");

    return { app, firestore, analytics, auth, storage, storageRef, documentsRef };
  } catch (error) {
    console.error("Errore durante l'inizializzazione di Firebase:", error);
    return {
      app: null,
      firestore: null,
      analytics: null,
      auth: null,
      storage: null,
      storageRef: null,
      documentsRef: null,
    };
  }
};

const { app, firestore, analytics, auth, storage, storageRef, documentsRef } = initializeFirebase();
export { app, analytics, auth, sendPasswordResetEmail, firestore, storage, storageRef, documentsRef, firebaseConfig };
