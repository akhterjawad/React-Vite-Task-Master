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
  const [loading, setLoading] = useState(false); // New loading state

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email || !password || !repeatPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all fields',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    if (password !== repeatPassword) {
      Swal.fire({
        title: 'Error!',
        text: 'Passwords do not match',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
      return;
    }

    setLoading(true); // Start loading state

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        Swal.fire({
          title: 'Success!',
          text: 'Registration successful',
          icon: 'success',
          confirmButtonText: 'Login',
        }).then((result) => {
          if (result.isConfirmed) {
            setLoading(false); // Stop loading when done
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
          confirmButtonText: 'Try Again',
        });
        setEmail('');
        setPassword('');
        setRepeatPassword('');
        setLoading(false); // Stop loading in case of error
      });
  };

  const MoveToLogin = () => {
    navigate('/Login');
  };

  return (
    <form className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" onSubmit={handleRegister}>
      <div className="min-w-[35%] mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-5">
          <h1 className="block mb-3 text-center text-[1.3rem] font-medium text-gray-900">Register</h1>
          <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900">Your email</label>
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
          <label htmlFor="password" className="block mb-2 text-[1rem] font-medium text-gray-900">Your password</label>
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
          <label htmlFor="repeat-password" className="block mb-2 text-[1rem] font-medium text-gray-900">Repeat password</label>
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
        <div className="flex flex-wrap justify-center items-center">
          <button
            type="submit"
            className={`text-white font-medium rounded-lg text-[0.8rem] w-full sm:w-auto px-5 py-2.5 text-center ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'}`}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <svg className="inline w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.0818 50.5908C9.0818 74.2233 26.3675 91.509 50 91.509C73.6325 91.509 90.9182 74.2233 90.9182 50.5908C90.9182 26.9584 73.6325 9.67267 50 9.67267C26.3675 9.67267 9.0818 26.9584 9.0818 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5536C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7236 75.2124 7.55344C69.5422 4.38328 63.2754 2.54672 56.7495 2.12056C52.8424 1.85919 49.004 3.65982 47.4429 7.25347C46.0973 10.364 47.4557 13.9408 50.2202 15.3665C54.9957 17.7077 58.9057 21.4657 61.5974 26.255C63.4555 29.619 65.0575 33.3495 66.3326 37.287C67.0832 39.6161 69.5424 41.0874 71.9676 40.4503Z" fill="currentFill" />
              </svg>
            ) : (
              'Submit'
            )}
          </button>
          <span onClick={MoveToLogin} className="font-semibold text-blue-600 hover:underline pl-2 cursor-pointer mt-3 sm:mt-0">Already a user? Login First</span>
        </div>
      </div>
    </form>
  );
};

export default Register;
