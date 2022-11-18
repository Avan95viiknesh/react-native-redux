import { configureStore } from '@reduxjs/toolkit'
import changeColor from './changeColor'


export const store = configureStore({
  reducer: {
    color: changeColor,
  },
})