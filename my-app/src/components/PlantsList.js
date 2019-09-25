import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import notFound from "../img/not-found.svg";
// import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

//HERE I NEED TO IMPORT AN ACTION CREATOR FROM ACTIONS FILE, DESTRUCTURE PROPS, MIGHT NEED USESTATE TO POPULATE PLANTS UPON

// const TestPlant = () =>{
// const [plantsList, setPlantsList] = useState([]);




// TestPlant();




const PlantsList = () => {
    // const { plantsList } = props;
    const plantsList = []

    const [ plant, setPlant] = useState([plantsList]);


    useEffect(()=>{
        axiosWithAuth()
    .get("plants/plants")
    .then(res =>{
        let plantsArray = res.data
        setPlant(plantsArray);
        console.log("Plants Array", plantsArray)
    })
    .catch(error => 
        console.log(error))
    }, [])

    console.log("PLANNNNNNNT!!!",plant)


///////



        
///////

    return (
        <ListContainer>
            {
                plant.length !== 0 ? (
                    <ul>
                        {   
                            plant.map(({ id, species, name, location, schedule }) => {
                                return (
                                    <li key={id}>
                                        <p>Species: <span>{species}</span></p>
                                        <p>Name: <span>{name}</span></p>
                                        <p>Location: <span>{location}</span></p>
                                        <p>Schedule: <span>{schedule > 1 ? `${schedule} times` : 'Once'} a week</span></p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <div className="empty-state">
                        <img src={notFound} alt="No plants added yet" />
                        <p> You don't have any plants yet</p>
                    </div>
                )
            }
        </ListContainer>
    )
}

export default PlantsList;


////////STYLING/////////
const ListContainer = styled.div`
    max-width: 1140px;
    margin: 6rem auto 3rem;
    padding: 0 2rem;

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 2rem;

        @media (min-width: 450px) {
            grid-template-columns: repeat(2, 1fr);
        } 

        @media (min-width: 768px) {
            grid-template-columns: repeat(3, 1fr);
        } 

        @media (min-width: 1140px) {
            grid-template-columns: repeat(4, 1fr);
        } 

        li {
            min-height: 100px;
            height: auto;
            border-radius: 5px;
            box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
            padding: 2rem;

            p {
                font-size: 1.4rem;
                margin-bottom: .5rem
                font-weight: 600;

                &:last-of-type {
                    margin-bottom: 0;
                }
            }
        }
    }

    .empty-state {
        min-height: 500px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            max-width: 150px;
        }

        p {
            margin-top: .5rem;
            font-size: 1.2rem;
        }
    }
`