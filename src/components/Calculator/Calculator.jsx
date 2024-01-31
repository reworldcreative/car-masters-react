import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import "./calculator.scss";
import CalculatorSlider from "./CalculatorSlider";
import CalculatorResult from "./CalculatorResult";

import cars from "@/data/cars.json";

export default function Calculator() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1000);
  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [priceAmount, setPriceAmount] = useState(150000);
  const [months, setMonths] = useState(18);
  const [carStatus, setCarStatus] = useState("poor");

  useEffect(() => {
    if (id) {
      if (id && location.pathname.replace(/\/\d+$/, "") === "/car") {
        setPriceAmount(
          parseInt(cars.find((car) => car.id === +id).price.replace(/\s/g, "")),
          10
        );
      }
    }
  }, [id]);

  const ChangePrice = (amount) => {
    if (id && location.pathname.replace(/\/\d+$/, "") === "/car") {
      setPriceAmount(
        parseInt(cars.find((car) => car.id === +id).price.replace(/\s/g, "")),
        10
      );
    } else {
      setPriceAmount(amount);
    }
  };

  const ChangeMonths = (amount) => {
    setMonths(amount);
  };

  const ChangeCarStatus = (event) => {
    setCarStatus(event.target.value);
  };

  return (
    <section className="calculator">
      <div className="calculator__wrapper">
        <div className="calculator__head">
          <h2 className="section-title">
            Let’s figure out how much you can afford
          </h2>
          <p className="secondary-text ">
            Before you start shopping, let’s figure out how much you can afford.
            Move the sliders to see how the loan duration and the total loan
            amount affect your monthly payments.
          </p>
        </div>

        <div className="calculator__container">
          <form className="calculator__block calculator-form">
            <div className="calculator-form__wrapper">
              <fieldset
                className="calculator__type"
                role="radiogroup"
                aria-labelledby="statusCaption"
              >
                <p className="visibility-hidden" id="statusCaption">
                  choose one of car status
                </p>
                <div>
                  <input
                    type="radio"
                    id="Poor"
                    name="car-status-type"
                    value="poor"
                    defaultChecked
                    className="visibility-hidden"
                    onClick={ChangeCarStatus}
                    // tabIndex="0"
                  />
                  <label
                    className="secondary-text radio-label"
                    htmlFor="Poor"
                    tabIndex="0"
                  >
                    Poor
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Average"
                    name="car-status-type"
                    value="average"
                    className="visibility-hidden"
                    onChange={ChangeCarStatus}
                    // tabIndex="0"
                  />
                  <label
                    className="secondary-text radio-label"
                    htmlFor="Average"
                    tabIndex="0"
                  >
                    Average
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="Good"
                    name="car-status-type"
                    value="good"
                    className="visibility-hidden"
                    onChange={ChangeCarStatus}
                    // tabIndex="0"
                  />
                  <label
                    className="secondary-text radio-label"
                    htmlFor="Good"
                    tabIndex="0"
                  >
                    Good
                  </label>
                </div>
              </fieldset>

              <div className="calculator-form__wrapper sliders">
                <CalculatorSlider
                  defaultValue={priceAmount}
                  text="Loan Amount"
                  type="money"
                  min="10000"
                  max="500000"
                  ariaLabel="select price of the car"
                  change={ChangePrice}
                  disabled={
                    id && location.pathname.replace(/\/\d+$/, "") === "/car"
                      ? true
                      : false
                  }
                />
                <CalculatorSlider
                  defaultValue="18"
                  text="Loan Duration"
                  type="month"
                  min="1"
                  max="60"
                  ariaLabel="select the number of months to pay for the car"
                  change={ChangeMonths}
                />
              </div>

              {isSmallScreen ? (
                <CalculatorResult
                  priceAmount={priceAmount}
                  months={months}
                  status={carStatus}
                />
              ) : (
                false
              )}
            </div>
          </form>

          {!isSmallScreen ? (
            <CalculatorResult
              priceAmount={priceAmount}
              months={months}
              status={carStatus}
            />
          ) : (
            false
          )}
        </div>
      </div>
    </section>
  );
}
