// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { Onboarding } from './Styles';
// import { getPlant, addPlant, userSignUp, userLogIn} from "../../actions";


// const UserForm = (props) => {

//   // const { newUser, handleChanges, handleClick } = props;
//   // const { username, phone, password} = newUser;

//   const [newUser, setNewUser] = useState({})

//   const handleChanges = e =>{
//     setNewUser({...newUser, [e.target.name]: e.target.value})
//   }

//   const handleClick = e =>{
//     e.preventDefault();
//     userSignUp(newUser);
//     console.log("I'm inside of the handle click", newUser)
//   }

//   console.log("value of new person", newUser)

//   return (
//     <Onboarding>
//       <div className="hero-background"></div>

//       <form autoComplete="off">
//         <div className="form-header">
//           <h1>Register</h1>
//           <p>Become a Member</p>
//         </div>

//         <div className="form-inputs">
//           <label htmlFor="username">Username</label>
//           <input type='text' id="username" name='username' onChange={handleChanges} value={newUser.username} placeholder='Username' required/>
//         </div>

//         <div className="form-inputs">
//           <label htmlFor="phone">Phone Number</label>
//           <input type='phone' id="phone" name='phone' onChange={handleChanges} value={newUser.phonenumber} placeholder='Phone Number' required/>
//         </div>

//         <div className="form-inputs">
//           <label htmlFor="password">Password</label>
//           <input type='password' id="password" name='password' onChange={handleChanges} value={newUser.password} placeholder='Password' required/>
//         </div>

//        <Link to="/login"> <button type='submit' onClick={handleClick}>
//           Register
//         </button>
//         </Link>
//         <p className="text-link">Already a member, <Link to="/login">Login here</Link></p>
//       </form>
//     </Onboarding>
//   );
// };

// export default UserForm;