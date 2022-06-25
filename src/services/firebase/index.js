// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQb9N1gpxHteu1E37ZcmgLKpntP8rvP1c",
  authDomain: "reactecommerce-2e03c.firebaseapp.com",
  projectId: "reactecommerce-2e03c",
  storageBucket: "reactecommerce-2e03c.appspot.com",
  messagingSenderId: "938944369633",
  appId: "1:938944369633:web:9c5868575dbf5af67f38a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)