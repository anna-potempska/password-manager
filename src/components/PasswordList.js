import { TextField, Card, Button, ButtonGroup } from "@mui/material";

export default function PasswordsList(props) {
  const handleDelete = async (id) => {
    await props.onDeletePassword(id);
  };

  const handleEdit = async (id) => {
    props.onSelectPassword(id);
  };

  function onSearch(e) {
    props.onSearch(e.target.value);
  }

  return (
    <div className="section-password-list">
      <h2>Password List</h2>

      <div className="search-bar">
        <h3>Search password:</h3>
        <TextField
          id="filled-basic"
          variant="filled"
          type="text"
          value={props.search}
          onChange={onSearch}
          placeholder="Type the service"
        />
      </div>

      <ul className="password-list">
        {props.passwordList.map((password) => (
          <Card variant="outlined">
            <li key={password.id} className="password">
              <p>
                <strong>Service:</strong> <br /> {password.service}
              </p>
              <p>
                <strong>Username:</strong> <br /> {password.username}
              </p>
              <p>
                <strong>Password:</strong>
                <br /> {password.password}
              </p>
              <p>
                <strong>Note:</strong>
                <br /> {password.note}
              </p>
              <div className="buttons">
                <ButtonGroup variant="outlined" aria-label="Basic button group">
                  <Button onClick={() => handleEdit(password.id)}>Edit</Button>
                  <Button onClick={() => handleDelete(password.id)}>
                    Delete
                  </Button>
                </ButtonGroup>
              </div>
            </li>
          </Card>
        ))}
      </ul>
    </div>
  );
}
