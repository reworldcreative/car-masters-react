import React from "react";
import "./calculator.scss";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import PageTitle from "@/components/PageTitle/PageTitle";
import CalculatorContainer from "@/components/Calculator/Calculator";
import { useLocation } from "react-router-dom";

export default function Calculator() {
  return (
    <>
      <Header />

      <PageTitle>Use our free calculator</PageTitle>

      <div className="calculator-page__container">
        <CalculatorContainer />
      </div>
      <Footer />
    </>
  );
}
