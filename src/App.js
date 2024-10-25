import PasswordsList from "./components/PasswordList";
import AddNewPassword from "./components/AddNewPassword";
import EditPassword from "./components/EditPassword";
import Header from "./components/Header";
import { usePassword } from "./hooks/usePasswords";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/App.css";

function App() {
  const theme = createTheme({
    typography: {
      htmlFontSize: 12,
    },
  });

  const {
    onCreatePassword,
    search,
    filteredPasswords,
    onSearch,
    onDeletePassword,
    onUpdatePassword,
    onSelectPassword,
    selectedPassword,
  } = usePassword();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className="main">
          <div className="show-passwords">
            <PasswordsList
              onSelectPassword={onSelectPassword}
              onSearch={onSearch}
              search={search}
              passwordList={filteredPasswords}
              onDeletePassword={onDeletePassword}
            />
          </div>
          <div className="handle-passwords">
            <div className="new-password">
              <AddNewPassword onNewPassword={onCreatePassword} />
            </div>
            <div className="edit-password">
              <EditPassword
                onUpdatePassword={onUpdatePassword}
                selectedPassword={selectedPassword}
              />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
