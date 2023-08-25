import { configureStore } from '@reduxjs/toolkit'

import { cartSlice } from './slices/cartSlice'
import { restaurantSlice } from './slices/restaurantSlice'
import { categorySlice } from './slices/categorySlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    restaurant: restaurantSlice.reducer,
    category: categorySlice.reducer,
  },
})