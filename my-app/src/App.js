import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UserForm from "./components/Onboarding/UserForm";
import Login from "./components/Onboarding/Login";


const App = () => {

  // Initial State for now. Until Redux get incorporated
  const [ isModalOpen, setModalOpen ] = useState(false);
  // const [ plantsList ] = useState([
  //   // {
  //   //   id: 1,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 2,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 1,
  //   // },
  //   // {
  //   //   id: 3,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 4,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 5,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 6,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 7,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // },
  //   // {
  //   //   id: 8,
  //   //   species: 'Lucky Bamboo1',
  //   //   name: 'Bambi',
  //   //   location: 'Kitchen',
  //   //   schedule: 4,
  //   // }
  // ])

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
        render={(props) => <Login {...props} />}
      />

      <Route 
        path="/" 
        render={(props) => <Dashboard
          {...props}
          // plantsList={plantsList}
          isModalOpen={isModalOpen}
          showModal={showModal}
        />}
      />
    </Switch>
  );
}

export default App;

