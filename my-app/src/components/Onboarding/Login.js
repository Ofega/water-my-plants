import React from 'react';
import { Onboarding } from './Styles';
import LoginForm from '../Forms/LoginForm';


const Login = props => {

  const { addCurrentUser } = props

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <LoginForm addCurrentUser={addCurrentUser} />
    </Onboarding>
  );
};

export default Login;