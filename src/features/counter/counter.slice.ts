import { createSlice } from '@reduxjs/toolkit'

const couterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
  },
})

export const counterReducer = couterSlice.reducer
export const counterActions = couterSlice.actions
