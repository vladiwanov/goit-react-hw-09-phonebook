import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as contactsActions from './contacts-actions';

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  delContactRequest,
  delContactSuccess,
  delContactError,
} = contactsActions;

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());
  try {
    const { data } = await axios.get('/contacts');
    dispatch(fetchContactSuccess(data));
  } catch (error) {
    fetchContactError(error);
  }
};

const fethContactAsync = createAsyncThunk('contacts/fetchContact', async () => {
  const { data } = await axios.get('./contacts');
  return data;
});

const addContact = item => dispatch => {
  dispatch(addContactRequest());

  axios
    .post('/contacts', item)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(delContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(delContactSuccess(id)))
    .catch(error => dispatch(delContactError(error)));
};

export default {
  fetchContacts,
  addContact,
  deleteContact,
  fethContactAsync,
};
