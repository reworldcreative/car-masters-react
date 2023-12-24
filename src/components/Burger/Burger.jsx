import React, { useEffect, useRef, useState } from "react";
import "./burger.scss";
import closeIcon from "@/img/icons/close_icon.svg";
// import SocialsList from "../Socials/SocialsList";
// import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import ContactMenu from "./ContactMenu/ContactMenu";
import Successful from "./ContactMenu/Successful/Successful";

export default function Burger({ close }) {
  const burgerMenuRef = useRef(null);
  const [isContact, setIsContact] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const successMenu = () => {
    setIsSuccess(true);
  };

  const closeContactMenu = () => {
    setIsContact(false);
    setIsSuccess(false);
  };

  const closeMenu = () => {
    isContact ? closeContactMenu() : isSuccess ? closeContactMenu() : close();
  };

  const openContactMenu = () => {
    setIsContact(true);
  };

  useEffect(() => {
    // document.body.style.overflow = "hidden";
    document.body.classList.add("no-scroll");

    const resetOverflow = () => {
      // document.body.style.overflow = "auto";
      document.body.classList.remove("no-scroll");
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
      setIsSuccess(false);
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
          onClick={closeMenu}
          tabIndex="0"
        >
          <img
            src={closeIcon}
            alt="close burger menu icon"
            width="27"
            height="27"
            aria-hidden="true"
            loading="eager"
          />
        </button>

        <div className="burgerMenu__wrapper">
          {!isContact && !isSuccess ? (
            <BurgerMenu openContact={openContactMenu} />
          ) : (
            <></>
          )}

          {isContact && !isSuccess ? (
            <ContactMenu success={successMenu} />
          ) : (
            <></>
          )}

          {isSuccess ? <Successful /> : <></>}
        </div>
      </nav>

      <div className="burgerMenu__background" onClick={closeMenu}></div>
    </>
  );
}
