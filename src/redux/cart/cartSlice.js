import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: [],
      currSalonId: "",
      serviceIds: [],
      totalCost: 0,
      currSalon: {}
    },
    reducers: {
      addToCart: (state, action) => {
        if(state.cart.length < 1) {
          state.cart.push({ ...action.payload, quantity: 1 });
          state.serviceIds.push(action.payload.id);
          state.totalCost = state.totalCost + action.payload.price
          state.currSalon = action.payload.salonInCart
          state.currSalonId = action.payload.salonInCart.salonId
        }
        else {
          if(action.payload.salonId === state.currSalonId) {
            state.serviceIds.push(action.payload.id);
            state.totalCost = state.totalCost + action.payload.price
            state.cart.push({ ...action.payload, quantity: 1 });
          }
          else {
            alert("You have services from another salon in your cart. Please clear your cart before proceeding.")
          }
        }
      },
      removeItem: (state, action) => {
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
      },
      reset: (state) => {
        state.cart = [];
        state.currSalonId = ""
      }
    },
  });
  export const cartReducer = cartSlice.reducer;
  export const {
    addToCart,
    removeItem, reset
  } = cartSlice.actions;