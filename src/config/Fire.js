import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
// import "@firebase/firestore"; // 👈 Don't forget this!

const DB_CONFIG = {
    apiKey: "AIzaSyAtqwdSiLeUrFmSnqLiP5qF7PSIGZEd8pk",
    authDomain: "capsmd-site.firebaseapp.com",
    databaseURL: "https://capsmd-site.firebaseio.com",
    projectId: "capsmd-site",
    storageBucket: "capsmd-site.appspot.com",
    messagingSenderId: "1067569545418",
    appId: "1:1067569545418:web:fd2c3a6d8584a400"
};

const fire = firebase.initializeApp(DB_CONFIG);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, fire, firestore as default };