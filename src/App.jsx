import React, { useState, useEffect } from "react";
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
import Inventory from "./pages/Inventory/Inventory";
import NotFound from "./pages/NotFound/NotFound";
import Preloader from "./components/Preloader/Preloader ";
import CarPage from "./pages/CarPage/CarPage";
register();

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // const handleLoad = () => {
    //   setLoading(false);
    // };
    // window.addEventListener("load", handleLoad);
    // return () => {
    //   window.removeEventListener("load", handleLoad);
    // };

    const simulatePageLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    simulatePageLoad();
  }, []);
  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
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
          <Route exact path="/car/:id" element={<CarPage />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}
