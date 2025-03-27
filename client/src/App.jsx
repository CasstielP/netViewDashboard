import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/DashBoard";
import ConfigPage from "./pages/configPage";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/config" element={<ConfigPage />} />
        <Route path="/config" element={user ? <ConfigPage /> : <Login />} />
      </Routes>
      
    </Router>
  );
};

export default App;
