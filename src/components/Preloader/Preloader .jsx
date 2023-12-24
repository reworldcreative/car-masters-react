import React from "react";
import "./preloader.scss";

// import logo from "@/img/icons/preloader-icon.svg";
import logo from "@/img/icons/preloader-logo.svg";

export default function Preloader({ style }) {
  return (
    <div className="preloader" style={style}>
      <div className="preloader__wrapper">
        <img
          src={logo}
          alt="logo icon"
          width="93"
          height="58"
          className="preloader__logo"
          aria-hidden="true"
          priority="true"
        />
        <p className="secondary-text preloader__text">
          <span>Loading</span>
          <span className="dot-1" aria-hidden="true">
            .
          </span>
          <span className="dot-2" aria-hidden="true">
            .
          </span>
          <span className="dot-3" aria-hidden="true">
            .
          </span>
        </p>
      </div>
    </div>
  );
}
