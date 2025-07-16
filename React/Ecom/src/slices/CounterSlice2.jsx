import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}
export const CounterSlice2 = createSlice({
  name: 'counter2',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 5
    },
    decrement: (state) => {
      state.value -= 5
    },
    reset : (state) =>{
        state.value = 0;
    }
  },
})
export const { increment, decrement,reset } = CounterSlice2.actions

export default CounterSlice2.reducer