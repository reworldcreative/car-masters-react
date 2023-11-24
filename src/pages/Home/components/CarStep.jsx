import React from "react";

export default function CarStep({ step, title, text }) {
  return (
    <>
      <li className="perfect-car__step" aria-label={`step ${step}`}>
        <div className="perfect-car__step-icon caption" aria-hidden="true">
          {step}
        </div>

        <div className="perfect-car__step-description">
          <h3 className="title">{title}</h3>
          <p className="secondary-text">{text}</p>
        </div>
      </li>
    </>
  );
}
