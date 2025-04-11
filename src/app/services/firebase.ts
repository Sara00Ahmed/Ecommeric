// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'; // إضافة Authentication

const firebaseConfig = {
  apiKey: "AIzaSyDaQ1MrP1wc-9asdZokdjfJq6oOEEE1E8k",
  authDomain: "ecommeric-website.firebaseapp.com",
  projectId: "ecommeric-website",
  storageBucket: "ecommeric-website.firebasestorage.app",
  messagingSenderId: "668604835191",
  appId: "1:668604835191:web:e573bfbef870926d17ed72",
  measurementId: "G-4Z3ZTX6QXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const auth = getAuth(app);


export { db,auth };
