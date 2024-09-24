import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyC5gkrQSfRe3dsH89EzL4zStaSvWBUeFkA",
  authDomain: "blogging-app-1221.firebaseapp.com",
  projectId: "blogging-app-1221",
  storageBucket: "blogging-app-1221.appspot.com",
  messagingSenderId: "783368055782",
  appId: "1:783368055782:web:4b89f18db522e86d4c4427",
  measurementId: "G-Y51JHRH6YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app