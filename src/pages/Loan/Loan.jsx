import React from "react";
import "./loan.scss";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";
import PictureComponent from "@/../plugins/PictureComponent";
import Button from "@/components/Button/Button";
import Calculator from "@/components/Calculator/Calculator";

import creditPolicyImg from "@/img/cars/Chevrolet_1.png";
import benefitsImg from "@/img/cars/Ford-Escape.png";

import procent from "@/img/icons/Procent.svg";
import clock from "@/img/icons/Clock.svg";

export default function Loan() {
  return (
    <>
      <Header />

      <PageTitle>Loan rates</PageTitle>

      <section className="creditPolicy page-row">
        <div className="creditPolicy__wrapper page-row__wrapper">
          <div className="creditPolicy__container card page-row__container">
            <h2 className="creditPolicy__title section-title">
              Our credit policy
            </h2>
            <p className="creditPolicy__text secondary-text">
              You want to secure a loan that works for your budget. Here at CM
              we work with Canada’s largest lenders to help you find the best
              interest rates and terms for your auto loan.
            </p>
            <div
              style={{ height: "45px", width: "fit-content" }}
              className="creditPolicy__button-wrapper"
            >
              <Button addclass="creditPolicy__button accent">
                Request a Car
              </Button>
            </div>
          </div>

          <div className="creditPolicy__decoration" aria-hidden="true">
            <PictureComponent
              src={creditPolicyImg}
              alt="kia car"
              width="548"
              height="242"
              className="creditPolicy__img"
            />
          </div>
        </div>
      </section>

      <section className="InterestRates page-row">
        <div className="InterestRates__wrapper page-row__wrapper">
          <h2 className="InterestRates__title section-title">
            Interest rates and loan terms
          </h2>

          <div className="InterestRates__block">
            <div className="InterestRates__container card page-row__container">
              <div className="InterestRates__container-top">
                <img
                  src={procent}
                  alt="percent icon"
                  width="60"
                  height="60"
                  className="InterestRates__icon"
                  aria-hidden="true"
                />

                <h3 className="InterestRates__caption caption">
                  What are my interest rate options?
                </h3>
              </div>
              <p className="InterestRates__text secondary-text">
                We work to secure customized auto loans from Canada’s largest
                lenders. Your interest rate is critical for determining the
                total cost of your auto financing. Interest rates are based on
                many factors including the loan amount, your credit score, and
                your budget. We help you find the lowest interest rates
                available for your auto loan.
              </p>
            </div>

            <div className="InterestRates__container card page-row__container">
              <div className="InterestRates__container-top">
                <img
                  src={clock}
                  alt="clock icon"
                  width="60"
                  height="60"
                  className="InterestRates__icon"
                  aria-hidden="true"
                />

                <h3 className="InterestRates__caption caption">
                  How long will my loan term be?
                </h3>
              </div>
              <p className="InterestRates__text secondary-text">
                Our goal is to find the right car and the right loan for you.
                Because we have relationships with so many different lenders, we
                can help you find the right term length for your budget. The
                longer the loan is, often the lower the monthly payments will
                be—but the more expensive the loan will be overall. Most of the
                loans we secure for our clients are between 36 and 72 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits page-row">
        <div className="benefits__wrapper page-row__wrapper">
          <div className="benefits__container page-row__container">
            <h2 className="benefits__title section-title">
              Benefits of getting an auto loan with CM
            </h2>
            <p className="benefits__text secondary-text">
              For many people getting a reasonable auto loan is the best way for
              them to get a new car. However, the benefits of getting the right
              loan go beyond just being able to drive a nice vehicle.
            </p>
            <p className="title">
              When you work with CM, there are never any hidden costs or fees!
              We lay out all the terms and conditions so that you know exactly
              what details of the loan are before you sign anything.
            </p>
            <div
              style={{ height: "45px", width: "fit-content" }}
              className="benefits__button-wrapper"
            >
              <Button addclass="benefits__button accent">Request a Car</Button>
            </div>
          </div>

          <div className="benefits__decoration" aria-hidden="true">
            <PictureComponent
              src={benefitsImg}
              alt="ford escape car"
              width="600"
              height="295"
              className="benefits__img"
            />
          </div>
        </div>
      </section>

      <div className="loanCalculator">
        <Calculator />
      </div>

      <Footer />
    </>
  );
}
