import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import { register } from "swiper/element/bundle";
import Calculator from "./pages/Calculator/Calculator";
import VideosPage from "./pages/VideosPage/VideosPage";
import About from "./pages/About/About";
import Loan from "./pages/Loan/Loan";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Blog from "./pages/Blog/Blog";
import Article from "./pages/Article/Article";
register();

export default function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/videos" element={<VideosPage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/loan" element={<Loan />} />
        <Route exact path="/terms" element={<Terms />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/article/:id" element={<Article />} />
        <Route
          exact
          path="*"
          element={<div className="section-title">404 Page not found</div>}
        />
      </Routes>
    </>
  );
}
