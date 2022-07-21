import { Routes, Route } from "react-router-dom";
import CreateToDo from "./pages/CreateToDo";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import UpdateToDo from "./pages/UpdateToDo";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<CreateToDo />} />
        <Route path="update" element={<UpdateToDo />} />
      </Routes>
    </Provider>
  );
}

export default App;
