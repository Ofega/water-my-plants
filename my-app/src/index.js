import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import  { plantReducer } from "./reducers";

import App from "./App";


const store = createStore(
    plantReducer, applyMiddleware(thunk)
);

ReactDOM.render(
    
    <Provider store = { store }>
    <Router>   
        <App />
    </Router>
    </Provider>
    
,document.getElementById('root'));

