// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKm8UxJt7aiPv9y04oHiIGf-xhMpd5LE4",
  authDomain: "agrodrone-1749f.firebaseapp.com",
  projectId: "agrodrone-1749f",
  storageBucket: "agrodrone-1749f.appspot.com",
  messagingSenderId: "872959268503",
  appId: "1:872959268503:web:aaef4d20c5c0422cebfbd2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);