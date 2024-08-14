// src/redux/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({
        id: Date.now(),
        name: action.payload.name,
        email: action.payload.email,
      });
    },
    removeContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;

export default contactSlice.reducer;
