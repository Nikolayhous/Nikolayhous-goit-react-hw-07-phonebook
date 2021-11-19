import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, fetchContact, deleteContact } from './operations';
import filterContact from './actions';

const contactList = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({ contactList, filter });
