const INITIAL_STATE = {
  authenticated: false,
  userLogged: {},
};

export default function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@Auth/SignUp':
      state.userLogged = action.userData;
      state.authenticated = true;

      return state;
    default:
      return state;
  }
}
