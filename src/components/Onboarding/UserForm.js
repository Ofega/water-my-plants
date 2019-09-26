import React from 'react';
import { Onboarding } from './Styles';
import RegisterForm from '../Forms/RegisterForm';

const UserForm = props => {

  return (
    <Onboarding>
      <div className="hero-background"></div>
      <RegisterForm {...props} />
    </Onboarding>
  );
};

export default UserForm;