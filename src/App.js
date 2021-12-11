import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./components/Verify/Verify";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/rubelahmed" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
