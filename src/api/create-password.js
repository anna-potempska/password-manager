export const createPassword = (password) => {
  return fetch("http://localhost:3001/password", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(password),
  });
};
