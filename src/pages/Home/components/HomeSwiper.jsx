import React, { useRef } from "react";
// import "./home.scss"

import PictureComponent from "@/../plugins/PictureComponent";

import suvCar from "@/img/cars/Nissan_SUV.png";
import carCar from "@/img/cars/Ford_CAR.png";
import truckCar from "@/img/cars/Ram_TRUCK.png";
import vanCar from "@/img/cars/Dodge_VAN.png";

import nextArrow from "@/img/icons/next_arrow.svg";

export default function HomeSwiper({ handleSlideChange }) {
  const swiperRef = useRef(null);

  const getActiveSlideNumber = () => {
    if (swiperRef.current) {
      return swiperRef.current.swiper.activeIndex + 1;
    }
    return 0;
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.on("slideChange", () => {
        handleSlideChange(getActiveSlideNumber());
      });
    }
  }, [handleSlideChange]);

  return (
    <div className="home-hero__slider-container">
      {/* <div className="home-hero__slider-buttons"> */}
      <p className="visibility-hidden">slider of our popular models</p>
      <button className="home-hero__slider-prev" aria-label="previous slide">
        <img
          src={nextArrow}
          alt="previous arrow"
          width="11"
          height="22"
          aria-hidden="true"
          className="home-hero__slider-icon"
        />
      </button>
      <button className="home-hero__slider-next" aria-label="next slide">
        <img
          src={nextArrow}
          alt="next arrow"
          width="11"
          height="22"
          aria-hidden="true"
          className="home-hero__slider-icon"
        />
      </button>
      {/* </div> */}

      <swiper-container
        slides-per-view="1"
        // lazy="true"
        // space-between="150"
        space-between="10"
        navigation-prev-el=".home-hero__slider-prev"
        navigation-next-el=".home-hero__slider-next"
        class="home-hero__slider"
        ref={swiperRef}
        a11y="true"
        keyboard="true"
        mousewheel="true"
        mousewheel-threshold-delta="70"
        mousewheel-force-to-axis="true"
      >
        <swiper-slide>
          <PictureComponent
            src={suvCar}
            alt="Nissan Kicks, a stylish and versatile vehicle designed to elevate your driving experience."
            width="494"
            height="240"
            className="home-hero__slider-img"
          />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent
            src={carCar}
            alt="The Ford Fusion, this sedan provides a smooth and comfortable ride for both driver and passengers. "
            width="490"
            height="202"
            className="home-hero__slider-img"
          />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent
            src={truckCar}
            alt="Ram 3500 is a powerful and reliable pickup truck that comes in a sleek white color."
            width="490"
            height="230"
            className="home-hero__slider-img"
          />
        </swiper-slide>
        <swiper-slide>
          <PictureComponent
            src={vanCar}
            alt="The Dodge Grand Caravan is a versatile and compact van that offers both style and functionality."
            width="490"
            height="222"
            className="home-hero__slider-img"
          />
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
