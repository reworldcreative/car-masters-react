import React from "react";
import "./privacy.scss";

import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";

import privacyData from "@/data/privacy.json";
import DropDownList from "@/components/DropDown/DropDownList";
import { useLocation } from "react-router-dom";

export default function Privacy() {
  useEffect(() => {
    document.title = `CarMasters - Privacy`;
  }, []);
  return (
    <>
      <Header />

      <PageTitle>Privacy Policy</PageTitle>

      <DropDownList data={privacyData} />

      <Footer />
    </>
  );
}
