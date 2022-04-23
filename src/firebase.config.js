// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUTCXmDXkKqMTHYcIwimA5uDOx4DS0EBc",
  authDomain: "house-marketplace-app-9a17c.firebaseapp.com",
  projectId: "house-marketplace-app-9a17c",
  storageBucket: "house-marketplace-app-9a17c.appspot.com",
  messagingSenderId: "802569844402",
  appId: "1:802569844402:web:3016f483b307348e147bab",
  measurementId: "G-G8YKM8Y7FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
export const db=getFirestore()