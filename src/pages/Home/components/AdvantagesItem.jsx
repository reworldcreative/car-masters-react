import React from "react";

export default function AdvantagesItem({ icon, title, text }) {
  return (
    <li className="home-advantages__item">
      <img
        src={icon}
        alt="advantages icon"
        width="70"
        height="70"
        className="home-advantages__icon"
        aria-hidden="true"
      />
      <h3 className="title">{title}</h3>

      <p className="secondary-text">{text}</p>
    </li>
  );
}
