export const getPasswords = () => {
  return fetch("http://localhost:3001/password").then((res) => {
    return res.json();
  });
};
