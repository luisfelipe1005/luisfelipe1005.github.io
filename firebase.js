// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4pj-vv2AUd9BUjMpGppHrgK7aFkfQ96Q",
  authDomain: "tormenta-projeto.firebaseapp.com",
  projectId: "tormenta-projeto",
  storageBucket: "tormenta-projeto.firebasestorage.app",
  messagingSenderId: "840338790531",
  appId: "1:840338790531:web:713b137e4fc6a8640623b6",
  measurementId: "G-H43EHD51KJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);