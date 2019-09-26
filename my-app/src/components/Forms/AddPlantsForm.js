import React, { useState } from "react";
import { Form } from './Styles';
import { axiosWithAuth } from "../../utils/axiosWithAuth"

const AddPlantsForm = props => {

    const { showModal } = props;
    
    const initialPlant = {
        "species": '',
        "name": '',
        "location": '',
        "schedule": 0,
        "user": {
            "userid": parseInt(localStorage.getItem("userid"))}
    }

    const [ newPlant, setNewPlant] = useState(initialPlant);

    const { species, name, location, schedule } = newPlant;

    // Handler Functions
    const handleInputChange = (e) => {
        setNewPlant({
            ...newPlant,
            [e.target.id]: e.target.value
        })
    }

    // useEffect(()=>{
    //     const username = localStorage.getItem("username");
    //     return axios
    //     .get(`https://nchampag-watermyplants.herokuapp.com/getuser/${username}`)
    //     .then(res=>{
    //         console.log("response from useEffect", res)
    //         localStorage.setItem("userid", res.data.userid)
    //         //returns the whole user obj
    //         //save userid and all of the plants to state
    //         //take the userid and send with new plant we are creating
    //         // const userid = user.userid
    //         // localStorage.setItem("userid", userid)
    //     })

    // }, [])


    const handleFormSubmit = (e) => {
        
        if(species && name && location && schedule) {
            e.preventDefault();
            
            // console.log("value of newPlant inside of handleFormSubmit", newPlant);
            // testFunc(newUser); //testing to see if this is making it back to actions
            // ON SUBMIT, DO WHAT YOU WANT WITH THE NEW USER OBJECT HERE :)


            let plantTest = ({...newPlant, schedule: parseInt(newPlant.schedule)})
            setNewPlant(plantTest);
            showModal();
            // console.log("plantTest", plantTest, "newPlant", newPlant)
            addPlant(plantTest)
            
        }
    }

    const addPlant = (plantTest) => { //new plant should come from the newPlant form and the variable it's assigned to.
    // console.log("testtoken", localStorage.getItem("token"))
    // console.log(plantTest)
    return axiosWithAuth()
    .post("plants/plant", plantTest)
    .then(res => {
        console.log("res inside addPlant", res)
    })
    .catch(error => console.log("error inside addPlant actions", error),
    )
    }


    return (
        <Form autoComplete="off">
            <button onClick={showModal} className="close-btn">x</button>

            <div className="form-header">
                <h1>Add New Plant</h1>
            </div>

            <div className="form-inputs">
                <label htmlFor="species">Specie</label>
                <input type='text' id="species" name='species' onChange={handleInputChange} value={species} placeholder='Species' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="plantname">Name</label>
                <input type='text' id="name" name='plantname' onChange={handleInputChange} value={name} placeholder='Plant Name' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="location">Location</label>
                <input type='text' id="location" name='location' onChange={handleInputChange} value={location} placeholder='Location' required/>
            </div>

            <div className="form-inputs">
                <label htmlFor="schedule">Schedule</label>
                <input type='number' id="schedule" name='schedule' onChange={handleInputChange} value={schedule} placeholder='Schedule' required/>
            </div>

            <button type='submit' onClick={handleFormSubmit}>
                Add Plant
            </button>
        </Form>
    )
}

export default AddPlantsForm;