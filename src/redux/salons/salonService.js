import axios from "axios";

const API_GET_SALONS = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/salon";

const getSalons = async (city) => {
    const response = await axios.get(`${API_GET_SALONS}?city=${city}`)
    return response.data;
}

const getCurrentSalon = async (salonId) => {
    const response = await axios.get(`${API_GET_SALONS}/service?salonId=${salonId}`)
    return response.data;
}

const getSearchSalon = async (name) => {
    const response = await axios.get(`${API_GET_SALONS}/data?name=${name}`)
    return response.data;
}

const salonService = {
    getSalons, getCurrentSalon, getSearchSalon
}

export default salonService;