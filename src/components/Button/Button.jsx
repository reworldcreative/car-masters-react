import React from "react";
import "./button.scss";

export default function Button({ children, addclass, click }) {
  return (
    <button className={`button ${addclass}`} onClick={click}>
      {children}
    </button>
  );
}
