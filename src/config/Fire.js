import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
// import "@firebase/firestore"; // 👈 Don't forget this!

const DB_CONFIG = {
    apiKey: "AIzaSyArded6dnnxhOWB4Vz_WQJ7sURlw8lI_UA",
    authDomain: "capsmd-site.firebaseapp.com",
    databaseURL: "https://capsmd-site.firebaseio.com",
    projectId: "capsmd-site",
    storageBucket: "capsmd-site.appspot.com",
    messagingSenderId: "1067569545418",
    appId: "1:1067569545418:web:81c236b7e134cff1"
  };
  
  const fire = firebase.initializeApp(DB_CONFIG);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, fire, firestore as default };