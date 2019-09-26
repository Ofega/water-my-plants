import React, { useState } from "react";
import { Form } from './Styles';
import { Link } from "react-router-dom";
import axios from "axios";


const RegisterForm = props => {

    const { history } = props;

    const userSignUp = (newUser) =>{
        axios
            .post("https://nchampag-watermyplants.herokuapp.com/createnewuser", newUser)
            .then(res => {
                history.push('/login')
            })
            .catch(error => console.log("error FROM USERSIGNUP inside actions", error));    
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
            userSignUp(newUser);
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

            <button type='submit' onClick={handleFormSubmit}>
                Register
            </button>

            <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
        </Form>
    )
}

export default RegisterForm;