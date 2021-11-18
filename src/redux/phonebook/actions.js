import { createAction } from '@reduxjs/toolkit';

// export const addContactRequest = createAction('contacts/addContactRequest');
// export const addContactSuccess = createAction('contacts/addContactSuccess');
// export const addContactError = createAction('contacts/addContactError');

// // const addContact = createAction('contact/add');
// const deleteContact = createAction('contact/delete');
const filterContact = createAction('contact/filter');

export default filterContact;
