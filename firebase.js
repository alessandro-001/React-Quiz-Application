// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  authDomain: "quiztopia-36baa.firebaseapp.com",
  projectId: "quiztopia-36baa",
  storageBucket: "quiztopia-36baa.appspot.com",
  messagingSenderId: "1059084326093",
  appId: "1:1059084326093:web:04552e788102bc34f20584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();