import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { register } from "swiper/element/bundle";
// import { register } from "swiper/element";

// import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
// import VideosPage from "./pages/VideosPage/VideosPage";
// import About from "./pages/About/About";
// import Loan from "./pages/Loan/Loan";
// import Terms from "./pages/Terms/Terms";
// import Privacy from "./pages/Privacy/Privacy";
// import Blog from "./pages/Blog/Blog";
// import Article from "./pages/Article/Article";
// import Inventory from "./pages/Inventory/Inventory";
// import NotFound from "./pages/NotFound/NotFound";
// import CarPage from "./pages/CarPage/CarPage";
// import Quiz from "./pages/Quiz/Quiz";

import Preloader from "./components/Preloader/Preloader";
register();

const Home = React.lazy(() => import("./pages/Home/Home"));
// const Calculator = React.lazy(() => import("./pages/Calculator/Calculator"));
const VideosPage = React.lazy(() => import("./pages/VideosPage/VideosPage"));
const About = React.lazy(() => import("./pages/About/About"));
const Loan = React.lazy(() => import("./pages/Loan/Loan"));
const Terms = React.lazy(() => import("./pages/Terms/Terms"));
const Privacy = React.lazy(() => import("./pages/Privacy/Privacy"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));
const Article = React.lazy(() => import("./pages/Article/Article"));
const Inventory = React.lazy(() => import("./pages/Inventory/Inventory"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));
const CarPage = React.lazy(() => import("./pages/CarPage/CarPage"));
const Quiz = React.lazy(() => import("./pages/Quiz/Quiz"));

// const Preloader = React.lazy(() => import("./components/Preloader/Preloader"));

export default function App() {
  // const [load, setLoad] = useState(false);

  // const handleLoad = () => {
  //   setLoad(true);
  //   document.body.classList.remove("no-scroll");
  // };

  // const preloaderStyles = {
  //   display: load ? "none" : "flex",
  // };

  // const location = useLocation();

  // // useEffect(() => {
  // //   window.scrollTo({ top: 0, behavior: "auto" });
  // //   document.activeElement.blur();

  // //   const handleBeforeUnload = () => {
  // //     setLoad(false);
  // //     document.body.classList.add("no-scroll");
  // //   };

  // //   window.addEventListener("DOMContentLoaded", handleBeforeUnload);

  // //   window.addEventListener("load", handleLoad);
  // //   return () => {
  // //     window.removeEventListener("load", handleLoad);
  // //     window.removeEventListener("DOMContentLoaded", handleBeforeUnload);
  // //   };
  // // }, []);

  // // document.addEventListener("DOMContentLoaded", function () {
  // //   setLoad(false);
  // //   document.body.classList.add("no-scroll");
  // // });

  // window.addEventListener("load", function () {
  //   window.scrollTo({ top: 0, behavior: "auto" });
  //   document.activeElement.blur();
  //   setTimeout(() => {
  //     handleLoad();
  //   }, 100);
  // });

  // useEffect(() => {
  //   document.activeElement.blur();
  //   window.scrollTo({ top: 0, behavior: "auto" });

  //   // const handleBeforeUnload = () => {
  //   //   window.scrollTo(0, 0);
  //   // };

  //   // window.addEventListener("beforeunload", handleBeforeUnload);
  //   setLoad(false);
  //   document.body.classList.add("no-scroll");
  //   setTimeout(() => {
  //     handleLoad();
  //   }, 1000);
  //   // const handleImageLoad = () => {
  //   //   setTimeout(() => {
  //   //     handleLoad();
  //   //   }, 1000);
  //   // };

  //   // const images = document.querySelectorAll("img");

  //   // images.forEach((image) => {
  //   //   image.addEventListener("load", handleImageLoad);
  //   // });

  //   // return () => {
  //   //   images.forEach((image) => {
  //   //     image.removeEventListener("load", handleImageLoad);
  //   //   });
  //   //   window.removeEventListener("beforeunload", handleBeforeUnload);
  //   // };
  // }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<Preloader />}>
        {/* <Preloader style={preloaderStyles} /> */}
        {/* {load && ( */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calculator" element={<Calculator />} />
          <Route exact path="/videos" element={<VideosPage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/loan" element={<Loan />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/blog/:page" element={<Blog />} />
          <Route exact path="/article/:id" element={<Article />} />
          <Route exact path="/car/:id" element={<CarPage />} />
          <Route exact path="/inventory" element={<Inventory />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route exact path="*" element={<NotFound />} />
        </Routes>
        {/* )} */}
      </Suspense>
    </>
  );
}
