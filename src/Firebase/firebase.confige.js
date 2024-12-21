// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APINEY ,
  authDomain: import.meta.env.VITE_AUTNDOMAIN,
  projectId: import.meta.env.VITE_PRONECTID ,
  storageBucket: import.meta.env.VITE_STONAGEBUCKE,
  messagingSenderId: import.meta.env.VITE_MESNAGINGSENDER,
  appId: import.meta.env.VITE_APPND
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app