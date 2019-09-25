import React from 'react';
import { Link } from "react-router-dom";
import { Onboarding } from './Styles';


const UserForm = props => {

  const { newUser, handleInputChange, handleFormSubmit } = props;
  const { username, phonenumber, password} = newUser;

  return (
    <Onboarding>
      <div className="hero-background"></div>

      <form autoComplete="off">
        <div className="form-header">
          <h1>Register</h1>
          <p>Become a Member</p>
        </div>

        <div className="form-inputs">
          <label htmlFor="username">Username</label>
          <input type='text' id="username" name='username' onChange={(e) => handleInputChange(e, 'register')} value={username} placeholder='Username' required/>
        </div>

        <div className="form-inputs">
          <label htmlFor="phonenumber">Phone Number</label>
          <input type='phonenumber' id="phonenumber" name='phonenumber' onChange={(e) => handleInputChange(e, 'register')} value={phonenumber} placeholder='Phone Number' required/>
        </div>

        <div className="form-inputs">
          <label htmlFor="password">Password</label>
          <input type='password' id="password" name='password' onChange={(e) => handleInputChange(e, 'register')} value={password} placeholder='Password' required/>
        </div>

        <button type='submit' onClick={(e) => handleFormSubmit(e, 'register')}>
          Register
        </button>

        <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
      </form>
    </Onboarding>
  );
};

export default UserForm;