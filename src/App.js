import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/HomePage/HomePage";
import ExperienceGrid from "./components/ExperienceGrid/ExperienceGrid";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import GenericPage from "./pages/GenericPage/GenericPage";
import "./App.css";

function App() {
  return (
    <div className="App bg-custom-background text-custom-text min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects"
            element={
              <GenericPage title="Projects">
                <ProjectGrid />
              </GenericPage>
            }
          />
          <Route
            path="/experience"
            element={
              <GenericPage title="Experience">
                <ExperienceGrid />
              </GenericPage>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
