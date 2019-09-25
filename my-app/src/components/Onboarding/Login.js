import React from 'react';
import { Onboarding } from './Styles';
import { LoginForm } from '../Forms';


const Login = props => {

  const { existingUser, handleInputChange, handleFormSubmit } = props;

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <LoginForm 
        existingUser={existingUser}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </Onboarding>
  );
};

export default Login;