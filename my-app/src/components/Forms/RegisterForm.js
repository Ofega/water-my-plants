import React, { useState } from "react";
import { Form } from './Styles';
import { Link } from "react-router-dom";
import axios from "axios";


const RegisterForm = () => {
const [toLogin, setToLogin] = useState(false);

    const userSignUp = (newUser) =>{
        console.log("ANOTHER TEST")
          // dispatch({type: USER_SIGNUP});
          console.log("TESTING")
             return axios
              .post("https://nchampag-watermyplants.herokuapp.com/createnewuser", newUser) //this information should be imported from the sign up form. //done
              .then(res=>{
                  console.log("res inside of userSignUp",res)
                  localStorage.setItem("token", res.data.token); //shows in application console
                  
              })
              .catch(error => console.log("error FROM USERSIGNUP inside actions", error),
               ); 
          
      } 




    const initialNewUser = {
        username: '',
        phonenumber: '',
        password: ''
    }

    const [ newUser, setNewUser] = useState(initialNewUser);

    const { username, phonenumber, password } = newUser;

    // Handler Functions
    const handleInputChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        
        if(username && phonenumber && password) {
            e.preventDefault();
            console.log("value of newUser inside of handleFormSubmit", newUser);
            // testFunc(newUser); //testing to see if this is making it back to actions
            userSignUp(newUser); //this is from actions/lc
            // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)
            setNewUser(initialNewUser);
        }
    }


    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Register</h1>
                <p>Become a Member</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name='username' onChange={handleInputChange} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type='phonenumber' id="phonenumber" name='phonenumber' onChange={handleInputChange} value={phonenumber} placeholder='Phone Number' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name='password' onChange={handleInputChange} value={password} placeholder='Password' required/>
            </div>

            <Link to="/login"><button type='submit' onClick={handleFormSubmit}>
                Register
            </button></Link>

            <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
        </Form>
    )
}

export default RegisterForm;