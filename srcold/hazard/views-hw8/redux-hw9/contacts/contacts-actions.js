import { createAction } from '@reduxjs/toolkit';

export const fetchContactRequest = createAction('contacts/fetchContactRequest');
export const fetchContactSuccess = createAction('contacts/fetchContactSuccess');
export const fetchContactError = createAction('contacts/fetchContactError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const delContactRequest = createAction('contacts/delContactRequest');
export const delContactSuccess = createAction('contacts/delContactSuccess');
export const delContactError = createAction('contacts/delContactError');

export const changeFilter = createAction('changeFilter');
