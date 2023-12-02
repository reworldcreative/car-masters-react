import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { register } from "swiper/element/bundle";
import Calculator from "./pages/Calculator/Calculator";
import VideosPage from "./pages/VideosPage/VideosPage";
import About from "./pages/About/About";
register();

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/videos" element={<VideosPage />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="*"
          element={<div className="section-title">404 Page not found</div>}
        />
      </Routes>
    </>
  );
}
