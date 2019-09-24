import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Onboarding } from './Styles';


const Login = () => {

  return (
    <Onboarding>
      <div className="hero-background"></div>

      <form autoComplete="off">
        <div className="form-header">
          <h1>Login</h1>
          <p>Keep your plants alive</p>
        </div>

        <div className="form-inputs">
          <label htmlFor="email">Email Address</label>
          <input type='email' id="email" name='email' placeholder='Email Address' />
          {/* {touched.email && errors.email && <p className="error-msg">{errors.email}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type='password' id="password" name='password' placeholder='Password' />
          {/* {touched.password && errors.password && <p className="error-msg">{errors.password}</p>} */}
        </div>

        <button type='submit'>
          Login
        </button>

        <p className="text-link">Not a member yet? <Link to="/">Register here</Link></p>
      </form>
    </Onboarding>
  );
};

export default Login;