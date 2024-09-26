import React, { useEffect, useState } from 'react'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase/FirebaseMethod'
const SingleUser = () => {

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
      <div style={{
        color: '#7749F8'
      }}>
        <NavbarBlow PageName='<Back to all blogs' />
      </div>
      <div>
        SingleUser
      </div>
    </>
  )
}

export default SingleUser
