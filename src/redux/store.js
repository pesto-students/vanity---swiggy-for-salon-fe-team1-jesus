import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { bookingReducer } from './booking/bookingSlice';
import { cartReducer } from './cart/cartSlice';
import { salonReducer } from './salons/salonSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        salon: salonReducer,
        booking: bookingReducer
    }
})

export default store;