import { configureStore } from '@reduxjs/toolkit'
import { countriesSlice } from './reducer/countries'
export const store = configureStore({
  reducer: {
    countries: countriesSlice.reducer
  },
})