import React from "react";
import "./successful.scss";

import successIcon from "@/img/icons/Success.svg";

export default function Successful() {
  return (
    <div className="successfulContact">
      <div className="successfulContact__wrapper">
        <img
          src={successIcon}
          alt="success icon"
          className="successfulContact__icon"
          width="70"
          height="70"
          aria-hidden="true"
        />
        <div className="successfulContact__text-wrapper">
          <p className="successfulContact__title title-text">
            Application Successful!
          </p>
          <p className="successfulContact__text secondary-text">
            Our manager will contact you in the nearest time.
          </p>
        </div>
      </div>
    </div>
  );
}
