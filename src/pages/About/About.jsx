import React from "react";
import "./about.scss";
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";
import Footer from "@/components/Footer/Footer";
import Button from "@/components/Button/Button";
import PictureComponent from "@/../plugins/PictureComponent";
import CarStep from "../Home/components/CarStep";
import Reviews from "@/components/Reviews/Reviews";
import InfoList from "@/components/InfoList/InfoList";
import InfoItem from "@/components/InfoList/InfoItem";
import Calculator from "@/components/Calculator/Calculator";

import missionDecoration from "@/img/cars/Kia.png";
import convenienceDecoration from "@/img/cars/Nissan.png";
import teamImage from "@/img/TeamPhoto_2.jpg";
import teamFeatures from "@/img/TeamFeatures_2.jpg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <Header />

      <PageTitle>About CM </PageTitle>

      <section className="mission page-row">
        <div className="mission__wrapper page-row__wrapper">
          <div className="mission__container card page-row__container">
            <h2 className="mission__title section-title">Our mission</h2>
            <p className="mission__text secondary-text">
              Our mission at CM is to help you find the perfect car at the
              perfect price and with the perfect auto loan. We make buying a car
              simple. You can complete the entire process from home—we’ll even
              deliver the car to you!
            </p>
            <div
              style={{ height: "45px", width: "fit-content" }}
              className="mission__button-wrapper"
            >
              {/* <Button addclass="mission__button accent">Request a Car</Button> */}
              <Link to={"/quiz"} className="button accent mission__button">
                Request a car
              </Link>
            </div>
          </div>

          <div className="mission__decoration" aria-hidden="true">
            <PictureComponent
              src={missionDecoration}
              alt="kia car"
              width="542"
              height="255"
              className="mission__img"
            />
          </div>
        </div>
      </section>

      <section className="dream page-row">
        <div className="dream__wrapper page-row__wrapper">
          <div className="dream__container page-row__container">
            <h2 className="dream__title section-title">Get your dream car</h2>

            <div className="dream__text-wrapper page-row__text-wrapper">
              <p className="dream__text secondary-text">
                We founded CM because we hated how complicated it was to buy a
                car. You only have so much free time in your life. You don’t
                want to waste it going to different car dealerships every
                weekend for weeks and months trying to track down the right car.
              </p>
              <p className="dream__text secondary-text">
                We also hated how choosing a car and figuring out the financing
                for the vehicle were treated as totally separate processes!
                Instead of dealing with a salesperson, then being handed off to
                a closer, and then shuffled over to a finance manager, we wanted
                to create a way for people to buy a car and only deal with a
                single person for the entire process.
              </p>
            </div>
          </div>

          <ul className="dream__list" aria-label="dream steps">
            {/* <p className="visibility-hidden">dream steps</p> */}
            <li className="visibility-hidden" role="group">
              <p>dream steps</p>
            </li>
            <CarStep
              step="1"
              title="Quickly"
              text="You do not spend a lot of your time going to car dealerships"
            />
            <CarStep
              step="2"
              title="Simply"
              text="You can order your dream car just by talking to our specialist by phone"
            />
            <CarStep
              step="3"
              title="Conveniently"
              text="We will deliver the car directly to the doorstep of your home or office"
            />
          </ul>
        </div>
      </section>

      <section className="convenience page-row">
        <div className="convenience__wrapper page-row__wrapper">
          <div className="convenience__decoration" aria-hidden="true">
            <PictureComponent
              src={convenienceDecoration}
              alt="nissan car"
              width="567"
              height="274"
              className="convenience__img"
            />
          </div>

          <div className="convenience__container page-row__container">
            <h2 className="convenience__title section-title">
              CM is convenience and transparency
            </h2>

            <div className="convenience__text-wrapper page-row__text-wrapper">
              <p className="convenience__text secondary-text">
                We want to make simple for you to find the car you want. We also
                want to make sure you are 100% comfortable with the terms of the
                conditions of your auto loan.
              </p>
              <p className="convenience__text secondary-text">
                Buying a car has never been easier. You pick out the car you
                want on our website. You work with one of our Qualified Agents
                to secure financing. Then we bring the car to you—all before you
                sign anything. You test drive the vehicle, and if you like it,
                you sign the loan documents right there and the car is yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bestPrices page-row">
        <div className="bestPrices__wrapper page-row__wrapper">
          <div className="page-row__container bestPrices__container">
            <h2 className="bestPrices__title section-title">
              Get a car at the best prices and conditions
            </h2>
            <div className="bestPrices__text-wrapper page-row__text-wrapper">
              <p className="bestPrices__text secondary-text">
                Not only is buying a car with CM easy, it’s also the best way to
                save money. We have partnerships with Canada’s largest lenders.
                That allows us to help you secure loans at the best interest
                rates available.
              </p>
              <p className="bestPrices__text secondary-text">
                Because convenience and transparency are our founding
                principles, we take the time to answer all of your questions
                about the vehicle and the auto loan. We will send you pictures
                and videos of any part of the car you like before you request a
                test drive.
              </p>
            </div>
          </div>

          <div className="bestPrices__block">
            <h3 className="caption">
              We think that CM is the best way to buy a car in Canada. Try it
              for yourself and see how much time and money you can save.
            </h3>

            <p className="bestPrices__text secondary-text">
              There are never any hidden fees or costs. We never ask you to sign
              anything until we have explained it clearly and you have had a
              chance to read it.
            </p>

            <div
              style={{ height: "45px", width: "fit-content" }}
              className="mission__button-wrapper"
            >
              {/* <Button addclass="mission__button accent">Request a Car</Button> */}
              <Link to={"/quiz"} className="button accent mission__button">
                Request a Car
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="qualified page-row">
        <div className="qualified__wrapper page-row__wrapper">
          <div className="qualified__container card page-row__container">
            <h3 className="qualified__card-title title-text">
              Contact us today and speak with one of our qualified agents
            </h3>

            <div
              style={{ height: "45px", width: "fit-content" }}
              className="mission__button-wrapper"
            >
              <Button addclass="mission__button accent">Contact Us Now</Button>
            </div>
          </div>

          <div className="page-row__container qualified__container">
            <h2 className="qualified__title section-title">
              Our qualified agents
            </h2>
            <div className="qualified__text-wrapper page-row__text-wrapper">
              <p className="qualified__text secondary-text">
                The true secret to success of CM isn’t our streamlined
                purchasing and financing processes. The real reason CM is the
                easiest and best way to buy a car in Canada is because of our
                outstanding Qualified Agents.
              </p>
              <p className="qualified__text secondary-text">
                Our team provides you with the best customer experience in the
                automotive industry. You work with a dedicated representative
                throughout the process. They are able to answer any questions
                you have about any of our vehicles or the financing. Are you
                interested in seeing pictures or videos of a car? Your qualified
                agent will send them to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="reviewsAbout">
        <Reviews />
      </div>

      <section className="AboutTeam page-row">
        <div className="AboutTeam__wrapper page-row__wrapper">
          <div className="page-row__container AboutTeam__container">
            <h2 className="AboutTeam__title section-title">
              We're dynamic team of creative people with innovative mind
            </h2>
            <div className="AboutTeam__text-wrapper page-row__text-wrapper">
              <h3 className="AboutTeam__caption title">Our History</h3>
              <p className="AboutTeam__text secondary-text">
                We founded CM because we hated how complicated it was to buy a
                car. You only have so much free time in your life. You don’t
                want to waste it going to different car dealerships every
                weekend for weeks and months trying to track down the right car.
              </p>
            </div>

            <div className="AboutTeam__text-wrapper page-row__text-wrapper">
              <h3 className="AboutTeam__caption title">Our Goal</h3>
              <p className="AboutTeam__text secondary-text">
                Buying a car has never been easier. You pick out the car you
                want on our website. You work with one of our Qualified Agents
                to secure financing. Then we bring the car to you—all before you
                sign anything. You test drive the vehicle, and if you like it,
                you sign the loan documents right there and the car is yours.
              </p>
            </div>
          </div>

          <div className="AboutTeam__image-container" aria-hidden="true">
            <PictureComponent
              src={teamImage}
              alt="team image"
              width="600"
              height="540"
              className="AboutTeam__img"
            />
          </div>
        </div>
      </section>

      <section className="AboutFeatures page-row">
        <div className="AboutFeatures__wrapper page-row__wrapper">
          <div className="AboutFeatures__image-container" aria-hidden="true">
            <PictureComponent
              src={teamFeatures}
              alt="team features image"
              width="540"
              height="494"
              className="AboutFeatures__img"
            />
          </div>

          <div className="page-row__container AboutFeatures__container">
            <h2 className="AboutFeatures__title section-title">
              Main features
            </h2>

            <div className="AboutFeatures__text-wrapper page-row__text-wrapper">
              <p className="AboutFeatures__text secondary-text">
                We are your one stop shop. We believe that vehicle shopping
                should be a fun and painless process and with years of
                experience, we make it just that.
              </p>
            </div>

            <div className="AboutFeatures__statistic">
              <InfoList ariaLabel="our statistic">
                <InfoItem title="7,988+" text="Sold Cars" />
                <InfoItem title="123" text="Working Experts" />
                <InfoItem title="1560+" text="Happy Clients" />
              </InfoList>
            </div>
          </div>
        </div>
      </section>

      <div className="aboutCalculator">
        <Calculator />
      </div>
      <Footer />
    </>
  );
}
