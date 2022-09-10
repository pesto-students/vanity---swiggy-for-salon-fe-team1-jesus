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

const sendFilters = async (filters) => {
    const response = await axios.get(`${API_GET_SALONS}?${filters}`)
    console.log(response, "filters")
    return response.data
}

const sendSort = async (sort) => {
    const response = await axios.get(`${API_GET_SALONS}?budgetSort=${sort}`)
    return response.data;
}

const sendPage = async (page) => {
    const response = await axios.get(`${API_GET_SALONS}?page=${page}&size=10`)
    return response.data
}

const salonService = {
    getSalons, getCurrentSalon, getSearchSalon, sendFilters, sendSort, sendPage
}


export default salonService;