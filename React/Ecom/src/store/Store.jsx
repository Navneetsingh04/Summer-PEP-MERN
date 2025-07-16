import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from '../slices/CounterSlice'
import CounterReducer2 from '../slices/CounterSlice2'
import userDataReducer from '../slices/UserDataSlice'
export const store = configureStore({
  reducer: {
    counter :  CounterReducer,
    counter2 : CounterReducer2,
    usetData : userDataReducer,
  },
})