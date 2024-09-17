import React, { useEffect, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import  {auth}  from "../Config/firebaseconfig"
const ProtectedRoutes = ({ component }) => {
  // const auth = getAuth();
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    if (!userLoggedIn) {
      navigate("login");
    }
  }, []);

  return <>{ component}</>;
};

export default ProtectedRoutes;