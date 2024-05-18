import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, sendPasswordResetEmail, type Auth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let app;
let firestore;
let analytics;
let auth: Auth;
let storage;
let storageRef;
let documentsRef;

try {
  app = initializeApp(firebaseConfig);
  firestore = getFirestore(app);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  storage = getStorage(app);
  storageRef = ref(storage);
  documentsRef = ref(storage, 'documents');
} catch (error) {
  console.error("Errore durante l'inizializzazione di Firebase:", error);
}

export {
  app,
  analytics,
  auth,
  sendPasswordResetEmail,
  firestore,
  storage,
  storageRef,
  documentsRef,
  firebaseConfig
};
