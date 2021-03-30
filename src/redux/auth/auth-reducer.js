import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as authActions from './auth-actions';

const {
  addAuthSuccess,
  addAuthError,

  loginSuccess,
  loginError,

  logoutSuccess,
  logoutError,

  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [addAuthSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload.user,
  [logoutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [addAuthSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [addAuthError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
});

const isLogIn = createReducer(false, {
  [addAuthSuccess]: () => true,
  [loginSuccess]: () => true,
  [logoutSuccess]: () => false,
  [getCurrentUserSuccess]: () => true,
  [addAuthError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogIn,
  error,
});
