import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Onboarding } from './Styles';


const UserForm = () => {

  return (
    <Onboarding>
      <div className="hero-background"></div>

      <form autoComplete="off">
        <div className="form-header">
          <h1>Register</h1>
          <p>Become a Member</p>
        </div>

        <div className="form-inputs">
          <label htmlFor="name">Full Name</label>
          <input type='text' id="name" name='Name' placeholder='Name' />
          {/* {touched.name && errors.name && <p className="error-msg">{errors.name}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="email">Email Address</label>
          <input type='email' id="email" name='email' placeholder='Email Address' />
          {/* {touched.email && errors.email && <p className="error-msg">{errors.email}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="phone">Phone Number</label>
          <input type='phone' id="phone" name='phone' placeholder='Phone Number' />
          {/* {touched.phone && errors.phone && <p className="error-msg">{errors.phone}</p>} */}
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type='password' id="password" name='password' placeholder='Password' />
          {/* {touched.password && errors.password && <p className="error-msg">{errors.password}</p>} */}
        </div>

        <button type='submit'>
          Register
        </button>

        <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
      </form>
    </Onboarding>
  );
};

export default UserForm;