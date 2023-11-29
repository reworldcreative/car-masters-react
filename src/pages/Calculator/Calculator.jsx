import React from "react";
import "./calculator.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CalculatorContainer from "@/components/Calculator/Calculator";

export default function Calculator() {
  return (
    <>
      <Header />
      <div className="calculator-page__title">
        <h1 className="main-title">Use our free calculator!</h1>
      </div>

      <div className="calculator-page__container">
        <CalculatorContainer />
      </div>
      <Footer />
    </>
  );
}
