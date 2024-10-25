export const deletePassword = (id) => {
  return fetch(`http://localhost:3001/password/${id}`, {
    method: "DELETE",
  });
};
