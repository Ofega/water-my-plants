import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useLocalStorage } from './components/CustomHooks';
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/Dashboard";
import Register from "./components/Onboarding/Register";
import Login from "./components/Onboarding/Login";

import axios from "axios";
import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";


const App = ({ location }) => {

  const [ plants, setPlants ] = useState([]); //All the plants for the user
  const [ isLoading, setLoadingIndicator ] = useState(false); //Loading Indicator
  const [ isModalOpen, setModalOpen ] = useState(false); //Modal Toggle
  const [ isAuthenticated, setIsAuthenticated ] = useLocalStorage('isAuthenticated', false); //Is User Authenticated (for private routes)
  const [ currentUser, setCurrentUser ] = useLocalStorage('username', ''); //Current Logged In User
  const [ currentUserID, setCurrentUserID ] = useState(''); //UserID for current loggedIn user. Used to post requests
  const [ token, setToken ] = useLocalStorage('token', ''); //User Token. Set to local storage during log in
  const [ newPlant, setNewPlant ] = useState(null); //Object to detect if a new plant is added and what should happen after


  const addCurrentUser = (user) => {
    setCurrentUser(user);
  }

  const addToken = (token) => {
    setToken(token);
  }

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const toggleLoading = (bool) => {
    setLoadingIndicator(bool);
  }

  const showModal = (e) => {
    e.preventDefault();
    setModalOpen(!isModalOpen);
  }

  const notify = (msg, type) => {
    toast[`${type}`](msg, {
      position: "top-right"
    });
  }

  const addPlant = ( newPlantObj ) => {
    axiosWithAuth()
      .post("plants/plant", newPlantObj)
      .then(res => {
        setNewPlant(res.data);
        toggleLoading(false);
        notify('New Plant Added', 'success')
      })
      .catch(err => {
        toggleLoading(false); 
        notify('Unsuccessful! Try Again', 'error')
      })
  }

  const deletePlant = (plantid, plantObj) => {
    toggleLoading(true);
    axiosWithAuth()
      .delete(`plants/plant/${plantid}`)
      .then(res => {
        setNewPlant(plantObj);
        toggleLoading(false);
        notify('Plant Deleted', 'success')
      })
      .catch(err => {
        toggleLoading(false); 
        notify('Unsuccessful! Try Again', 'error')
      })
  }


  useEffect(() => {
    if(currentUser !== '') {
      axios
        .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
        .then(res => {
          setCurrentUserID(res.data.userid);
          setPlants(res.data.plants);
          toggleLoading(false);
        })
        .catch(err => {
          toggleLoading(false); 
          notify('Unsuccessful! Refresh page', 'error')
        })
    }
  }, [currentUser, newPlant])

  return (   
    <Wrapper>   
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={{ enter: 500, exit: 500 }}
          classNames={'scale'}
        >
          <section>
            <Switch location={location}>
              <Route 
                path="/register" 
                render={(props) => <Register
                  notify={notify} 
                  isLoading={isLoading}
                  toggleLoading={toggleLoading}
                  {...props} 
                />}
              />

              <Route 
                path="/login" 
                render={(props) => <Login 
                  notify={notify}
                  addToken={addToken} 
                  isLoading={isLoading}
                  toggleLoading={toggleLoading}
                  toggleAuthentication={toggleAuthentication} 
                  addCurrentUser={addCurrentUser} 
                  currentUser={currentUser} {...props} 
                />}
              />

              <Route path="/" render={
                    props => isAuthenticated ? (
                        <Dashboard
                          {...props}
                          notify={notify}
                          plants={plants}
                          addPlant={addPlant}
                          deletePlant={deletePlant}
                          currentUser={currentUser}
                          currentUserID={currentUserID}
                          isLoading={isLoading}
                          toggleLoading={toggleLoading}
                          isModalOpen={isModalOpen}
                          showModal={showModal}
                          toggleAuthentication={toggleAuthentication}
                        />
                      ) : (
                        <Redirect to={{ pathname: "/login" }} />
                      )
                  }
                />
            </Switch>
            <ToastContainer />
          </section>
        </CSSTransition>  
      </TransitionGroup>      
    </Wrapper>
  );
}

export default withRouter(App);

const Wrapper = styled.div`
  .scale-enter {
    transform: translateY(-20px);
    // opacity: 0.7;

    &.scale-enter-active {
      transform: translateY(0);
      // opacity: 1;
      transition: all .5s ease-in;
    }
  }

  .scale-exit {
    transform: translateY(-20px);
    // opacity: 0.7;

    &.scale-exit-active {
      transform: translateY(0);
      // opacity: 1;
      transition: all .5s ease-in;
    }
  }
`

