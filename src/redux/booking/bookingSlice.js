import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import bookingService from "./bookingService";

const initialState = {
    latestBooking: {},
    allBookings: {},
    isLoading: "false",
    isError: "false",
    isSuccess: "false",
    message: ""
}

export const sendBooking = createAsyncThunk('/bookings', async (details, thunkAPI) => {
    try {
        var res = await bookingService.sendBookingRequest(details)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return res;
})

export const getBookings = createAsyncThunk('/getBookings', async (userId, thunkAPI) => {
    try {
        var result = await bookingService.getBookingsRequest(userId)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return result;
})

export const deleteBooking = createAsyncThunk('/deletebooking', async (bookingId, thunkAPI) => {
    try {
        var del = await bookingService.sendDeleteBooking(bookingId)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return del
})

const bookingSlice = createSlice({
    name: 'booking',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.latestBooking = {}
            state.allBookings = {}
            state.message = "" 
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(sendBooking.pending, (state) => {
            state.isLoading = true
        })
        .addCase(sendBooking.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.latestBooking = action.payload
        })
        .addCase(sendBooking.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(getBookings.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getBookings.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allBookings = action.payload.data
        })
        .addCase(getBookings.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteBooking.pending, (state) => {
            state.isLoading = true
        })
        .addCase(deleteBooking.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.allBookings = action.payload.data
        })
        .addCase(deleteBooking.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const bookingReducer = bookingSlice.reducer;
