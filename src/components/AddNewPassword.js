import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export default function AddNewPassword(props) {
  const [service, setService] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [note, setNote] = useState("");

  function onAddService(e) {
    setService(e.target.value);
  }

  function onAddUsername(e) {
    setUsername(e.target.value);
  }

  function onAddPassword(e) {
    setPassword(e.target.value);
  }

  function onAddNote(e) {
    setNote(e.target.value);
  }

  function onNewPassword() {
    const newPassword = {
      service: service,
      username: username,
      password: password,
      note: note,
    };
    props.onNewPassword(newPassword);
    setService("");
    setUsername("");
    setPassword("");
    setNote("");
  }

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "20rem" } }}
      className="section-new-password"
    >
      <h2>Add new Password</h2>

      <div className="form-input">
        <div className="input-field-service">
          <h3>Service:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={service}
            onChange={onAddService}
            placeholder="Type service name"
          />
        </div>

        <div className="input-field-username">
          <h3>Username:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={username}
            onChange={onAddUsername}
            placeholder="Type your username"
          />
        </div>

        <div className="input-field-password">
          <h3>Password:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={password}
            onChange={onAddPassword}
            placeholder="Type your password"
          />
        </div>

        <div className="input-field-note">
          <h3>Optional notes:</h3>
          <TextField
            id="filled-basic"
            variant="filled"
            type="text"
            value={note}
            onChange={onAddNote}
            placeholder="Type your notes"
          />
        </div>
      </div>

      <br />

      <div className="button">
        <Button variant="contained" onClick={onNewPassword}>
          Save new password
        </Button>
      </div>
    </Box>
  );
}
