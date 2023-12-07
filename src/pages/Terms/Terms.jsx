import React from "react";
import "./terms.scss";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";

import termsData from "@/data/terms.json";
import DropDownList from "@/components/DropDown/DropDownList";

export default function Terms() {
  return (
    <>
      <Header />

      <PageTitle>Terms & Conditions</PageTitle>

      <DropDownList data={termsData} />

      <Footer />
    </>
  );
}
