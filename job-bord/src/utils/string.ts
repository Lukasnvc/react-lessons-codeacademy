export const getFullName = (firstName: string, lastName: string) => {
  return `${firstName} ${lastName}`;
};

export const hidePassword = (password: string) => {
  return "*".repeat(password.length);
};
