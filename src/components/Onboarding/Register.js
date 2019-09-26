import React from 'react';
import { Onboarding } from './Styles';
import RegisterForm from '../Forms/RegisterForm';
import LoadingIndicator from '../LoadingIndicator';

const UserForm = props => {

  const { toggleLoading, isLoading, notify } = props;

  return (
    <>
      <Onboarding>
        <div className="hero-background"></div>
        <RegisterForm {...props} notify={notify} toggleLoading={toggleLoading} />
      </Onboarding>
      { isLoading ? <LoadingIndicator /> : null }
    </>
  );
};

export default UserForm;