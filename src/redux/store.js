import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { cartReducer } from './cart/cartSlice';
import { salonReducer } from './salons/salonSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        salon: salonReducer
    }
})

export default store;