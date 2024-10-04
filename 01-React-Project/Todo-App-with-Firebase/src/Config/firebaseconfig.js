// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAf4DVYhXzoweUPx7KWlXd3v2BWpCZE4-c",
    authDomain: "todo-app-firebase-121.firebaseapp.com",
    projectId: "todo-app-firebase-121",
    storageBucket: "todo-app-firebase-121.appspot.com",
    messagingSenderId: "394115073012",
    appId: "1:394115073012:web:b13f73657bc1827f8e2fa1",
    measurementId: "G-R7B83219XB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// // Export db
// export { db };