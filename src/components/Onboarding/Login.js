import React from 'react';
import { Onboarding } from './Styles';
import LoginForm from '../Forms/LoginForm';
import LoadingIndicator from '../LoadingIndicator';


const Login = props => {

  const { addCurrentUser, currentUser, toggleAuthentication, notify, isLoading, toggleLoading } = props

  return (
      <>
        <Onboarding>
          <div className="hero-background"></div>
          <LoginForm {...props} 
            toggleAuthentication={toggleAuthentication} 
            addCurrentUser={addCurrentUser} 
            currentUser={currentUser} 
            notify={notify}
            toggleLoading={toggleLoading}
          />
        </Onboarding>
        { isLoading ? <LoadingIndicator /> : null }
      </>
  );
};

export default Login;