import { configureStore } from '@reduxjs/toolkit'
import DreamSlice from './Redux/DreamStore/DreamSlice'


export const store = configureStore({
  reducer: {
    dream: DreamSlice
  },
})