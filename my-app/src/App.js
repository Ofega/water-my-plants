import React, { useState } from 'react';
import { Route, Switch, NavLink } from "react-router-dom";
import styled from "styled-components";
import onboardingBG from './img/onboarding-bg.jpg';
import PlantsList from "./components/PlantsList";
import UserForm from "./components/Onboarding/UserForm";
import Login from "./components/Onboarding/Login";

const App = () => {

  // Empty User Constant
  const initialNewUser = {
    username: '',
    phone: '',
    password: ''
  }

  const initialExistingUser = {
    loginUsername: '',
    loginPassword: ''
  }

 // Initial State for now. Until Redux get incorporated
  const [ newUser, setNewUser] = useState(initialNewUser);
  const [ existingUser, setExistingUser] = useState(initialExistingUser);
  const [ plantsList, setPlantsList ] = useState([
    {
      id: 1,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 2,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 1,
    },
    {
      id: 3,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 4,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 5,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 6,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 7,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    },
    {
      id: 8,
      species: 'Lucky Bamboo1',
      name: 'Bambi',
      location: 'Kitchen',
      schedule: 4,
    }
  ])


  // Handler Functions
  const handleInputChange = (e, formType) => {
    if(formType === 'register') {
      setNewUser({
        ...newUser,
        [e.target.id]: e.target.value
      })
    } else if(formType === 'login') {
      setExistingUser({
        ...existingUser,
        [e.target.id]: e.target.value
      })
    }
  }

  const handleFormSubmit = (e, formType) => {
    const { username, phone, password } = newUser;
    const { loginUsername, loginPassword } = existingUser;

    // Note: Check formType, then check if all form fields are filled under each form type. If they are, then submit. If they are not, html5 form validation will take place.

    if(formType === 'register') { 
      if(username && phone && password) {
        e.preventDefault();

        console.log(newUser);
        // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)
        setNewUser(initialNewUser);

        //THEN PUSH TO LOGIN
      }
    } else if(formType === 'login') {
      if(loginUsername && loginPassword) {
        e.preventDefault();

        console.log(existingUser);
        // ON SUBMIT, DO WHAT YOU WANT WITH THE EXISTING USER OBJECT HERE :)
        setExistingUser(initialExistingUser);

        //THEN PUSH TO APP DASHBOARD
      }
    }
  }

  return (
    <MainContainer>
      <nav>
          <div className="navigation">
              <h1 className="logo">
                Water My plants
              </h1>
              <ul>
                  <li><NavLink activeClassName='selected' to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink activeClassName='selected' to="/edit-profile">Edit Profile</NavLink></li>
                  <li><button>Logout</button></li>
              </ul>
          </div>
      </nav>
      <header>
          <img src={onboardingBG} alt="Header Background" />
          <div className="header-content">
              <h1>Welcome Smithy!</h1>
              
              <button>
                  +
              </button>
          </div>
      </header>
      
      <Switch>
        <Route 
          exact 
          path="/" 
          render={(props) => <UserForm {...props} 
            newUser={newUser} 
            handleFormSubmit={handleFormSubmit} 
            handleInputChange={handleInputChange} 
          />}
        />

        <Route 
          path="/login" 
          render={(props) => <Login {...props} 
            existingUser={existingUser} 
            handleFormSubmit={handleFormSubmit} 
            handleInputChange={handleInputChange} 
          />}
        />

        <Route 
          path="/dashboard" 
          render={(props) => <PlantsList
            {...props}
            plantsList={plantsList}
          />}
        />
      </Switch>
    </MainContainer>
  );
}

export default App;


const MainContainer = styled.div`
    min-height: 100vh;

    nav {
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 6;

        .navigation {
            max-width: 1140px;
            margin: 0 auto;
            width: 100%;
            background: #fff;
            display: flex;
            align-items: center;
            min-height: 40px;
            padding: 0 0 0 2rem;

            .logo {
              max-width: 200px;
              font-family: 'Indie Flower', cursive;
            }

            ul {
                list-style-type: none;
                display: flex;
                width: calc(100% - 200px);
                margin-left: 6rem;
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