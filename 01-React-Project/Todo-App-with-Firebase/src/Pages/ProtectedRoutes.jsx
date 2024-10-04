import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Config/firebaseconfig"
const ProtectedRoutes = ({ component }) => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // console.log(auth.currentUser.uid);
        console.log(uid);
      } else {
        console.log('user login nahi ha');
        navigate("login");
      }
    });


  }, []);

  return <>{component}</>;
};

export default ProtectedRoutes;