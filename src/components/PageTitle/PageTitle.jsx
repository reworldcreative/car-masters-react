import React from "react";
import "./pageTitle.scss";

export default function PageTitle({ children }) {
  return (
    <div className="page-title">
      <h1 className="main-title">{children}</h1>
    </div>
  );
}
