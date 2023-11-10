import React from "react";

import { register } from "swiper/element/bundle";
import Home from "./pages/Home/Home";
register();

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
