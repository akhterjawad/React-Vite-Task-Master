import React, { useEffect, useState } from 'react'
import NavbarBlow from '../Components/NavbarBlow'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/firebase/FirebaseMethod'
import Navbar from '../Components/Navbar'

const Dashboard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
      <Navbar />
      <NavbarBlow PageName='Dashboard' />
      {/* flex items-center sm:items-start flex-col justify-start sm:pl-[100px] pl-0 bg-gray-400 h-screen overflow-y-auto */}
      <div className='flex items-center sm:items-start flex-col justify-start sm:pl-[100px] pl-0 bg-gray-400 min-h-screen'>
        <div className='flex items-center flex-col justify-center gap-5  max-h-96  bg-white w-[95%]  sm:w-[80%] mt-20 rounded-sm'>
          <input
            type="text"
            id="small-input"
            className="mt-10 block w-[80%] p-2 text-gray-900 border  border-gray-300 rounded-lg  text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />


          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-[80%] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
            defaultValue={""}
          />
          <div className='w-[80%]'>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center w-32 mb-10 py-2 rounded-lg transition duration-300 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-5 w-5 mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12c0-1.5.4-2.9 1.1-4.1l1.5 1.5C6.9 10.3 6 11.1 6 12s.9 1.7 2.6 2.6l-1.5 1.5C4.4 14.9 4 13.5 4 12zm16 0c0 1.5-.4 2.9-1.1 4.1l-1.5-1.5C17.1 13.7 18 12.9 18 12s-.9-1.7-2.6-2.6l1.5-1.5C19.6 9.1 20 10.5 20 12z"
                  ></path>
                </svg>
              ) : (
                'Publish Blogs'
              )}
              {isSubmitting && <span className="ml-2">Processing...</span>}
            </button>
          </div>
        </div>
        <h1 className='font-semibold sm:text-[2rem] self-start ml-2 sm:ml-0 text-[1.5rem] sm:mb-5 mb-2 sm:mt-5 mt-2 borde'>My Blogs</h1>
<div className='p-10 flex items-center flex-col justify-center gap-5  max-h-96  bg-white w-[95%]  sm:w-[80%]  rounded-sm border'></div>

      </div>
    </>
  )
}

export default Dashboard
