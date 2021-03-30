import axios from 'axios';
import * as authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
const {
  addAuthRequest,
  addAuthSuccess,
  addAuthError,

  loginRequest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} = authActions;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addRegister = credentials => dispatch => {
  dispatch(addAuthRequest());
  axios
    .post('/users/signup', credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(addAuthSuccess(data));
    })
    .catch(error => dispatch(addAuthError(error.message)));
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('/users/login', credentials);
    token.set(response.data.token);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export default {
  addRegister,
  logIn,
  logOut,
  getCurrentUser,
};
