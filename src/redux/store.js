import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { cartReducer } from './cart/cartSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    }
})

export default store;