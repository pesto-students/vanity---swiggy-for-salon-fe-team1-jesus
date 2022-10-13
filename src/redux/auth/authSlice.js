import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import authService from "./authService";

//Get user from local storage
const user = localStorage.getItem('user');

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
    name: "",
    isAuth: false
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        await authService.register(user)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
})

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        var user1 = await authService.login(user)
    } catch (err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return user1;
})

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout();
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
            state.name = ""
            state.isAuth = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(register.pending, (state) => {
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.meta.arg
            state.isAuth = true
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
            state.isAuth = false
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload;
            state.name = action.payload.name
            state.isAuth = true
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
            state.isAuth = false
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
            state.isAuth = false
        })
    },

})
export const {reset} = authSlice.actions;
export default authSlice.reducer