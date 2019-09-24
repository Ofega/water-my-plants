import { ADD_PLANT, ADD_PLANT_SUCCESS, ADD_PLANT_FAILURE, GET_PLANTS, GET_PLANTS_SUCCESS, GET_PLANTS_FAILURE, USER_LOGIN, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_SIGNUP, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAILURE, ADD_PLANT, ADD_PLANT_FAILURE, ADD_PLANT_SUCCESS, EDIT_PLANT, EDIT_PLANT_SUCCESS, EDIT_PLANT_FAILURE } from "../actions";

export const initiaPlantlState ={
    "species": "",
    "name": "",
    "location": "",
    "schedule": 0,
    "user":{
        "user": 0
    },
    requested: false
}

export const initialUserState ={
    "username": "",
    "password": "",
    "phonenumber": "",
}

export const plantReducer = (state = initialPlantState, action) => {
    switch(action.type) {
        case GET_PLANTS:
            console.log("LOADING YOUR PLANTS")
            return{
                ...state,
                requested: true
            }
            case GET_PLANTS_SUCCESS:
                console.log("PLANTS LOADED")
                    return{
                        ...state,
                        requested: false
                    }
                case GET_PLANTS_FAILURE:
                    console.log("LOADING PLANTS FAILED")
                        return{
                            ...state,
                            requested: false
                        };
        case ADD_PLANT:
            console.log("ADDING YOUR PLANT")
            return{
                ...state,
                requested: true
            }
            case ADD_PLANT_SUCCESS:
                console.log("SUCCESSFULLY ADDED PLANT")
                return{
                    ...state,
                    requested: false
                }
                case ADD_PLANT_FAILURE:
                    console.log("ADDING PLANT FAILED")
                    return{
                        ...state,
                        requested: false
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
                        requested: false
                    }
                    case EDIT_PLANT_FAILURE:
                        console.log("PLANT EDIT FAILED")
                        return{
                            ...state,
                            requested: false
                        }

        default: return state;
    }
};


export const userInfo = (state = initialUserState, action) =>{
    switch(action.type) {

case USER_SIGNUP:
    console.log("SIGNING YOU UP!")
        return{
            ...state,
            requested: true
        };
        case USER_SIGNUP_SUCCESS:
            console.log("SIGN UP SUCCESSFUL")
            return{
                ...state,
                requested: false
             };
            case USER_SIGNUP_FAILURE:
                    console.log("SIGN UP FAILED")

                return{
                ...state,
                requested: false
                };
    case USER_LOGIN:
        console.log("LOGGING YOU IN")
        return{
            ...state,
            requested: true
        };
        case USER_LOGIN_SUCCESS:
                console.log("LOG IN SUCCESSFUL")
            return{
                ...state,
                requested: false
            };
            case USER_LOGIN_FAILURE:
                console.log("LOG IN FAILED")

                return{
                    ...state,
                    requested: false
                };
                default: return state;


}
}

