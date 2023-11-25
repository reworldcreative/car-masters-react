import React from "react";
import "./calculator.scss";

export default function Calculator() {
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
                  value="Poor"
                  defaultChecked
                  className="visibility-hidden"
                />
                <label className="secondary-text radio-label" htmlFor="Poor">
                  Poor
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Average"
                  name="car-status-type"
                  value="Average"
                  className="visibility-hidden"
                />
                <label className="secondary-text radio-label" htmlFor="Average">
                  Average
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="Good"
                  name="car-status-type"
                  value="Good"
                  className="visibility-hidden"
                />
                <label className="secondary-text radio-label" htmlFor="Good">
                  Good
                </label>
              </div>
            </fieldset>

            <fieldset className="slider-group" role="group">
              <div className="slider-group__container">
                <p className="title">Loan Amount</p>
                <p className="secondary-text">$ 150 000</p>
              </div>
              <input
                type="range"
                min="1"
                max="1000000"
                defaultValue="150000"
                className="slider"
                id="AmountRange"
              ></input>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
