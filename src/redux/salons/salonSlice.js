import { createSlice } from "@reduxjs/toolkit";

const salonSlice = createSlice({
    name: 'salon',
    initialState: {
        currentSalon: {}
    },
    reducers: {
        setCurrentSalon: (state, action) => {
            state.currentSalon = action.payload
        }
    }
})

export const salonReducer = salonSlice.reducer;
export const {setCurrentSalon} = salonSlice.actions;