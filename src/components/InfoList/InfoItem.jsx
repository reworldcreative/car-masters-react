import React from "react";
import "./infoList.scss";

export default function InfoItem({ title, text }) {
  return (
    <li className="info-list__item">
      <p className="section-title">{title}</p>
      <p className="secondary-text">{text}</p>
    </li>
  );
}
