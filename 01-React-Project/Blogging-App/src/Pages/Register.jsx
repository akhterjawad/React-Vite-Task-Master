import React, { useRef } from 'react'
import { signUpUser, uploadImage } from '../config/firebase/FirebaseMethod'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate()
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
      navigate('/login')

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
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center underline mb-6">Register</h1>

          <form onSubmit={loginUserFromFirebase}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your full name"
                ref={fullName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                ref={email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                ref={password}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <input
                type="file"
                ref={profileImage}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Register