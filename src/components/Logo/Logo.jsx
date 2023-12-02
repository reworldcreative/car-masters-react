import React, { useState, useEffect } from "react";
import logoIcon from "@/img/logo/logo.svg";
import "./logo.scss";
import { Link } from "react-router-dom";

export default function Logo() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let logoText = "";
  if (windowWidth < 700) {
    logoText = "CM";
  } else {
    logoText = "CarMasters";
  }

  return (
    <>
      <Link
        to={"/"}
        className="logo"
        aria-label="Car Masters logo, move to main page"
      >
        <img
          className="logo__icon accent"
          src={logoIcon}
          alt="logo icon"
          width="42"
          height="31"
          aria-hidden="true"
        />

        <p className="logo__text main-title">{logoText}</p>
      </Link>
    </>
  );
}
