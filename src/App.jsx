import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { register } from "swiper/element/bundle";
import Calculator from "./pages/Calculator/Calculator";
register();

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route
          exact
          path="*"
          element={<div className="section-title">404 Page not found</div>}
        />
      </Routes>
    </>
  );
}
