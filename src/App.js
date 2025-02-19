import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContent from "./components/mainContent/MainContent";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/*" element={<Login />} />
          <Route path="/dashboard" element={<MainContent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
