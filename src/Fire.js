import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/firestore';   // for cloud firestore
import 'firebase/functions';   // for cloud functions

const DB_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_LIVE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_LIVE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_LIVE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_LIVE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_LIVE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_LIVE_MESSAGING_SENDER_ID
};

const fire = firebase.initializeApp(DB_CONFIG);
const firestore = firebase.firestore();
const storage = firebase.storage();
const functions = firebase.functions();

export { firebase, fire, firestore, storage, functions };
