import React from 'react'
import { useForm } from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)


  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" placeholder='enter your email' {...register("email", { required: true })} /><br />
        {errors.email && <span className='text-danger'>This field is required</span>}
        <br />
        <input type="password" placeholder='enter your password' {...register("password", { required: true })} /><br />
        {errors.password && <span className='text-danger'>This field is required</span>}
        <br />
        <button type='submit'>login</button>
      </form>

    </>
  )
}

export default App
