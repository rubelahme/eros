import "./App.css";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./components/Verify/Verify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
