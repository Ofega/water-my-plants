import React, { useState } from "react";
import { Form } from './Styles';
import { axiosWithAuth } from "../../utils/axiosWithAuth"

const EditProfileForm = (props) => {

    const { currentUserID } = props;

    const initialProfileInfo = {
    
        password: '',
        phonenumber: '',
        userid: (localStorage.getItem("userid")),
        username: ''
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

    let usersidnum = parseInt(localStorage.getItem("userid"));
    console.log("USERSIDNUM", usersidnum)


 const updateProfile = (myid, profileInfo) =>{
     console.log("MY PROFILE INSIDE UPDATE PROFILE", profileInfo) //23
        axiosWithAuth()
            .put(`user/${myid}`, profileInfo)
            .then(res=>{
                console.log("UserID", currentUserID)
                console.log("THIS IS THE RES",res)
                console.log("INSIDE THE RES", profileInfo)
            })
            .catch(error =>
                console.log(error.response),
                console.log("INSIDE THE ERROR", profileInfo))
    }

    const handleFormSubmit = (e) => {
        
            e.preventDefault();
            console.log("value of newUser inside of EDIT PROFILE handleFormSubmit", profileInfo);
            updateProfile(usersidnum, profileInfo)
            console.log("inside HFS", usersidnum, profileInfo)
            // setProfileInfo(initialProfileInfo);
        
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

            <button onClick={handleFormSubmit}>
                Edit Profile
            </button>
        </Form>
    )
}

export default EditProfileForm;