import React from "react";
import "./infoList.scss";
import InfoItem from "./InfoItem";

export default function InfoList({ children, ariaLabel }) {
  return (
    <>
      <div
        className="info-list"
        aria-label={ariaLabel}
        role="group"
        tabIndex="-1"
      >
        <div className="visibility-hidden" role="group">
          <p id="info-label" className="visibility-hidden">
            {ariaLabel}
          </p>
        </div>

        {children}
      </div>
    </>
  );
}
