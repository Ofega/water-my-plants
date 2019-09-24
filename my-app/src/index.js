import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import App from "./App";



ReactDOM.render(
    <Provider store = { store }>
    <Router>   

        <App />
    </Router>,
document.getElementById('root'));

