import axios from "axios";

const API_URL_REGISTER = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/user/signup"
const API_URL_LOGIN = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/user/login"

const register = async (userData, config) => {
    const response = await axios.post(API_URL_REGISTER, userData, config)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response.data.data;
}

const login = async (userData) => {
    const response = await axios.post(API_URL_LOGIN, userData)
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.data))
    }
    return response.data.data;
}

const logout = () => {
    localStorage.removeItem('user');
}

const authService = {
    register,
    login,
    logout
}

export default authService;