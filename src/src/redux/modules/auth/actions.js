export const CheckAuthenticated = (userData) => {
  return {
    type: '@Auth/SignUp',
    userData,
  };
};
