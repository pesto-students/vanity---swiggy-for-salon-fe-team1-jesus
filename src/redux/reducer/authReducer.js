import {LOGIN_SUCCESS, LOGOUT_REQ} from "../actionTypes/authActionTypes"

const initState = {
    token: "",
    loading: false,
    error: null,
    isAuth: false,
    email: ""
  };
  
  export const authReducer = (state = initState, { type, payload }) => {
    //console.log("reducer", state, type, payload)
    switch (type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          token: payload.token,
          isAuth: true,
          email: payload.email
        };

      case LOGOUT_REQ:
        return {
            ...state,
            isAuth: false,
            token: "",
            email: ""
        };
        
      default:
        return state;
    }
  };