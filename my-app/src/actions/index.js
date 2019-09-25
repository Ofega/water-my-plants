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

export const userSignUp = (newUser) =>{
    // dispatch({type: USER_SIGNUP});
    console.log("TESTING")
        axios
        .post("https://nchampag-watermyplants.herokuapp.com/createnewuser", newUser) //this information should be imported from the sign up form. //done
        .then(res=>{
            console.log("res inside of userSignUp",res)
            localStorage.setItem("token", res.data.token); //shows in application console
            localStorage.setItem("username", res.data.username); //might not need "user" here
            localStorage.setItem("password", res.data.password);
            localStorage.setItem("phonenumber", res.data.phonenumber);
            // props.history.push("/login"); //
            // dispatch({
            //   type: USER_SIGNUP_SUCCESS
            // });
        })
        .catch(error => console.log("error FROM USERSIGNUP inside actions", error),
        // dispatch({type: USER_SIGNUP_FAILURE})
        );  
} 

///////LOGIN///////////


export const userLogIn = (newUser) => { //WHEN I TRY TO CURRY DISPATCH HERE IT BREAKS THE CODE
    
    //   dispatch({ type: LOGIN_START });
      axios
        .post(
          "https://nchampag-watermyplants.herokuapp.com/login",
          `grant_type=password&username=${newUser.username}&password=${newUser.password}`,
          {
            headers: {
              Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then(res => {
          console.log("cat", res);
          localStorage.setItem("token", res.data.access_token);
        //   dispatch({ type: LOGIN_SUCCESS });
                axiosWithAuth()
                  .get(`plants/userName/${newUser.username}`)
                  .then(res => {
                      console.log("res inside userName", res)
                    //   (PLANTS HERE ARE INSIDE OF Response.DATA)
                    // dispatch({type: GOT_PLANTS, payload: res.data})
                    // history.push('/dashboard')
                })
                  })
                //   .catch(err => 
                //     dispatch({type: ERROR_GETTING_PLANTS, payload: err}))
              .catch(err => {
                console.log(err.response)
                // dispatch({type: ERROR_GETTING_USER, payload: err.response})
            })
        // })
        .catch(err => {
          console.dir(err);
        //   dispatch({ type: LOGIN_FAIL });
        });

   };
////////////////ABOVE THIS LINE, TO LOGIN, WORKS////////////////////






export const getPlant = (userid) => (dispatch) =>{
    // dispatch({type: GET_PLANTS});
//this will return ALL of the specific users plants and should run when the user has a successful login
    axiosWithAuth
    .get(`/plants/${userid}`)//check this
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


export const addPlant = (newPlant) => { //new plant should come from the newPlant form and the variable it's assigned to.
    // dispatch({ type: ADD_PLANT});

    return axiosWithAuth()
    .post("plants/plant", newPlant)
    .then(res => {
        console.log("res inside addPlant", res)
        // dispatch({
        //     type: ADD_PLANT_SUCCESS,
        //     payload: res.data
        // })
    })
    .catch(error => console.log("error inside addPlant actions", error),
    // dispatch({type: ADD_PLANT_FAILURE})
    )
}
