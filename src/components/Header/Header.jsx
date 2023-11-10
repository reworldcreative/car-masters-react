import React from "react";
import logoIcon from "@/img/logo/logo.svg";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <a href="#" className="logo">
        <img
          className="logo__icon accent"
          src={logoIcon}
          alt="logo icon"
          width="42.5"
          height="31.2"
        />

        <p className="logo__text">CarMasters</p>
      </a>
    </header>
  );
}
