import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

let app;
let firestore;
let analytics;
let auth;
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
