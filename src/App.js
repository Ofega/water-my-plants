import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';
import { useLocalStorage } from './components/CustomHooks';
import { ToastContainer, toast } from "react-toastify";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/Onboarding/UserForm";
import Login from "./components/Onboarding/Login";

import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  const [ plants, setPlants ] = useState([]);
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ isAuthenticated, setIsAuthenticated ] = useLocalStorage('isAuthenticated', false);
  const [ currentUser, setCurrentUser ] = useLocalStorage('username', '');
  const [ token, setToken ] = useLocalStorage('token', '');
  const [ currentUserID, setCurrentUserID ] = useState('');
  const [ newPlant, setNewPlant ] = useState(null);


  const addCurrentUser = (user) => {
    setCurrentUser(user);
  }

  const addToken = (token) => {
    setToken(token);
  }

  const toggleAuthentication = () => {
    setIsAuthenticated(!isAuthenticated)
  }

  const notify = (msg, type) => {
    toast[`${type}`](msg, {
      position: "top-right"
    });
  }

  useEffect(() => {
    if(currentUser !== '') {
      axios
        .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
        .then(res => {
          setCurrentUserID(res.data.userid);
          setPlants(res.data.plants);
        })
    }
  }, [currentUser])

  useEffect(() => {
    if(newPlant !== null) {
      axios
        .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
        .then(res => {
          setPlants(res.data.plants);
        })
    }
  }, [currentUser, newPlant])


  const addPlant = ( newPlantObj ) => {
    axiosWithAuth()
      .post("plants/plant", newPlantObj)
      .then(res => {
        setNewPlant(res.data);
        notify('New Plant Added', 'success')
      })
      .catch(err => notify('Unsuccessful! Try Again', 'error'))
  }

  const deletePlant = (plantid, plantObj) =>{
    axiosWithAuth()
      .delete(`plants/plant/${plantid}`)
      .then(res => {
        setNewPlant(plantObj);
        notify('Plant Deleted', 'success')
      })
      .catch(err => notify('Unsuccessful! Try Again', 'error'))
  }

  // Handler Functions
  const showModal = (e) => {
    setModalOpen(!isModalOpen);
  }

  return (   
    <>   
      <Switch>
        <Route 
          path="/register" 
          render={(props) => <UserForm notify={notify} {...props} />}
        />

        <Route 
          path="/login" 
          render={(props) => <Login 
            notify={notify}
            addToken={addToken} 
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
    </>
  );
}

export default App;

