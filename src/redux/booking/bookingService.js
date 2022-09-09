import axios from "axios";

const API_GET_SALONS = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/salon/book";

const sendBookingRequest = async (details) => {
    const response = await axios.post(API_GET_SALONS, details)
    return response.data;
}

const bookingService = {
    sendBookingRequest
}

export default bookingService;