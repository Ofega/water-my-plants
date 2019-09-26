import React, { useEffect} from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";
import onboardingBG from '../img/onboarding-bg.jpg';
import logo from '../img/logo.jpg';
import  PlantsList  from "./PlantsList";
import EditProfile from './EditProfile';
import AddPlantsModal from './AddPlantsModal';
import axios from "axios";



const Dashboard = props => {

    const { plantsList, isModalOpen, showModal } = props;
    const username = localStorage.getItem("username");

    useEffect(()=>{
        const username = localStorage.getItem("username");
        axios
            .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${username}`)
            .then(res => {
        console.log("response from aaaaa useEffect", res)
        localStorage.setItem("userid", res.data.userid)});;

    }, [])

    return (
        <MainContainer>
            <nav>
                <div className="navigation">
                    <h1 className="logo">
                        Water My plants
                        <span><img src={logo} alt="Water my plants logo" /></span>
                    </h1>
                    <ul>
                        <li><NavLink activeClassName='selected' exact to="/">Dashboard</NavLink></li>
                        <li><NavLink activeClassName='selected' to="/edit-profile">Edit Profile</NavLink></li>
                        <li><button>Logout</button></li>
                    </ul>
                </div>
            </nav>
            <header>
                <img src={onboardingBG} alt="Header Background" />
                <div className="header-content">
                    <h1>Welcome {username}!</h1>
                    
                    <button onClick={showModal}>
                        +
                    </button>
                </div>
            </header>
            <AddPlantsModal isModalOpen={isModalOpen} showModal={showModal} />
            
            <Switch>
                <Route 
                    exact path="/" 
                    render={(props) => <PlantsList
                        {...props}
                        plantsList={plantsList}
                    />}
                />

                <Route 
                    path="/edit-profile" 
                    render={(props) => <EditProfile {...props} />}
                />
            </Switch>
        </MainContainer>
    );
}

export default Dashboard;


const MainContainer = styled.div`
    min-height: 100vh;

    nav {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 6;

        .navigation {
            max-width: calc(1140px - 4rem);
            margin: 0 auto;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 40px;
            padding: 0 2rem;

            .logo {
                max-width: 270px;
                width: 100%;
                font-size: 2.5rem;
                font-family: 'Indie Flower', cursive;
                display: flex;
                align-items: center;

                span {
                    max-width: 30px;
                    margin-top: 1rem;
                    margin-left: 1rem;

                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            ul {
                list-style-type: none;
                display: flex;
                width: calc(100% - 200px);
                position: relative

                li {
                    padding: 0 2rem;

                    a, button {
                        display: inline-block;
                        padding: 2rem 0;
                        font-size: 1.4rem;
                        color: rgba(0, 0, 0, .6);
                        text-decoration: none;
                        font-weight: 500;
                        background: none;
                        border: none;
                        outline: none;

                        &.selected {
                            border-bottom: 3px solid #419BA0;
                            color: #419BA0;
                            font-weight: 600;
                        }

                        &:hover {
                            color: #419BA0;
                        }
                    }

                    &:last-of-type {
                        position: absolute;
                        right: 0;
                        padding-right: 0;
                    }
                }
            }
        }
    }

    header {
        height: 27vh;
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
            padding: 0 2rem;

            h1 {
                position: relative;
                color: #fff;
                font-size: 2.3rem;
                margin: 0;

                @media (min-width: 500px) {
                    font-size: 3rem;
                }
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
                right: 2rem;
                bottom: -40px;
                width: 70px;
                height: 70px;
    
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