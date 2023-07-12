import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyB_mIscj9j6Dqyf3ujlqfgbP1JakEygD68",
    authDomain: "tri2champ.firebaseapp.com",
    databaseURL: "https://tri2champ-default-rtdb.firebaseio.com",
    projectId: "tri2champ",
    storageBucket: "tri2champ.appspot.com",
    messagingSenderId: "318844875234",
    appId: "1:318844875234:web:c76a1750ee286f168e89bb",
    measurementId: "G-VV8HWE99L3"
  };
  
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);