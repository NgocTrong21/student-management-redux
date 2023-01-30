import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<Create />} />
      <Route path="/edit/:id" element={<Update />} />
    </Routes>
  );
}

export default App;
