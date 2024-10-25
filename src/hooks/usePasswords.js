import { useEffect, useState } from "react";
import { createPassword } from "../api/create-password";
import { getPasswords } from "../api/get-passwords";
import { editPassword } from "../api/edit-password";
import { deletePassword } from "../api/delete-password";

export const usePassword = () => {
  const [search, setSearch] = useState("");
  const [passwords, setPasswords] = useState([]);
  const [filteredPasswords, setFilteredPasswords] = useState([]);
  const [selectedPassword, setSelectedPassword] = useState(undefined);

  useEffect(() => {
    fetchPasswords();
  }, []);

  useEffect(() => {
    if (search.length === 0) {
      setFilteredPasswords(passwords);
    } else {
      setFilteredPasswords(
        passwords.filter((password) =>
          password.service.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, passwords]);

  const fetchPasswords = () => {
    getPasswords().then((data) => {
      setPasswords(data);
    });
  };

  const onCreatePassword = (password) => {
    createPassword(password).then(() => {
      setPasswords([...passwords, password]);
    });
  };

  const onDeletePassword = async (id) => {
    await deletePassword(id);
    setPasswords((prevList) =>
      prevList.filter((password) => password.id !== id)
    );
  };

  const onSelectPassword = (id) => {
    setSelectedPassword(passwords.find((password) => password.id === id));
  };

  const onUpdatePassword = async (id, updatedPassword) => {
    if (selectedPassword) {
      await editPassword(id, updatedPassword);
      setSelectedPassword(undefined);
      fetchPasswords();
    }
  };

  const onSearch = (term) => {
    setSearch(term);
  };

  return {
    passwords,
    filteredPasswords,
    onSearch,
    search,
    selectedPassword,
    onSelectPassword,
    onCreatePassword,
    onDeletePassword,
    onUpdatePassword,
  };
};
