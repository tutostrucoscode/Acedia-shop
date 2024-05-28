// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsNgyOgZfcV0wKmQlIk6d6oa2Jjs5iuUg",
  authDomain: "acedia-shop.firebaseapp.com",
  projectId: "acedia-shop",
  storageBucket: "acedia-shop.appspot.com",
  messagingSenderId: "297901342314",
  appId: "1:297901342314:web:6d68bf16be190ac1259413",
  measurementId: "G-G66FB4HS9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { app, analytics, auth, db };
