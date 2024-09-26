import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signOutUser } from '../config/firebase/FirebaseMethod'
import { onAuthStateChanged } from 'firebase/auth'

const Navbar = ({Home,Dashboard,Profile,Logout,Login,Register}) => {
  let navigate = useNavigate()
  const logoutUser = async () => {
    const user = await signOutUser();
    // setIsUser(false)
    console.log(user);
    navigate('login')
  }
  return (
    <>
      <div className="flex justify-center space-x-5 py-5 bg-gray-100 rounded-lg shadow-md">
        <h5>
          <Link to="/" className="text-blue-600 hover:underline">{Home}</Link>
        </h5>
        <h5>
          <Link to="/dashboard" className="text-blue-600 hover:underline">{Dashboard}</Link>
        </h5>
        <h5>
          <Link to="/profile" className="text-blue-600 hover:underline">{Profile}</Link>
        </h5>
        <h5
          className="text-blue-600 hover:underline cursor-pointer"
          onClick={logoutUser}
        >
          {Logout}
        </h5>
        <h5>
          <Link to="/login" className="text-blue-600 hover:underline">{Login}</Link>
        </h5>
        <h5>
          <Link to="/register" className="text-blue-600 hover:underline">{Register}</Link>
        </h5>
      </div>
    </>

  )
}

export default Navbar