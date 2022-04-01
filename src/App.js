import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import TaskManager from "./pages/TaskManager";
import Notes from "./pages/Notes";
import WexproGrid from "./pages/WexproGrid";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/rigschedule" element={<Schedule />} />
          <Route path="/taskmanager" element={<TaskManager />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/wexprogrid" element={<WexproGrid />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
