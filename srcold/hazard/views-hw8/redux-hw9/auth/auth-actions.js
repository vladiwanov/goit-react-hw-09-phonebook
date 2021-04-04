import { createAction } from '@reduxjs/toolkit';

export const addAuthRequest = createAction('auth/addAuthRequest');
export const addAuthSuccess = createAction('auth/addAuthSuccess');
export const addAuthError = createAction('auth/addAuthError');

export const loginRequest = createAction('auth/loginReguest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logoutRequest = createAction('auth/logoutReguest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');

export const getCurrentUserRequest = createAction('auth/getCurrentUserReguest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
