import React from "react";
import "./button.scss";

export default function Button({ children, addclass }) {
  return <button className={`button ${addclass}`}>{children}</button>;
}
