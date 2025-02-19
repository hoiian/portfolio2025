import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";   //
import Work1 from "./pages/Work1"; 
import Work2 from "./pages/Work2"; 
import Footer from "./components/Footer"; 

import "./index.css";  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work1" element={<Work1 />} />
        <Route path="/work2" element={<Work2 />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);
