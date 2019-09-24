import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UserForm from "./Onboarding/UserForm";
import Login from "./Onboarding/Login";

function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UserForm} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
  );
}

export default AppRouter;