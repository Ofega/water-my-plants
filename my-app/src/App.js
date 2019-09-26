import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import { axiosWithAuth } from './utils/axiosWithAuth';
import axios from "axios";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/Onboarding/UserForm";
import Login from "./components/Onboarding/Login";



const App = () => {

  const userName = localStorage.getItem('username') || '';

  const [ plants, setPlants ] = useState([]);
  const [ isModalOpen, setModalOpen ] = useState(false);
  const [ currentUser, setCurrentUser ] = useState(userName);
  const [ currentUserID, setCurrentUserID ] = useState('');
  const [ newPlant, setNewPlant ] = useState(null)


  const addCurrentUser = (user) => {
    setCurrentUser(user);
  }

  useEffect(() => {
    localStorage.setItem('username', currentUser);

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
      console.log('Yaaay')
      axios
        .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${currentUser}`)
        .then(res => {
          console.log(res.data.plants)
          setPlants(res.data.plants);
        })
    }
  }, [currentUser, newPlant])


  const addPlant = ( newPlantObj ) => {
    axiosWithAuth()
      .post("plants/plant", newPlantObj)
      .then(res => {
        setNewPlant(res.data);
      })
      .catch(error => console.log("error inside addPlant actions", error)
    )
  }

  // Handler Functions
  const showModal = (e) => {
    setModalOpen(!isModalOpen);
  }

  return (      
    <Switch>
      <Route 
        exact 
        path="/register" 
        render={(props) => <UserForm {...props} />}
      />

      <Route 
        path="/login" 
        render={(props) => <Login addCurrentUser={addCurrentUser} {...props} />}
      />

      <Route 
        path="/" 
        render={
          (props) => 
            <Dashboard
              {...props}
              plants={plants}
              addPlant={addPlant}
              currentUser={currentUser}
              currentUserID={currentUserID}
              isModalOpen={isModalOpen}
              showModal={showModal}
            />
        }
      />
    </Switch>
  );
}

export default App;

