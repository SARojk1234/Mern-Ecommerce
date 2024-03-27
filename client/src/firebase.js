// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-b425b.firebaseapp.com",
  projectId: "mern-estate-b425b",
  storageBucket: "mern-estate-b425b.appspot.com",
  messagingSenderId: "884525477199",
  appId: "1:884525477199:web:7b46ccd8d5ab9ba6e9293a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);