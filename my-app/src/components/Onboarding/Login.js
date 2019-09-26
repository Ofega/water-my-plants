import React from 'react';
import { Onboarding } from './Styles';
import LoginForm from '../Forms/LoginForm';


const Login = () => {

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <LoginForm />
    </Onboarding>
  );
};

export default Login;