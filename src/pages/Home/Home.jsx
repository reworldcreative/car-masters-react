import React, { useEffect, useState } from "react";
import "./home.scss";
import Header from "@/components/Header/Header";
import Button from "@/components/Button/Button";
import HomeSwiper from "./components/HomeSwiper";

import PictureComponent from "@/../plugins/PictureComponent";
import car1 from "@/img/cars/Lexus.png";
import car2 from "@/img/cars/Honda-Accord.png";
import CarStep from "./components/CarStep";

import chooseCar1 from "@/img/cars/Honda_1.png";
import chooseCar2 from "@/img/cars/Corola_1.png";

import phone1 from "@/img/phone_1.png";
import phone2 from "@/img/phone_2.png";

import AdvantagesItem from "./components/AdvantagesItem";
import carsStepsData from "./steps.json";
import carsAdvantagesData from "./advantages.json";

import carIcon from "@/img/icons/Car.svg";
import deliveryIcon from "@/img/icons/Delivery.svg";
import financeIcon from "@/img/icons/Finance.svg";
import InfoList from "@/components/InfoList/InfoList";
import InfoItem from "@/components/InfoList/InfoItem";
import Reviews from "@/components/Reviews/Reviews";
import Calculator from "@/components/Calculator/Calculator";
import Interesting from "@/components/Interesting/Interesting";
import Footer from "@/components/Footer/Footer";

