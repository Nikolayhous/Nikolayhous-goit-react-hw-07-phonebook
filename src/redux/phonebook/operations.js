import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';
const BASE_URl = 'https://619402530b39a70017b156c1.mockapi.io/api/v1';

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWidthValue }) => {
    try {
      const { data } = await axios.post(`${BASE_URl}/contacts`, contact);
      return data;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);

export const fetchContact = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWidthValue }) => {
    try {
      const { data } = await axios.get(`${BASE_URl}/contacts`);
      return data;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWidthValue }) => {
    try {
      const {
        data: { id },
      } = await axios.delete(`${BASE_URl}/contacts/${contactId}`);
      return id;
    } catch (error) {
      rejectWidthValue(error.message);
    }
  },
);
