// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
import { getFirestore } from 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdANRoe4Djan-sLbIkUKQGJj1zopAHRpM",
  authDomain: "chat-feaa4.firebaseapp.com",
  projectId: "chat-feaa4",
  storageBucket: "chat-feaa4.appspot.com",
  messagingSenderId: "980636145771",
  appId: "1:980636145771:web:5a0450fc487bd93dafb92e",
  measurementId: "G-DZDEK6LLH4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);