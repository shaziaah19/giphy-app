import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqeT1F-tYTrRAm0BfAN4HahIXboOH248U",
  authDomain: "custom-username-password.firebaseapp.com",
  projectId: "custom-username-password",
  storageBucket: "custom-username-password.appspot.com",
  messagingSenderId: "1093944135988",
  appId: "1:1093944135988:web:41a553c1a2f25293e45561",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
