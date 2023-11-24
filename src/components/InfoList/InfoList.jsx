import React from "react";
import "./infoList.scss";
import InfoItem from "./InfoItem";

export default function InfoList({ children, ariaLabel }) {
  return (
    <ul
      className="info-list"
      aria-label={ariaLabel}
      aria-labelledby="info-label"
      role="group"
    >
      <p id="info-label" className="visibility-hidden">
        {ariaLabel}
      </p>
      {children}
    </ul>
  );
}
