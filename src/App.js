import { Routes, Route } from "react-router-dom";
import CreateToDo from "./pages/CreateToDo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UpdateToDo from "./pages/UpdateToDo";
import { Provider } from "react-redux";
import store from "./store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/todo-app" element={<Home />} />
          <Route path="/todo-app/create" element={<CreateToDo />} />
          <Route path="/todo-app/update" element={<UpdateToDo />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
