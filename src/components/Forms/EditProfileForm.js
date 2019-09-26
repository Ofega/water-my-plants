import React, { useState } from "react";
import { Form } from './Styles';
import { axiosWithAuth } from "../../utils/axiosWithAuth"

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

    let userid = parseInt(localStorage.getItem("userid"));

 const updateProfile = (userid) =>{
        axiosWithAuth()
            .put(`user/${userid}`, profileInfo )
            .then(res=>{
                console.log("NEWPROFILE", profileInfo)
            })
            .catch(error =>
                console.log(error))
    }

    const handleFormSubmit = (e) => {
        
        if(username && phonenumber && password) {
            e.preventDefault();
            console.log("value of newUser inside of EDIT PROFILE handleFormSubmit", profileInfo);
            updateProfile(userid)
            //this is running the function above with the userid from local storage to the endpoint (as a number) and then the function is sending in the profile info needed to update.
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