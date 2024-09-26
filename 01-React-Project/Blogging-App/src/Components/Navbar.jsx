import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth, signOutUser } from '../config/firebase/FirebaseMethod'
import { onAuthStateChanged } from 'firebase/auth'

const Navbar = ({ Home, Dashboard, Profile, Logout, Login, Register }) => {
  let navigate = useNavigate()
  const logoutUser = async () => {
    const user = await signOutUser();
    // setIsUser(false)
    console.log(user);
    navigate('/login')
  }
  return (
    <>
      <div className="bg-[#7749F8] sm:p-0 p-1 flex flex-wrap justify-between items-center">
        <Link to="/" className="text-white sm:ml-24 ml-5 sm:text-[1.4rem] text-[1.3rem] font-bold hover:bg-[#5628F6]  rounded-lg transition duration-300 sm:px-2 px-0 py-0  sm:py-1">Personal Blogging App</Link>
        <div className="flex justify-center items-center font-semibold sm:mr-12 mr-5 ">

          <Link to="/" className="text-white sm:px-2 px-0 py-0  sm:py-1  sm:hover:bg-[#5628F6] rounded-lg transition duration-300">{Home}</Link>

          <Link to="/dashboard" className="text-white sm:px-2 px-0 py-0  sm:py- 1sm: hover:bg-[#5628F6] rounded-lg transition duration-300">{Dashboard}</Link>

          <Link to="/profile" className="text-white sm:px-2 px-0 py-0  sm:p ysm:-1 hover:bg-[#5628F6] rounded-lg transition duration-300">{Profile}</Link>

          <h5
            className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6] rounded-lg cursor-pointer transition duration-300"
            onClick={logoutUser}
          >
            {Logout}
          </h5>

          <Link to="/login" className="text-white sm:px-2 px-0 py-0  sm:py-1 hover:bg-[#5628F6]  rounded-lg transition duration-300">{Login}</Link>

          <Link to="/register" className="text-white sm:px-2 px-0 py-0  sm:py -sm:1 hover:bg-[#5628F6] rounded-lg transition duration-300">{Register}</Link>

        </div>
      </div>
    </>

  )
}

export default Navbar