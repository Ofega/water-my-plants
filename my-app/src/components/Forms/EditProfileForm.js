import React, { useState } from "react";
import { Form } from './Styles';


const EditProfileForm = () => {

    const initialProfileInfo = {
        username: '',
        phonenumber: '',
        password: ''
    }

    const [ profileInfo, setProfileInfo] = useState(initialProfileInfo);

    const { username, phonenumber, password } = profileInfo;

    // Handler Functions
    const handleInputChange = (e) => {
        setProfileInfo({
            ...profileInfo,
            [e.target.id]: e.target.value
        })
    }

    const handleFormSubmit = (e) => {
        
        if(username && phonenumber && password) {
            e.preventDefault();
            console.log("value of newUser inside of handleFormSubmit", profileInfo);
            // testFunc(newUser); //testing to see if this is making it back to actions
            // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)
            setProfileInfo(initialProfileInfo);
        }
    }

    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Edit Profile</h1>
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
                Edit Profile
            </button>
        </Form>
    )
}

export default EditProfileForm;