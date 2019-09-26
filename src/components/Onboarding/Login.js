import React from 'react';
import { Onboarding } from './Styles';
import LoginForm from '../Forms/LoginForm';


const Login = props => {

  const { addCurrentUser, currentUser, toggleAuthentication, notify } = props

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <LoginForm {...props} 
        toggleAuthentication={toggleAuthentication} 
        addCurrentUser={addCurrentUser} 
        currentUser={currentUser} 
        notify={notify}
      />
    </Onboarding>
  );
};

export default Login;