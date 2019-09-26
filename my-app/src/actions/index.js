import  { axiosWithAuth } from "../utils/axiosWithAuth"
import axios from "axios";
export const USER_SIGNUP = "USER_SIGNUP";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAILURE = "USER_SIGNUP_FAILURE";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const GET_PLANTS = "GET_PLANTS";
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS";
export const GET_PLANTS_FAILURE = "GET_PLANTS_FAILURE";

export const ADD_PLANT = "ADD_PLANT";
export const ADD_PLANT_SUCCESS = "ADD_PLANT_SUCCESS";
export const ADD_PLANT_FAILURE = "ADD_PLANT_FAILURE"

export const EDIT_PLANT = "EDIT_PLANT";
export const EDIT_PLANT_SUCCESS = "EDIT_PLANT_SUCCESS"
export const EDIT_PLANT_FAILURE = "EDIT_PLANT_FAILURE"

//add failures



///////LOGIN///////////








export const getPlant = (userid) => (dispatch) =>{
    dispatch({type: GET_PLANTS});
//this will return ALL of the specific users plants and should run when the user has a successful login
  axiosWithAuth()
    .get(`plants/${userid}`)//check this userID
    .then(res =>{
        console.log("res inside getPlant", res)
        dispatch({ type: GET_PLANTS_SUCCESS,
                    payload: res.data
        });
        
    })
    .catch(err => console.log("error inside get plant actions", err),
    // dispatch({type: GET_PLANTS_FAILURE})
    )
}



// export const addPlant = (newPlant) => { //new plant should come from the newPlant form and the variable it's assigned to.

//     return axiosWithAuth()
//     .post("plants/plant", newPlant)
//     .then(res => {
//         console.log("res inside addPlant", res)
//     })
//     .catch(error => console.log("error inside addPlant actions", error),
//     )
// }
