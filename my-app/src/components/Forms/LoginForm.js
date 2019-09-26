import React, { useState } from "react";
import { Form } from './Styles';
import { Link } from "react-router-dom";
import { userLogIn } from "../../actions";


const LoginForm = props => {

    const { addCurrentUser } = props

    const initialExistingUser = {
        loginUsername: '',
        loginPassword: ''
    }

    const [ existingUser, setExistingUser] = useState(initialExistingUser);

    const { loginUsername, loginPassword } = existingUser;

    // Handler Functions
    const handleInputChange = (e) => {
        setExistingUser({
            ...existingUser,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        if(loginUsername && loginPassword) {
            e.preventDefault();
            userLogIn({username: existingUser.loginUsername, password: existingUser.loginPassword});
            console.log("Object made in login form",{username: existingUser.loginUsername, password: existingUser.loginPassword});
            addCurrentUser(existingUser.loginUsername)
            setExistingUser(initialExistingUser);
        }
    }
    
    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Login</h1>
                <p>Keep your plants alive</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="loginUsername" name='username' onChange={handleInputChange} value={loginUsername} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="loginPassword" name='password' onChange={handleInputChange} value={loginPassword} placeholder='Password' required/>
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Login
            </button>

            <p className="text-link">Not a member yet? <Link to="/register">Register here</Link></p>
        </Form>
    )
}

export default LoginForm;