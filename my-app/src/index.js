import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import FormikApp from "./App";


ReactDOM.render(
    <Router>   
        <FormikApp />
    </Router>,
 document.getElementById('root'));
