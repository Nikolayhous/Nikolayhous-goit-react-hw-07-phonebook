import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWidthValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);

export const fetchContact = createAsyncThunk(
  'contacts/fetchContact',
  async (_, { rejectWidthValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWidthValue }) => {
    try {
      const { id } = await axios.delete(`/contacts ${contactId}`);
      return id;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);