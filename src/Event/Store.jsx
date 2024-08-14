// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../Event/Slice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;

