import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   //
import Resume from "./pages/Resume"; 
import Work1 from "./pages/Work1"; 
import Work2 from "./pages/Work2"; 
import Footer from "./components/Footer"; 
import PageTransition from "./components/PageTransition";

import "./index.css";  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
        <Route path="/work1" element={<PageTransition><Work1 /></PageTransition>} />
        <Route path="/work2" element={<PageTransition><Work2 /></PageTransition>} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
