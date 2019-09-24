import React from 'react';
import styled from "styled-components";
import PlantsList from "../components/PlantsList";
import onboardingBG from '../img/onboarding-bg.jpg';


const Dashboard = props => {
    const { plantsList } = props;

    return (
        <MainContainer>
            <header>
                <img src={onboardingBG} alt="Header Background" />
                <div className="header-content">
                    <h1>Welcome Smithy!</h1>
                    
                    <button>
                        +
                    </button>
                </div>
            </header>
            <PlantsList plantsList={plantsList} />
        </MainContainer>
    )
}

export default Dashboard;

const MainContainer = styled.div`
    min-height: 100vh;

    header {
        height: 25vh;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        img {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            position: relative;
            max-width: 1140px;
            margin: 0 auto 1rem;
            width: 100%;

            h1 {
                position: relative;
                color: #fff;
                font-size: 3rem;
                margin: 0;
            }

            button {
                color: #fff;
                font-size: 3rem;
                font-weight: 600;
                outline: 0;
                border: none;
                background: #419BA0 none;
                text-align: center;
                border-radius: 50%;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                user-select: none;
                transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
                -webkit-tap-highlight-color: transparent;
                position: absolute;
                right: 0;
                bottom: -40px;
                height: 70px;
                width: 70px;
    
                &:hover {
                    background-color: #63ADB1;
                    background-image: none;
                    -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                    box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                    color: rgba(255, 255, 255, .8);
                }
            }
        }
    }
`