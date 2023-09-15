import React from 'react'
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form className="register-form">
          <input required type="text" placeholder="name" />
          <input required type="password" placeholder="password" />
          <input required type="email" placeholder="email address" />
          <button>create</button>
          <p className="errormsg">This is an error !</p>
          <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register
