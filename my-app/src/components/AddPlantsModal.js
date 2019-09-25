import React from 'react';
import styled from "styled-components";
import { AddPlantsForm } from './Forms';


const AddPlantsModal = props => {

  const { isModalOpen, showModal, newPlant, handleInputChange, handleFormSubmit } = props;

  return (
    isModalOpen ? (
      <MainContainer>
        <div className="hero-background"></div>
        <AddPlantsForm 
          showModal={showModal}
          newPlant={newPlant}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </MainContainer>
    ) : null
  );
};

export default AddPlantsModal;

const MainContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: fixed;
    background: rgba(0, 0, 0, .9);
    width: 100%;
    top: 0;
    justify-content: center;
    height: 100%;
    z-index: 1000;
`
