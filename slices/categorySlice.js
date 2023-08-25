import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: null,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
})

export const { setCategory } = categorySlice.actions

export const selectCategory = (state) => state.category.category