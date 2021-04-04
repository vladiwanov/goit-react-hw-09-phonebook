const getAuthed = state => state.auth.isLogIn;
const userName = state => state.auth.user.name;
const getError = state => state.auth.error;

export default {
  getAuthed,
  userName,
  getError,
};
