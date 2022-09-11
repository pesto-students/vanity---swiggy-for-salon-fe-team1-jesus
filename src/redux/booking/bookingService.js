import axios from "axios";

const API_GET_SALONS = "https://vanity-swiggy-for-salons-be.herokuapp.com/api/v1/salon/book";

const sendBookingRequest = async (details) => {
    const accessToken = localStorage.getItem('accessToken')
    const response = await axios.post(API_GET_SALONS, details, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return response.data;
}

const getBookingsRequest = async (userId) => {
    const response = await axios.get(`${API_GET_SALONS}?userId=${userId}`)
    return response.data
}

const sendDeleteBooking = async (bookingId) => {
    const accessToken = localStorage.getItem('accessToken')
    const response = await axios.delete(`${API_GET_SALONS}?bookingId=${bookingId}`, {
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    return response.data
}

const bookingService = {
    sendBookingRequest, getBookingsRequest, sendDeleteBooking
}

export default bookingService;