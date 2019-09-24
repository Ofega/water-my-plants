import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
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
    username: '',
    password: ''
  }

 // Initial State
  const [ newUser, setNewUser] = useState(initialNewUser);
  const [ existingUser, setExistingUser] = useState(initialExistingUser);


  // Handler Functions
  const handleInputChange = (e, formType) => {
    if(formType === 'register') {
      setNewUser({
        ...newUser,
        [e.target.id]: e.target.value
      })
    } else {
      setExistingUser({
        ...existingUser,
        [e.target.id]: e.target.value
      })
    }
  }

  const handleFormSubmit = (e, formType) => {
    e.preventDefault();

    if(formType === 'register') {
      console.log(newUser);
      // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)
      setNewUser(initialNewUser);
    } else {
      console.log(existingUser);
      // ON SUBMIT, DO WHAT YOU WANT WITH THE EXISTING USER OBJECT HERE :)
      setExistingUser(initialNewUser);
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
    </Switch>
  );
}

export default App;