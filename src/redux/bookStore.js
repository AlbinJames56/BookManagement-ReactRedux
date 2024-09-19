import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slice/bookSlice';

const bookStore = configureStore({
  reducer: {
    books: bookReducer,
  },
});

export default bookStore;