import React from "react";
import "./infoList.scss";
import InfoItem from "./InfoItem";

export default function InfoList({ children, ariaLabel }) {
  return (
    <>
      <ul
        className="info-list"
        aria-label={ariaLabel}
        aria-labelledby="info-label"
        role="group"
      >
        <li className="visibility-hidden" role="group">
          <p id="info-label" className="visibility-hidden">
            {ariaLabel}
          </p>
        </li>

        {children}
      </ul>
    </>
  );
}
