import React from 'react';
import { useForm } from "react-hook-form";
import { signUpUser, uploadImage } from '../config/firebase/FirebaseMethod';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import NavbarBlow from '../Components/NavbarBlow';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginUserFromFirebase = async (data) => {
    console.log(data);

    try {
      const userProfileImageUrl = await uploadImage(data.profileImage[0], data.email);
      const userData = await signUpUser({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        profileImage: userProfileImageUrl
      });
      console.log(userData);
      navigate('/login');
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <>
      <Navbar Login='Login' />
      <NavbarBlow PageName='Register' />
      <div className="flex items-center justify-center h-[79vh] pt-1 bg-gray-100">
        <div className="ml-3 mr-3 max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="sm:text-3xl text-2xl font-bold text-center underline mb-6">Register</h1>

          <form onSubmit={handleSubmit(loginUserFromFirebase)}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("fullName", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.fullName && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.email && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.password && <span className="text-red-500 text-sm mt-1">This field is required</span>}
            </div>

            <div className="mb-6">
              <input
                type="file"
                {...register("profileImage", { required: true })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
              {errors.profileImage && <span className="text-red-500 text-sm mt-1">This field is required</span>}
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
  );
};

export default Register;
