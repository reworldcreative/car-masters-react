import React, { useEffect, useState } from "react";
import "./calculatorSlider.scss";
import "./dualRangeSlider.scss";

export default function DualRangeSlider({
  min,
  max,
  ariaLabel,
  change,
  fromValue,
  toValue,
  type,
}) {
  const [minValue, setMinValue] = useState(fromValue);
  const [maxValue, setMaxValue] = useState(toValue);

  useEffect(() => {
    setMinValue(fromValue);
    setMaxValue(toValue);
  }, [fromValue, toValue]);

  const handleMinChange = (event) => {
    const value = parseInt(event.target.value, 10);

    if (value < max && value >= maxValue) {
      setMaxValue(value + 1);
    }
    setMinValue(value);
    change([minValue, maxValue]);
  };

  const handleMaxChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (value > min && value <= minValue) {
      setMinValue(value - 1);
    }
    setMaxValue(value);
    change([minValue, maxValue]);
  };

  const fillStyle = {
    background: `linear-gradient(to right, #d7d7d7 0%, #d7d7d7 ${
      ((minValue - min) / (max - min)) * 100
    }%, var(--base-color) ${
      ((minValue - min) / (max - min)) * 100
    }%, var(--base-color) ${((maxValue - min) / (max - min)) * 100}%, #d7d7d7 ${
      ((maxValue - min) / (max - min)) * 100
    }%, #d7d7d7 100%)`,
  };

  //   {type === "years" ? (
  //     <>$ {parseInt(loanAmount).toLocaleString()}</>
  //   ) : type === "month" ? (
  //     <>
  //       {loanAmount} <span className="secondary-text">month</span>
  //     </>
  //   ) : type === "kilometers" ? (
  //     <>
  //       {loanAmount} <span className="secondary-text"> or less</span>
  //     </>
  //   ) : (
  //     <></>
  //   )}

  return (
    <fieldset className="slider-group DualRangeSlider" role="group">
      <div className="slider-group__container">
        <p className="caption" aria-hidden="true">
          {type === "money" ? (
            <span>$ {parseInt(minValue).toLocaleString()}</span>
          ) : (
            <>{minValue}</>
          )}
        </p>
        <p className="caption" aria-hidden="true">
          {type === "money" ? (
            <span>$ {parseInt(maxValue).toLocaleString()}</span>
          ) : (
            <>{maxValue}</>
          )}
        </p>
      </div>
      <div className="slider__inputsWrapper">
        <input
          type="range"
          aria-label={`${ariaLabel}, in range from ${min} to ${max}`}
          min={min}
          max={max}
          className="slider"
          step="1"
          value={fromValue}
          onChange={handleMinChange}
          style={fillStyle}
        />

        <input
          type="range"
          aria-label={`${ariaLabel}, in range from ${min} to ${max}`}
          min={min}
          max={max}
          className="slider"
          step="1"
          value={toValue}
          onChange={handleMaxChange}
        />
      </div>
    </fieldset>
  );
}
