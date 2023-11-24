import React from "react";
import Home from "./pages/Home/Home";
import { register } from "swiper/element/bundle";
register();

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
