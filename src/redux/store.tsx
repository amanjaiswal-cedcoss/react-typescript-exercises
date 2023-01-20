import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice'

export const store = configureStore({
  reducer: {
    articlesReducer,
  },
});