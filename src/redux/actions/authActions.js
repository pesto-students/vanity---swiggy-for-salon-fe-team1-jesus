import { LOGIN_SUCCESS, LOGOUT_REQ } from "../actionTypes/authActionTypes"

export const fetchLoginSuccess = (token, email) => {
    //console.log("actions", token)
  return {
    type: LOGIN_SUCCESS,
    payload: {token, email}
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQ,
    payload: false
  }
}