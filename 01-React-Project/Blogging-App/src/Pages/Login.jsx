import React from 'react';
import { useForm } from "react-hook-form";
import { loginUser } from '../config/firebase/FirebaseMethod';
import { useNavigate } from 'react-router-dom';
import NavbarBlow from '../Components/NavbarBlow';
import Navbar from '../Components/Navbar';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const loginUserFromFirebase = async (data) => {
    console.log(data);
    try {
      const userLogin = await loginUser({
        email: data.email,
        password: data.password,
      });
      console.log(userLogin);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar Register='Register' />
      <NavbarBlow PageName='Login' />

      <div className="flex items-center justify-center h-[78vh] bg-gray-100">
        <div className="w-full max-w-sm p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form onSubmit={handleSubmit(loginUserFromFirebase)} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1 block">This field is required</span>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <span className="text-red-500 text-sm mt-1 block">This field is required</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
