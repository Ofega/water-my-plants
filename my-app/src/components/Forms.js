import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const LoginForm = props => {

    const { existingUser, handleInputChange, handleFormSubmit } = props;
    const { loginUsername, loginPassword } = existingUser;

    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Login</h1>
                <p>Keep your plants alive</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="loginUsername" name='username' onChange={(e) => handleInputChange(e, 'login')} value={loginUsername} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="loginPassword" name='password' onChange={(e) => handleInputChange(e, 'login')} value={loginPassword} placeholder='Password' required/>
            </div>

            <button type='submit' onClick={(e) => handleFormSubmit(e, 'login')}>
                Login
            </button>

            <p className="text-link">Not a member yet? <Link to="/register">Register here</Link></p>
        </Form>
    )
}


export const RegisterForm = props => {

    const { newUser, handleInputChange, handleFormSubmit } = props;
    const { username, phonenumber, password} = newUser;

    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Register</h1>
                <p>Become a Member</p>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name='username' onChange={(e) => handleInputChange(e, 'register')} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type='phonenumber' id="phonenumber" name='phonenumber' onChange={(e) => handleInputChange(e, 'register')} value={phonenumber} placeholder='Phone Number' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name='password' onChange={(e) => handleInputChange(e, 'register')} value={password} placeholder='Password' required/>
            </div>

            <button type='submit' onClick={(e) => handleFormSubmit(e, 'register')}>
                Register
            </button>

            <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
        </Form>
    )
}


export const EditProfileForm = props => {

    const { loggedInUser, handleInputChange, handleFormSubmit } = props;
    const { username, phonenumber, password} = loggedInUser;

    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Edit Profile</h1>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name='username' onChange={(e) => handleInputChange(e, 'edit-profile')} value={username} placeholder='Username' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type='phonenumber' id="phonenumber" name='phonenumber' onChange={(e) => handleInputChange(e, 'edit-profile')} value={phonenumber} placeholder='Phone Number' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name='password' onChange={(e) => handleInputChange(e, 'edit-profile')} value={password} placeholder='Password' required/>
            </div>

            <button type='submit' onClick={(e) => handleFormSubmit(e, 'edit-profile')}>
                Edit Profile
            </button>
        </Form>
    )
}


export const AddPlantsForm = props => {

    const { showModal, newPlant, handleInputChange, handleFormSubmit } = props;
    const { species, name, location, schedule } = newPlant;

    return (
        <Form autoComplete="off">
            <button onClick={showModal} className="close-btn">x</button>

            <div className="form-header">
                <h1>Add New Plant</h1>
            </div>

            <div className="form-inputs">
                <label htmlFor="species">Specie</label>
                <input type='text' id="species" name='species' onChange={(e) => handleInputChange(e, 'add-plant')} value={species} placeholder='Species' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="plantname">Name</label>
                <input type='text' id="name" name='plantname' onChange={(e) => handleInputChange(e, 'add-plant')} value={name} placeholder='Plant Name' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="location">Location</label>
                <input type='text' id="location" name='location' onChange={(e) => handleInputChange(e, 'add-plant')} value={location} placeholder='Location' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="schedule">Schedule</label>
                <input type='number' id="schedule" name='schedule' onChange={(e) => handleInputChange(e, 'add-plant')} value={schedule} placeholder='Schedule' required/>
            </div>

            <button type='submit' onClick={(e) => handleFormSubmit(e, 'add-plant')}>
                Add Plant
            </button>
        </Form>
    )
}


const Form = styled.form`
    padding: 4rem 3rem;
    min-height: 350px;
    max-width: 500px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    z-index: 5;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    .close-btn {
        border: 2px solid red;
    }

    .form-header {
        text-align: center;
        margin-bottom: 4rem;

        h1 {
            font-size: 1.25rem;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: rgba(0,0,0,.4);
        }

        p {
            margin-top: .5rem;
            font-size: 3rem;
            font-weight: 600;
        }
    }

    .form-inputs {
        display: flex;
        flex-direction: column;
        margin-bottom: 2.5rem;
        width: 100%;

        &:last-of-type {
            margin-bottom: 3rem;
        }

        label {
            font-size: 1.3rem;
            margin-bottom: .5rem;
            font-weight: 600;
            color: rgba(0,0,0,.4);
        }

        input {
            outline: none;
            border: 1px solid #ddd;
            padding: 0 1rem;
            min-height: 40px;
            border-radius: 5px;
            font-size: 1.4rem;
            background: transparent;

            &:-webkit-autofill { 
                -webkit-box-shadow:200px 200px 100px white inset; 
                box-shadow:200px 200px 100px white inset; 
            }

            &:focus {
                border: 1px solid #419BA0;
            }
        }

        .error-msg {
            margin-top: .5rem;
            color: red;
        }
    }

    button {
        outline: 0;
        border: none;
        background: #419BA0 none;
        color: #fff;
        font-weight: 700;
        text-align: center;
        border-radius: 5px;
        box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
        user-select: none;
        transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
        -webkit-tap-highlight-color: transparent;
        padding: .5rem 2rem;
        min-height: 40px;
        min-width: 200px;
        font-size: 1.5rem; 
        margin-top: 2rem;

        &:hover {
            background-color: #63ADB1;
            background-image: none;
            -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            color: rgba(255, 255, 255, .8);
        }

        &.close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            width: 25px;
            height: 25px;
            min-width: auto;
            margin: 0;
            border-radius: 100%;
            padding: 0;
            min-height: auto;
            background: transparent;
            color: red

            &:hover {
                background: red;
                color: #fff
            }
        }
    }

    .text-link {
        margin-top: 3rem;
        font-size: 1.2rem;
        text-align: center;
        color: rgba(0,0,0,.4);  

        a {
            text-decoration: none;
            color: #419BA0;
            font-weight: 600;
        }
    }
`