import React from 'react';
import { Onboarding } from './Styles';
import RegisterForm from '../Forms/RegisterForm';


const UserForm = props => {

  const { newUser, handleInputChange, handleFormSubmit } = props;

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <RegisterForm 
        newUser={newUser}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </Onboarding>
  );
};

export default UserForm;