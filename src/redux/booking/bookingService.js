import axios from "axios";

const API_GET_SALONS = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/salon/book";

const sendBookingRequest = async (details) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log(accessToken)
    const response = await axios.post(API_GET_SALONS, details, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    console.log(response)
    return response.data;
}

const bookingService = {
    sendBookingRequest
}

export default bookingService;