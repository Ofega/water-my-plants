import React from 'react';
import styled from "styled-components";


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
                        <button>
                            +
                        </button>
                        <p>Add new plant</p>
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
        min-height: 600px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        button {
            color: #fff;
            font-size: 4rem;
            font-weight: 600;
            outline: 0;
            border: none;
            background: #419BA0 none;
            text-align: center;
            border-radius: 5px;
            box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
            user-select: none;
            transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease,-webkit-box-shadow .1s ease;
            -webkit-tap-highlight-color: transparent;
            padding: .5rem 2rem;

            &:hover {
                background-color: #63ADB1;
                background-image: none;
                -webkit-box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                color: rgba(255, 255, 255, .8);
            }
        }

        p {
            font-weight: 600;
            font-size: 2rem;
            margin-top: 2rem;
        }
    }
`