import articles from "@/data/articles.json";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [buttonText, setbuttonText] = useState("suv");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1350);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 500);

  const handleSlideChange = (activeSlideNumber) => {
    switch (activeSlideNumber) {
      case 1:
        setbuttonText("suv");
        break;
      case 2:
        setbuttonText("car");
        break;
      case 3:
        setbuttonText("truck");
        break;
      case 4:
        setbuttonText("van");
        break;
      default:
        setbuttonText("suv");
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1350);
      setIsMobileScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <section className="home-hero">
          <div className="home-hero__wrapper">
            <div className="home-hero__column">
              <h1 className="home-hero__title main-title">
                The easiest way to buy a car in Canada
              </h1>
              {isSmallScreen ? (
                <HomeSwiper handleSlideChange={handleSlideChange} />
              ) : (
                false
              )}
              {/* <Button addclass="home-hero__button">
                Request a {buttonText}
              </Button> */}

              <Link to={"/inventory"} className="button home-hero__button">
                Request a {buttonText}
              </Link>
            </div>

            {!isSmallScreen ? (
              <HomeSwiper handleSlideChange={handleSlideChange} />
            ) : (
              false
            )}
          </div>
        </section>

        <section className="home-info">
          <div className="home-info__wrapper">
            <div aria-hidden="true" className="home-info__decoration">
              <PictureComponent
                src={car1}
                alt="lexus car"
                width="500"
                height="255"
                className="home-info__img right"
              />

              <PictureComponent
                src={car2}
                alt="honda accord car"
                width="500"
                height="209"
                className="home-info__img left"
              />
            </div>

            <div className="home-info__container">
              <h2 className="section-title">How does it work?</h2>
              <p className="title-text home-info__caption">
                From your Phone to your Home
              </p>
              <p className="secondary-text home-info__text">
                We make it easy for you to buy your dream car from your phone
                without ever having to step into a dealership! We deliver your
                vehicle to your home for you to test drive before you sign
                anything.
              </p>
            </div>
          </div>
        </section>

        <section className="perfect-car">
          <div className="perfect-car__wrapper">
            <h2 className="section-title">Your perfect car in 5 easy steps</h2>

            <div className="perfect-car__container">
              <ul className="perfect-car__list" aria-label="5 easy steps">
                {carsStepsData.length ? (
                  carsStepsData
                    .slice(0, 5)
                    .map((carsStep) => (
                      <CarStep
                        key={carsStep.id}
                        step={carsStep.id}
                        title={carsStep.title}
                        text={carsStep.text}
                      />
                    ))
                ) : (
                  <></>
                )}
              </ul>

              <div className="perfect-car__decoration" aria-hidden="true">
                <PictureComponent
                  src={phone1}
                  alt="the ultimate mobile app"
                  width="255"
                  height="511"
                  className="perfect-car__phone perfect-car__phone-one"
                />
                <PictureComponent
                  src={phone2}
                  alt="path on the map"
                  width="255"
                  height="512"
                  className="perfect-car__phone perfect-car__phone-two"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="home-advantages">
          <div className="home-advantages__wrapper">
            <h2 id="advantages" className="section-title">
              Advantages of working with us
            </h2>

            <ul
              className="home-advantages__container"
              aria-labelledby="advantages list"
            >
              {carsAdvantagesData.length ? (
                carsAdvantagesData
                  .slice(0, 3)
                  .map((carsAdvantage) => (
                    <AdvantagesItem
                      key={carsAdvantage.id}
                      icon={carsAdvantage.icon}
                      title={carsAdvantage.title}
                      text={carsAdvantage.text}
                    />
                  ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </section>

        <section className="home-choose">
          <div className="home-choose__wrapper">
            <div className="home-choose__decoration" aria-hidden="true">
              <PictureComponent
                src={chooseCar1}
                alt="honda car"
                width="491"
                height="234"
                className="home-choose__img front"
              />

              <PictureComponent
                src={chooseCar2}
                alt="honda corola car"
                width="428"
                height="187"
                className="home-choose__img back"
              />
            </div>

            <div className="home-choose__container">
              <h2 className="section-title">
                Сhoose your dream vehicle in our catalog
              </h2>

              <div className="home-choose__text-container">
                <p className="secondary-text">
                  In our catalogue there are many models of vehicles. Choose
                  your car to your liking.
                </p>
                <div
                  style={{
                    height: "50px",
                    width: "fit-content",
                    display: "flex",
                  }}
                  className="home-choose__button-wrapper"
                >
                  {/* <Button addclass="home-choose__button accent">
                    Inventory
                  </Button> */}

                  <Link
                    to={"/inventory"}
                    className="button home-choose__button accent"
                  >
                    Inventory
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="happy-customers">
          <div className="happy-customers__wrapper">
            <div className="happy-customers__text">
              <h2 className="section-title">Happy customers</h2>
              <div className="happy-customers__text-container">
                <p className="secondary-text">
                  Since 2017, we have helped thousands of Canadians get their
                  dream vehicles from the comfort of their homes.
                </p>

                {isSmallScreen ? (
                  <InfoList ariaLabel="our statistic">
                    <InfoItem title="7,988+" text="Sold Cars" />
                    <InfoItem title="16,974+" text="Vehicles To Choose From" />
                    <InfoItem title="123" text="Experts Across Canada" />
                  </InfoList>
                ) : (
                  false
                )}

                <p className="happy-customers__caption caption">
                  What are you waiting? Get started right now!
                </p>

                <div
                  style={{
                    width: "fit-content",
                    height: "45px",
                    display: "flex",
                  }}
                  className="happy-customers__button-wrapper"
                >
                  {/* <Button addclass="happy-customers__button accent">
                    Request a Car
                  </Button> */}

                  <Link
                    to={"/quiz"}
                    className="button happy-customers__button accent"
                  >
                    Request a car
                  </Link>
                </div>
              </div>
            </div>

            {!isSmallScreen ? (
              <InfoList ariaLabel="our statistic">
                <InfoItem title="7,988+" text="Sold Cars" />
                <InfoItem title="16,974+" text="Vehicles To Choose From" />
                <InfoItem title="123" text="Experts Across Canada" />
              </InfoList>
            ) : (
              false
            )}
          </div>
        </section>

        <Reviews />

        <Calculator />

        <Interesting
          sliderNavidation={isMobileScreen ? true : false}
          caption="Interesting to read"
          articles={articles.slice(0, 6)}
        />
      </main>

      <Footer />
    </>
  );
}
