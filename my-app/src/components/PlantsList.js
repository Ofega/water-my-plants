import React from 'react';
import styled from "styled-components";
import notFound from "../img/not-found.svg";


const PlantsList = props => {
    const { plantsList } = props;

    return (
        <ListContainer>
            {
                plantsList.length !== 0 ? (
                    <ul>
                        {   
                            plantsList.map(({ id, species, name, location, schedule }) => {
                                return (
                                    <li key={id}>
                                        <p>Species: <span>{species}</span></p>
                                        <p>Name: <span>{name}</span></p>
                                        <p>Location: <span>{location}</span></p>
                                        <p>Schedule: <span>{schedule}</span></p>
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

const ListContainer = styled.div`
    max-width: 1140px;
    margin: 4rem auto 0;

    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        flex-wrap: wrap;

        li {
            width: calc(25% - 15px);
            min-height: 100px;
            height: auto;
            border-radius: 5px;
            box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
            padding: 2rem;
            margin-bottom: 2rem;

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