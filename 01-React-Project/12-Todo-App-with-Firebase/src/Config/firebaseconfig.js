// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbQJWth1s57jVjk-TD5dU0X47duL0Pq7M",
    authDomain: "todo-app-firebase-1221.firebaseapp.com",
    projectId: "todo-app-firebase-1221",
    storageBucket: "todo-app-firebase-1221.appspot.com",
    messagingSenderId: "165060946550",
    appId: "1:165060946550:web:06b7ca340232aa4784cd57",
    measurementId: "G-45PVSMJ9EM"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// // Export db
// export { db };