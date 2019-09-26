import React from 'react';
import { Onboarding } from './Styles';
import LoginForm from '../Forms/LoginForm';


const Login = props => {

  const { addCurrentUser, currentUser, toggleAuthentication } = props

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <LoginForm {...props} toggleAuthentication={toggleAuthentication} addCurrentUser={addCurrentUser} currentUser={currentUser} />
    </Onboarding>
  );
};

export default Login;