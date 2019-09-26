import React, { useState } from "react";
import { Form } from './Styles';
import { axiosWithAuth } from "../../utils/axiosWithAuth"

const EditProfileForm = (props) => {

    const { currentUserID } = props;

    const initialProfileInfo = {
        userid: currentUserID,
        username: '',
        password: '',
        phonenumber: ''

    }
    
    console.log(currentUserID)
    console.log(typeof(currentUserID))

    const [ profileInfo, setProfileInfo] = useState(initialProfileInfo);

    const { username, phonenumber, password } = profileInfo;

    // Handler Functions
    const handleInputChange = (e) => {
        setProfileInfo({
            ...profileInfo,
            [e.target.id]: e.target.value
        })
    }

    // let userid = parseInt(localStorage.getItem("userid"));

 const updateProfile = (currentUserID) =>{
     console.log(currentUserID) //23
        axiosWithAuth()
            .put(`https://nchampag-watermyplants.herokuapp.com/user/23`, profileInfo )
            .then(res=>{
                console.log("NEWPROFILE", profileInfo)
                console.log("UserID", currentUserID)
                console.log(res)
            })
            .catch(error =>
                console.log(error))
    }

    const handleFormSubmit = (e) => {
        
            e.preventDefault();
            console.log("value of newUser inside of EDIT PROFILE handleFormSubmit", profileInfo);
            updateProfile(currentUserID)
            console.log("inside HFS",currentUserID)
            //this is running the function above with the userid from local storage to the endpoint (as a number) and then the function is sending in the profile info needed to update.
            setProfileInfo(initialProfileInfo);
        
    }

   

    return (
        <Form autoComplete="off">
            <div className="form-header">
                <h1>Edit Profile</h1>
            </div>

            <div className="form-inputs">
                <label htmlFor="username">Username</label>
                <input type='text' id="username" name='username' onChange={handleInputChange} value={username} placeholder='Username' />
            </div>

            <div className="form-inputs">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type='phonenumber' id="phonenumber" name='phonenumber' onChange={handleInputChange} value={phonenumber} placeholder='Phone Number' />
            </div>

            <div className="form-inputs">
                <label htmlFor="password">Password</label>
                <input type='password' id="password" name='password' onChange={handleInputChange} value={password} placeholder='Password' />
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Edit Profile
            </button>
        </Form>
    )
}

export default EditProfileForm;