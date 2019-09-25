import React, { useState } from 'react';
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import UserForm from "./components/Onboarding/UserForm";
import Login from "./components/Onboarding/Login";
import { userSignUp, testFunc, userLogIn } from "./actions"
import Dashboard from "./components/Dashboard";

const App = () => {

  // Empty User Constant
  const initialNewUser = {
    username: '',
    phonenumber: '',
    password: ''
  }

  const initialExistingUser = {
    loginUsername: '',
    loginPassword: ''
  }

  const mockPlantData = [
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
      schedule: 4,
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
  ]

 // Initial State for now. Until Redux get incorporated
  const [ newUser, setNewUser] = useState(initialNewUser);
  const [ existingUser, setExistingUser] = useState(initialExistingUser);
  const [ plantsList, setPlantsList ] = useState([]);


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
    const { username, phonenumber, password } = newUser;
    const { loginUsername, loginPassword } = existingUser;

    // Note: Check formType, then check if all form fields are filled under each form type. If they are, then submit. If they are not, html5 form validation will take place.

    if(formType === 'register') { 
      if(username && phonenumber && password) {
        e.preventDefault();

        console.log("value of newUser inside of handleFormSubmit", newUser);
        // testFunc(newUser); //testing to see if this is making it back to actions
        userSignUp(newUser); //this is from actions/lc

        // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)
        // setNewUser(initialNewUser);
        setExistingUser(newUser);
        //THEN PUSH TO LOGIN
      }
    } else if(formType === 'login') {
      if(loginUsername && loginPassword) {
        e.preventDefault();
        userLogIn({username: existingUser.loginUsername, password: existingUser.loginPassword});
        console.log("Object made in login form",{username: existingUser.loginUsername, password: existingUser.loginPassword});

        // console.log("existingUser", existingUser);
        // ON SUBMIT, DO WHAT YOU WANT WITH THE EXISTING USER OBJECT HERE :)
        setExistingUser(newUser);

        //THEN PUSH TO APP DASHBOARD
      }
    }
  }

  return (
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
        render={(props) => <Dashboard 
          {...props}
          plantsList={plantsList}
        />}
      />
    </Switch>
  );
}

export default App;

