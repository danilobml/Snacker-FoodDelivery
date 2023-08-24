import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromCart: (state, action) => {
        let newItems = [...state.items]
        let itemIndex = newItems.findIndex(item => item.id === action.payload.id)
        if (itemIndex >= 0) {
            newItems.splice(itemIndex, 1)
            state.items = newItems
        } else {
            console.warn("Can't remove product, as it's not in the cart!")
        }
    },
    emptyCart: (state, action) => {
      state.items = []
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsById = (state, id) => state.cart.items.filter(item => item.id === id);

export const selectCartTotal = (state) => state.cart.items.reduce((total, item) => total + Number(item.price), 0);

export default cartSlice.reducer;
