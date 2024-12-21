// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAK2nf_P4IfXOcbuf83R25yQmgRqijO5Zg' ,
  authDomain: 'assignment-10-b4d8f.firebaseapp.com',
  projectId: "assignment-10-b4d8f" ,
  storageBucket: "assignment-10-b4d8f.appspot.com",
  messagingSenderId: "801075050158",
  appId: "1:801075050158:web:20b3a094ea32a9fec59f3f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app