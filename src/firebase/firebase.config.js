// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgYApouT9J8wu9X5a_RnxmB7-5BTMdU8w",
  authDomain: "dragon-house-own-auth.firebaseapp.com",
  projectId: "dragon-house-own-auth",
  storageBucket: "dragon-house-own-auth.appspot.com",
  messagingSenderId: "489072713387",
  appId: "1:489072713387:web:f8e90ad70fc5186afde1ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
