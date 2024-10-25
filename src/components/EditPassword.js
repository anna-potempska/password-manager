import { TextField, Button, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function EditPassword(props) {
  const [editedService, setEditedService] = useState("");
  const [editedUsername, setEditedUsername] = useState("");
  const [editedPassword, setEditedPassword] = useState("");
  const [editedNote, setEditedNote] = useState("");

  useEffect(() => {
    if (props.selectedPassword) {
      setEditedService(props.selectedPassword.service);
      setEditedUsername(props.selectedPassword.username);
      setEditedPassword(props.selectedPassword.password);
      setEditedNote(props.selectedPassword.note);
    }
  }, [props]);

  function onUpdateService(e) {
    setEditedService(e.target.value);
  }

  function onUpdateUsername(e) {
    setEditedUsername(e.target.value);
  }

  function onUpdatePassword(e) {
    setEditedPassword(e.target.value);
  }

  function onUpdateNote(e) {
    setEditedNote(e.target.value);
  }

  function onUpdatedPassword() {
    props.onUpdatePassword(props.selectedPassword.id, {
      service: editedService,
      username: editedUsername,
      password: editedPassword,
      note: editedNote,
    });
    setEditedService("");
    setEditedUsername("");
    setEditedPassword("");
    setEditedNote("");
  }

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "20rem" } }}
      className="section-edit-password"
    >
      <h2>Edit Password</h2>

      <div className="form-input">
        <div className="input-field-service">
          <h3>Service:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={editedService}
            onChange={onUpdateService}
            placeholder="Type service name"
          />
        </div>

        <div className="input-field-username">
          <h3>Username:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={editedUsername}
            onChange={onUpdateUsername}
            placeholder="Type your username"
          />
        </div>

        <div className="input-field-password">
          <h3>Password:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={editedPassword}
            onChange={onUpdatePassword}
            placeholder="Type your password"
          />
        </div>

        <div className="input-field-note">
          <h3>Optional notes:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={editedNote}
            onChange={onUpdateNote}
            placeholder="Type your notes"
          />
        </div>
      </div>

      <br />

      <div className="button">
        <Button variant="contained" onClick={onUpdatedPassword}>
          Save updated password
        </Button>
      </div>
    </Box>
  );
}
