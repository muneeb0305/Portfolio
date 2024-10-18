import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./containers/project";
import Sidebar from "./components/Sidebar/sidebar";
import All from "./containers/all";
import Print from "./containers/print";
import Work from "./containers/work";
import About from "./containers/about";
import './index.css';


export default function App() {
  return (
    <Router>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/all" element={<All />} />
          <Route path="/work" element={<Work />} />
          <Route path="/print" element={<Print />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </Router>
  );
}
