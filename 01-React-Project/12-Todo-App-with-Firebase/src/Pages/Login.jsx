// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//     signInWithEmailAndPassword,
//     GoogleAuthProvider,
//     sendPasswordResetEmail,
//     signInWithPopup
// } from 'firebase/auth';
// import { auth } from '../Config/firebaseconfig';
// import Swal from 'sweetalert2';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     let navigate = useNavigate();

//     const provider = new GoogleAuthProvider();

//     const handleLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'You are logged in successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Login'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         navigate('/MainTodo'); // Update the path as needed
//                     }
//                 });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again'
//                 });
//             });
//     };

//     const handleForgotPassword = () => {
//         const resetEmail = prompt('Enter your email');
//         if (resetEmail) {
//             sendPasswordResetEmail(auth, resetEmail)
//                 .then(() => {
//                     alert('Password reset email sent');
//                 })
//                 .catch((error) => {
//                     Swal.fire({
//                         title: 'Error!',
//                         text: error.message,
//                         icon: 'error',
//                         confirmButtonText: 'Try Again'
//                     });
//                 });
//         }
//     };

//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 Swal.fire({
//                     title: 'Success!',
//                     text: 'You are logged in successfully',
//                     icon: 'success',
//                     confirmButtonText: 'Login'
//                 }).then((result) => {
//                     if (result.isConfirmed) {
//                         navigate('/MainTodo'); // Update the path as needed
//                     }
//                 });
//             })
//             .catch((error) => {
//                 Swal.fire({
//                     title: 'Error!',
//                     text: error.message,
//                     icon: 'error',
//                     confirmButtonText: 'Try Again'
//                 });
//             });
//     };

//     const MoveToRegister = () => {
//         navigate('/register');
//     };

//     return (
//         <form onSubmit={handleLogin} className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
//             <div className="min-w-[35%] mx-auto bg-white p-8 rounded-lg shadow-lg">
//                 <div className="mb-5">
//                     <h1 className="block mb-2 text-[1.3rem] text-center font-medium text-gray-900">Login</h1>
//                     <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900">
//                         Your email
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                         placeholder="name@gmail.com"
//                         required
//                     />
//                 </div>
//                 <div className="mb-5">
//                     <label htmlFor="password" className="block mb-2 text-[1rem] font-medium text-gray-900">
//                         Your password
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
//                         required
//                     />
//                 </div>
//                 <div className="flex items-start mb-5">
//                     <div className="flex items-center h-5">
//                         <input
//                             id="remember"
//                             type="checkbox"
//                             className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
//                         />
//                     </div>
//                     <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
//                         Remember me
//                     </label>
//                 </div>
//                 <div className="flex flex-col justify-center gap-2  items-center">
//                     <button
//                         type="submit"
//                         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[0.8rem] w-full px-5 py-2.5 text-center"
//                     >
//                         Submit
//                     </button>
//                     <span onClick={handleForgotPassword} className="text-blue-600 hover:underline cursor-pointer font-semibold">
//                         Forgot Password?
//                     </span>
//                 </div>
//                 <div className="flex items-center gap-2 flex-col justify-center mt-3">
//                     <button onClick={handleGoogleSignIn} type="button" className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-[0.8rem] w-full px-5 py-2.5">
//                         Sign in with Google
//                     </button>
//                     <span onClick={MoveToRegister} className="font-semibold text-blue-600 hover:underline  cursor-pointer mt-3 sm:mt-0">
//                         Not a user? Register First
//                     </span>
//                 </div>
//             </div>
//         </form>
//     );
// };

// export default Login;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    signInWithPopup
} from 'firebase/auth';
import { auth } from '../Config/firebaseconfig';
import Swal from 'sweetalert2';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // New state for loading
    let navigate = useNavigate();

    const provider = new GoogleAuthProvider();

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading when login process begins

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setIsLoading(false); // Stop loading after login is successful
                Swal.fire({
                    title: 'Success!',
                    text: 'You are logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Login'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/'); // Update the path as needed
                    }
                });
            })
            .catch((error) => {
                setIsLoading(false); // Stop loading if there's an error
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const handleForgotPassword = () => {
        const resetEmail = prompt('Enter your email');
        if (resetEmail) {
            sendPasswordResetEmail(auth, resetEmail)
                .then(() => {
                    alert('Password reset email sent');
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error!',
                        text: error.message,
                        icon: 'error',
                        confirmButtonText: 'Try Again'
                    });
                });
        }
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                Swal.fire({
                    title: 'Success!',
                    text: 'You are logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Login'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/'); // Update the path as needed
                    }
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const MoveToRegister = () => {
        navigate('/register');
    };

    return (
        <form onSubmit={handleLogin} className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="min-w-[35%] mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-5">
                    <h1 className="block mb-2 text-[1.3rem] text-center font-medium text-gray-900">Login</h1>
                    <label htmlFor="email" className="block mb-2 text-[1rem] font-medium text-gray-900">
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name@gmail.com"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block mb-2 text-[1rem] font-medium text-gray-900">
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-[1rem] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        required
                    />
                </div>
                <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                        <input
                            id="remember"
                            type="checkbox"
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                        />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">
                        Remember me
                    </label>
                </div>
                <div className="flex flex-col justify-center gap-2 items-center">
                    <button
                        type="submit"
                        disabled={isLoading} // Disable the button when loading
                        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-[0.8rem] w-full px-5 py-2.5 text-center 
                        ${isLoading ? 'bg-blue-500 cursor-not-allowed' : ''}`}
                    >
                        {isLoading ? ( // Show loader when isLoading is true
                            <div className="flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
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
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 2.42.858 4.645 2.291 6.291l1.709-1.709z"
                                    ></path>
                                </svg>
                                <span className="ml-2">Logging in...</span>
                            </div>
                        ) : (
                            'Submit'
                        )}
                    </button>
                    <span onClick={handleForgotPassword} className="text-blue-600 hover:underline cursor-pointer font-semibold">
                        Forgot Password?
                    </span>
                </div>
                <div className="flex items-center gap-2 flex-col justify-center mt-3">
                    <button onClick={handleGoogleSignIn} type="button" className="text-white bg-red-500 hover:bg-red-600 font-medium rounded-lg text-[0.8rem] w-full px-5 py-2.5">
                        Sign in with Google
                    </button>
                    <span onClick={MoveToRegister} className="font-semibold text-blue-600 hover:underline cursor-pointer mt-3 sm:mt-0">
                        Not a user? Register First
                    </span>
                </div>
            </div>
        </form>
    );
};

export default Login;
