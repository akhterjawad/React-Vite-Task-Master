import React, { useRef } from 'react'
import { signUpUser, uploadImage } from '../config/firebase/FirebaseMethod'

const Register = () => {
  const fullName = useRef()
  const email = useRef()
  const password = useRef()
  const profileImage = useRef()

  const loginUserFromFirebase = async (event) => {
    event.preventDefault()
    console.log(email.current.value)
    console.log(password.current.value)
    console.log(fullName.current.value)
    console.log(profileImage.current.files[0])

    const userProfileImageUrl = await uploadImage(profileImage.current.files[0], email.current.value)

    try {
      const userData = await signUpUser({
        email: email.current.value,
        password: password.current.value,
        fullName: fullName.current.value,
        profileImage: userProfileImageUrl
      })
      console.log(userData);

    } catch (error) {
      console.error(error);

    }

  }
  return (
    <>
{/* <div className=' bg-slate-950'><h1>Signup</h1></div>
<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1> */}
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <h1>register</h1>
      <form onSubmit={loginUserFromFirebase}>
        <input type="text" placeholder='enter your full name' ref={fullName} /> <br /> <br />
        <input type="email" placeholder='enter your email' ref={email} /><br /> <br />
        <input type="password" placeholder='enter your password' ref={password} /><br /> <br />
        <input type="file" placeholder='enter your profile picture' ref={profileImage} /><br /> <br />
        <button type='submit'>register</button>
      </form>
    </>
  )
}

export default Register