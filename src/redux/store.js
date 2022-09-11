import { configureStore, combineReducers} from '@reduxjs/toolkit'
import authReducer from "./auth/authSlice"
import { bookingReducer } from './booking/bookingSlice';
import { cartReducer } from './cart/cartSlice';
import { salonReducer } from './salons/salonSlice';
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist"

const persistConfig = {
    key: "root",
    storage
}

const reducer = combineReducers({
    auth: authReducer,
        cart: cartReducer,
        salon: salonReducer,
        booking: bookingReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export default store;