import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      cart: [],
    },
    reducers: {
      addToCart: (state, action) => {
        console.log("state action", state, action,)
        const itemInCart = state.cart.find((item) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.cart.push({ ...action.payload, quantity: 1 });
        }
      },
      removeItem: (state, action) => {
        const removeItem = state.cart.filter((item) => item.id !== action.payload);
        state.cart = removeItem;
      },
    },
  });
  export const cartReducer = cartSlice.reducer;
  export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
  } = cartSlice.actions;
