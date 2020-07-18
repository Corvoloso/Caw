export const AddProfile = (userData) => {
  return {
    type: '@profiles:AddProfile',
    userData,
  };
};
