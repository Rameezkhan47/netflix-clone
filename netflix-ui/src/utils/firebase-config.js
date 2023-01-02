// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARcyqAgtwvjLD5Ch8629Ct3bWbOmNjLtA",
  authDomain: "react-netflix-clone-5a98b.firebaseapp.com",
  projectId: "react-netflix-clone-5a98b",
  storageBucket: "react-netflix-clone-5a98b.appspot.com",
  messagingSenderId: "898303807124",
  appId: "1:898303807124:web:ce7c44ac57328cb83a2e81",
  measurementId: "G-NFPSPFV1GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app)