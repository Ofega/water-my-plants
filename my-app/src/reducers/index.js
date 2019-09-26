import { GET_PLANTS, GET_PLANTS_SUCCESS, GET_PLANTS_FAILURE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_SIGNUP, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE, ADD_PLANT, ADD_PLANT_FAILURE, ADD_PLANT_SUCCESS, EDIT_PLANT, EDIT_PLANT_SUCCESS, EDIT_PLANT_FAILURE } from "../actions";

export const initialState ={
requested: false,
error: false,
plants: [{
    "species": "",
    "name": "",
    "location": "kitchen",
    "schedule": 0,
    "user":{
        "user": 0
    },
}],
user: {
    "username": "",
    "password": "",
    "phonenumber": ""
}
}


export const plantReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PLANTS:
            console.log("LOADING YOUR PLANTS")
            return{
                ...state,
                requested: true,
                error: false,
            }
            case GET_PLANTS_SUCCESS:
                console.log("PLANTS LOADED")
                    return{
                        ...state,
                        plants: action.payload,
                        requested: false,
                        error: false
                    }
                case GET_PLANTS_FAILURE:
                    console.log("LOADING PLANTS FAILED")
                        return{
                            ...state,
                            requested: false,
                            error: "LOADING PLANTS FAILED"
                        };
        case ADD_PLANT:
            console.log("ADDING YOUR PLANT")
            return{
                ...state,
                requested: true,
                error: false,
            }
            case ADD_PLANT_SUCCESS:
                console.log("SUCCESSFULLY ADDED PLANT")
                return{
                    ...state,
                    plants: [...state.plants, action.payload],
                    requested: false,
                    error: false
                }
                case ADD_PLANT_FAILURE:
                    console.log("ADDING PLANT FAILED")
                    return{
                        ...state,
                        requested: false,
                        error: "ADDING PLANT FAILED"
                    }
        case EDIT_PLANT:
            console.log("EDITING YOUR PLANT")
                return{
                    ...state,
                    requested: true
                }
                case EDIT_PLANT_SUCCESS:
                    console.log("PLANT EDIT SUCCESSFUL")
                    return{
                        ...state,
                        plants: state.plants.map(plant =>{
                            if(plant.plantsid === action.payload.plantsid){
                                return action.payload
                            }else{
                                return plant;
                            }
                        }),
                        requested: false
                    }
                    case EDIT_PLANT_FAILURE:
                        console.log("PLANT EDIT FAILED")
                        return{
                            ...state,
                            requested: false,
                            error: "EDIT PLANT FAILED"

                        }
            case USER_SIGNUP:
                console.log("SIGNING YOU UP!")
                    return{
                        ...state,
                        requested: true,
                        error: false
                    };
                    case USER_SIGNUP_SUCCESS:
                        console.log("SIGN UP SUCCESSFUL")
                        return{
                            ...state,
                            user: action.payload,
                            requested: false
                        };
                        case USER_SIGNUP_FAILURE:
                                console.log("SIGN UP FAILED")
                            return{
                            ...state,
                            requested: false,
                            error: "FAILED TO REGISTER"
                            };
                            case USER_LOGIN:
                                console.log("LOGGING YOU IN")
                                return{
                                    ...state,
                                    requested: true,
                                    error: false
                                };
                                case USER_LOGIN_SUCCESS:
                                        console.log("LOG IN SUCCESSFUL")
                                    return{
                                        ...state,
                                        user: action.payload,
                                        requested: false,
                                        error: false
                                    };
                                    case USER_LOGIN_FAILURE:
                                        console.log("LOG IN FAILED")
                                        return{
                                            ...state,
                                            requested: false,
                                            error: "LOG IN FAILED"
                                        };
                                default: return state;
                            }
                        };