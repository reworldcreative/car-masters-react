import React from "react";
import "./infoList.scss";
import InfoItem from "./InfoItem";

export default function InfoList({ children, ariaLabel }) {
  return (
    <>
      <ul
        className="info-list"
        aria-label={ariaLabel}
        role="group"
        tabIndex="0"
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
