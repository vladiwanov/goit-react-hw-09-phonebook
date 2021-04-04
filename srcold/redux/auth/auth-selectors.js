const getAuthed = state => state.auth.isLogIn;
const userName = state => state.auth.user.name;

export default {
  getAuthed,
  userName,
};
