import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ component }) => {
  const [userLoggedIn, setuserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        setuserLoggedIn(true);
      } else {
        navigate("login");
      }
    });
    if (!userLoggedIn) {
      navigate("login");
    }
  }, []);

  return <>{userLoggedIn ? component : null}</>;
};

export default ProtectedRoutes;