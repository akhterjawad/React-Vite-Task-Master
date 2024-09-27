import React, { useEffect, useState } from 'react'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase/FirebaseMethod'
import Navbar from '../Components/Navbar'

const Dashboard = () => {
  const navigate = useNavigate()
  let [CheckUser, setCheckUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCheckUser(user)
        console.log(user);

        setCheckUser(true)

        return
      }
      navigate('/login')
    })
  }, [])

  return (
    <>
    <Navbar/>
    <NavbarBlow PageName='Dashboard'/>
      Dashboard
    </>
  )
}

export default Dashboard
