export const getUserEmail = () => {
  return localStorage.getItem("userEmail");
};

export const logoutUser = () => {
  localStorage.removeItem("userEmail");
};
