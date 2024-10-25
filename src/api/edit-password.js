export const editPassword = (id, updatedPassword) => {
  return fetch(`http://localhost:3001/password/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedPassword),
  });
};
