import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import  { plantReducer } from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from './serviceWorker';


const store = createStore(
    plantReducer, applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store = { store }>
        <Router>   
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.register();


