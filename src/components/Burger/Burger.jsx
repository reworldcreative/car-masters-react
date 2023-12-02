import React, { useEffect, useRef } from "react";
import "./burger.scss";
import closeIcon from "@/img/icons/close_icon.svg";
import SocialsList from "../Socials/SocialsList";
import { Link } from "react-router-dom";

export default function Burger({ close }) {
  const burgerMenuRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const resetOverflow = () => {
      document.body.style.overflow = "auto";
    };

    if (burgerMenuRef.current) {
      burgerMenuRef.current.focus();
    }

    const handleKeyDown = (event) => {
      const focusableElements = burgerMenuRef.current.querySelectorAll(
        "a[href], button, [tabindex]"
      );

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];

      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstFocusable) {
          event.preventDefault();
          lastFocusable.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === lastFocusable
        ) {
          event.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    if (burgerMenuRef.current) {
      burgerMenuRef.current.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      resetOverflow();
      if (burgerMenuRef.current) {
        burgerMenuRef.current.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <>
      <nav
        className="burgerMenu"
        tabIndex="-1"
        ref={burgerMenuRef}
        aria-label="burger navigation menu"
      >
        <button
          className="burgerMenu__close"
          aria-label="close burger menu"
          onClick={close}
          tabIndex="0"
        >
          <img
            src={closeIcon}
            alt="close burger menu icon"
            width="27"
            height="27"
            aria-hidden="true"
          />
        </button>

        <ul className="burgerMenu__list" aria-label="navigation links">
          <li className="burgerMenu__item">
            <a href="#" className="burgerMenu__link caption">
              Contact us
            </a>
          </li>
          <li className="burgerMenu__item">
            <Link to={"/about"} className="burgerMenu__link caption">
              About CM
            </Link>
          </li>
          <li className="burgerMenu__item">
            <a href="#" className="burgerMenu__link caption">
              Loan Rates
            </a>
          </li>
          <li className="burgerMenu__item">
            <Link to={"/videos"} className="burgerMenu__link caption">
              Video
            </Link>
          </li>
          <li className="burgerMenu__item">
            <a href="#" className="burgerMenu__link caption">
              Blog
            </a>
          </li>
          <li className="burgerMenu__item">
            <a href="#" className="burgerMenu__link caption">
              Calculate
            </a>
          </li>
        </ul>

        <SocialsList />
      </nav>

      <div className="burgerMenu__background"></div>
    </>
  );
}
