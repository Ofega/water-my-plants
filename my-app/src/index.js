import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux"; //IMPORTED
import  { plantReducer } from "./reducers";//IMPORTED
import { createStore, applyMiddleware } from "redux"; //IMPORTED
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';


const store = createStore(
    plantReducer, applyMiddleware(thunk)
);
//STORE CREATED


ReactDOM.render(
    <Provider store = { store }>
        {/* WRAPPED THE APP IN PROVIDER, DOES ROUTER NEED TO BE OUTSIDE? */}
        <Router>   
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.register();


