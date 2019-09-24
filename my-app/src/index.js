import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import FormikApp from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const store = createStore(
    reducer, applyMiddleware(thunk)
);



ReactDOM.render(
    <Provider store = { store }>
    <Router>   
    <FormikApp />
    </Router>
    </Provider>,
 document.getElementById('root'));


 //CHECK FOR DEPENDENCIES YOU MIGHT BE MISSING