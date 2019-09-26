import React from 'react';
import { Onboarding } from './Styles';
import RegisterForm from '../Forms/RegisterForm';

const UserForm = props => {

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <RegisterForm />
    </Onboarding>
  );
};

export default UserForm;