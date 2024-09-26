import React, { useEffect, useState } from 'react'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase/FirebaseMethod'

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
    <NavbarBlow PageName='Dashboard'/>
      Dashboard
    </>
  )
}

export default Dashboard
