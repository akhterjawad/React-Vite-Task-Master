import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Config/firebaseconfig';

const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    if (password !== repeatPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful',
          icon: 'success',
          confirmButtonText: 'Login'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/Login');
          }
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
        setEmail('');
        setPassword('');
        setRepeatPassword('');
      });
  };

  const MoveToLogin = () => {
    navigate('/Login');
  };

  return (
    <form className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" onSubmit={handleRegister}>
      <div className="min-w-[35%] mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <h1 className="block mb-3 text-center text-[1.3rem] font-medium text-gray-900 dark:text-white">Register</h1>
          <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-white">Your email</label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg block w-full p-2.5"
            placeholder="name@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-white">Your password</label>
          <input
            type="password"
            id="password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label htmlFor="repeat-password" className="block mb-2 text-[1rem] font-medium text-gray-900 dark:text-white">Repeat password</label>
          <input
            type="password"
            id="repeat-password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900">I agree with the <span className="text-blue-600 hover:underline">terms and conditions</span></label>
        </div>
        <div className='flex flex-wrap justify-center items-center'>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[0.8rem] w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
          <span onClick={MoveToLogin} className='font-semibold text-blue-600 hover:underline pl-2 cursor-pointer mt-3 sm:mt-0'>Already a user? Login First</span>
        </div>
      </div>
    </form>
  );
};

export default Register;
