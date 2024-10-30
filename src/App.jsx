// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      {/* Add more routes as needed */}
    </Routes>
  </Router>
);

export default App;
