import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTransition from "./components/PageTransition";
import { SpeedInsights } from "@vercel/speed-insights/react";
import VideoLoader from "./components/VideoLoader";

// 改成 lazy load
const Home = lazy(() => import("./pages/Home"));
const Resume = lazy(() => import("./pages/Resume"));
const Work1 = lazy(() => import("./pages/Work1"));
const Work2 = lazy(() => import("./pages/Work2"));
const Work3 = lazy(() => import("./pages/Work3"));
const Footer = lazy(() => import("./components/Footer"));

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<VideoLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/resume"
            element={
              <PageTransition>
                <Resume />
              </PageTransition>
            }
          />
          <Route
            path="/work1"
            element={
              <PageTransition>
                <Work1 />
              </PageTransition>
            }
          />
          <Route
            path="/work2"
            element={
              <PageTransition>
                <Work2 />
              </PageTransition>
            }
          />
          <Route
            path="/work3"
            element={
              <PageTransition>
                <Work3 />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </Router>
    <Footer />
    <SpeedInsights />
  </React.StrictMode>
);
