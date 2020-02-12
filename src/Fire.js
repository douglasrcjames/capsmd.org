import fire from "firebase";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const DB_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};

const firebase = fire.initializeApp(DB_CONFIG);
const firestore = fire.firestore();
const storage = fire.storage();
const functions = fire.functions();

export { firebase, fire, firestore, storage, functions };