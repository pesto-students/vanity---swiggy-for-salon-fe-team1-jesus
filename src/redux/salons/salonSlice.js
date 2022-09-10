import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import salonService from "./salonService";
var debounce = require('lodash.debounce');

const initialState = {
    currentSalon: {},
    salonList: [],
    message: "",
    isLoading: false,
    isError: false,
    isSuccess: false,
    isLoadingService: false,
    isErrorService: false,
    isSuccessService: false,
    messageService: "",
    item: {}
}

export const setSalons = createAsyncThunk('/salons', async (city, thunkAPI) => {
    console.log(city)
    try {
        var salons = await salonService.getSalons(city)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return salons;
})

export const setCurrentSalon = createAsyncThunk('/salon/:id', async (salonId, thunkAPI) => {
    try {
        var currSalon = salonService.getCurrentSalon(salonId)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return currSalon;
})

export const setSearchSalon = createAsyncThunk('/salon/search/:id', async (name, thunkAPI) => {
    try {
        var searchResults = salonService.getSearchSalon(name)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return searchResults;
})

export const applyFilters = createAsyncThunk('/sort', async (filters, thunkAPI) => {
    try {
        var filteredResults = salonService.sendFilters(filters)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return filteredResults;
})

export const applySort = createAsyncThunk('/salon', async (sort, thunkAPI) => {
    try {
        var sortedResults = salonService.sendSort(sort)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return sortedResults;
})

export const applyPagination = createAsyncThunk('/pagination', async (page, thunkAPI) => {
    try {
        var pagedResults = salonService.sendPage(page)
    }
    catch(err) {
        const message = (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(message);
    }
    return pagedResults
})

const debounced = debounce((name, dispatch) => {
    dispatch(setSearchSalon(name), 4000)
});

export const debouncedSearchSalons = (name) => (dispatch) => debounced(name, dispatch)

const salonSlice = createSlice({
    name: 'salon',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isLoading = false
            state.isSuccess = false
            state.message = ""
            state.salonList = []
            state.currentSalon = {}
            state.isErrorService = false
            state.isSuccessService = false
            state.isLoadingService = false
        },
        setItem: (state, action) => {
            state.item = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(setSalons.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(setSalons.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.salonList = action.payload
        })
        .addCase(setSalons.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(setCurrentSalon.pending, (state) => {
            state.isLoadingService = true
        })
        .addCase(setCurrentSalon.fulfilled, (state, action) => {
            state.isLoadingService = false
            state.isSuccessService = true
            state.currentSalon = action.payload
        })
        .addCase(setCurrentSalon.rejected, (state, action) => {
            state.isErrorService = true
            state.isLoadingService = false
            state.messageService = action.payload
        })
        .addCase(setSearchSalon.pending, (state) => {
            state.isLoading = true
        })
        .addCase(setSearchSalon.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.salonList = action.payload
        })
        .addCase(setSearchSalon.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(applyFilters.pending, (state) => {
            state.isLoading = true
        })
        .addCase(applyFilters.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.salonList = action.payload
        })
        .addCase(applyFilters.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(applySort.pending, (state) => {
            state.isLoading = true
        })
        .addCase(applySort.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.salonList = action.payload
        })
        .addCase(applySort.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(applyPagination.pending, (state) => {
            state.isLoading = true
        })
        .addCase(applyPagination.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.salonList = action.payload
        })
        .addCase(applyPagination.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
    }
})

export const salonReducer = salonSlice.reducer;
export const {getCurrentSalon, getSalons, setItem} = salonSlice.actions;