import React, { useState } from "react";
import "./calculatorSlider.scss";

export default function CalculatorSlider({
  defaultValue,
  text,
  type,
  min,
  max,
  ariaLabel,
  change,
}) {
  const [loanAmount, setLoanAmount] = useState(defaultValue);

  const handleSliderChange = (event) => {
    setLoanAmount(parseInt(event.target.value, 10));
    change(parseInt(event.target.value, 10));
  };

  const fillStyle = {
    background: `linear-gradient(to right, var(--base-color) 0%, var(--base-color) ${
      (loanAmount / max) * 100
    }%, #d7d7d7 ${(loanAmount / max) * 100}%, #d7d7d7 100%)`,
  };

  return (
    <fieldset className="slider-group" role="group">
      <div className="slider-group__container">
        <p className="title" aria-hidden="true">
          {text}
        </p>
        <p className="caption" aria-hidden="true">
          {type === "money" ? (
            <>$ {parseInt(loanAmount).toLocaleString()}</>
          ) : type === "month" ? (
            <>
              {loanAmount} <span className="secondary-text">month</span>
            </>
          ) : (
            <></>
          )}
        </p>
      </div>
      <input
        type="range"
        aria-label={`${ariaLabel}, in range from ${min} to ${max}`}
        min={min}
        max={max}
        defaultValue={defaultValue}
        onChange={handleSliderChange}
        className="slider"
        id={type + "Range"}
        style={fillStyle}
        step="1"
      ></input>
    </fieldset>
  );
}
