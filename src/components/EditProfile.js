import React from 'react';
import styled from "styled-components";
import EditProfileForm from './Forms/EditProfileForm';


const EditProfile = () => {

  return (
    <MainContainer>
      <div className="hero-background"></div>
      <EditProfileForm />
    </MainContainer>
  );
};

export default EditProfile;

const MainContainer = styled.div`
    max-width: 1140px;
    margin: 7rem auto 3rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`
