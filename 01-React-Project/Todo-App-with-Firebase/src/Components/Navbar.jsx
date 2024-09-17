import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      margin: "30px"
    }}>
      <Link to="">Home</Link>
      <Link to="Login">Login</Link>
      <Link to="Register">Register</Link>
    </div>
  )
}

export default Navbar