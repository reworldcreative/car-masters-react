import React, { useEffect, useRef } from "react";
import "./burgerButton.scss";

export default function BurgerButton({ onClick, focus }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (focus && buttonRef.current) {
      buttonRef.current.focus();
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
    };
  }, [focus]);

  return (
    <button
      ref={buttonRef}
      className="burgerButton"
      onClick={onClick}
      aria-label="open menu"
    >
      <span className="burgerButton__line"></span>
      <span className="burgerButton__line"></span>
      <span className="burgerButton__line"></span>
    </button>
  );
}
