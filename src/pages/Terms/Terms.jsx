import React from "react";
import "./terms.scss";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";

import termsData from "@/data/terms.json";
import DropDownList from "@/components/DropDown/DropDownList";
import { useLocation } from "react-router-dom";

export default function Terms() {
  useEffect(() => {
    document.title = `CarMasters - Terms`;
  }, []);
  return (
    <>
      <Header />

      <PageTitle>Terms & Conditions</PageTitle>

      <DropDownList data={termsData} />

      <Footer />
    </>
  );
}
