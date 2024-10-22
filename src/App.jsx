import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Loading from "./components/Loader/loader";

const Project = lazy(() => import("./containers/project"));
const Print = lazy(() => import("./containers/print"));
const Work = lazy(() => import("./containers/work"));
const About = lazy(() => import("./containers/about"));

export default function App() {
  return (
    <Router>
      <Sidebar>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Project />} />
            <Route path="/work" element={<Work />} />
            <Route path="/print" element={<Print />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </Sidebar>
    </Router>
  );
}
