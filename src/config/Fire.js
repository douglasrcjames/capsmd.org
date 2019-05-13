import firebase from "firebase";
import "firebase/database";
import "firebase/storage";
import { DB_CONFIG } from './configData'
// import "@firebase/firestore"; // 👈 Don't forget this!


const fire = firebase.initializeApp(DB_CONFIG);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, fire, firestore as default };