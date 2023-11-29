import React from "react";
import "./pageTitle.scss";

export default function PageTitle({ children }) {
  return (
    <div className="calculator-page__title">
      <h1 className="main-title">Use our free calculator! {children}</h1>
    </div>
  );
}
