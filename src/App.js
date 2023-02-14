import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import History from "./pages/History";
import Climb from "./pages/Climb";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/climb" element={<Climb />} />
      </Routes>
    </Router>
  );
}

export default App;
