import React, { useRef } from "react";
import "./reviews.scss";

import PictureComponent from "@/../plugins/PictureComponent";
import nextArrow from "@/img/icons/next_arrow.svg";

import reviewPhoto1 from "@/img/reviews/review_1.jpg";
import reviewPhoto2 from "@/img/reviews/review_2.jpg";
import reviewPhoto2Small from "@/img/reviews/review_2_small.jpg";
import reviewPhoto3 from "@/img/reviews/review_3.jpg";
import reviewPhoto3Small from "@/img/reviews/review_3_small.jpg";
import reviewPhoto4 from "@/img/reviews/review_4.jpg";
import reviewPhoto4Small from "@/img/reviews/review_4_small.jpg";

import reviewsData from "@/data/reviews.json";

export default function Reviews() {
  const swiperInfoRef = useRef(null);
  return (
    <section className="reviews">
      <div className="reviews__wrapper">
        <h2 className="section-title">What our client say about us!</h2>

        <div
          className="reviews__container"
          aria-label="slider of users reviews"
        >
          <p className="visibility-hidden">slider of users reviews</p>
          <button className="reviews__slider-prev" aria-label="previous slide">
            <img
              src={nextArrow}
              alt="previous arrow"
              width="11"
              height="22"
              aria-hidden="true"
              className="reviews__slider-icon"
            />
          </button>
          <button className="reviews__slider-next" aria-label="next slide">
            <img
              src={nextArrow}
              alt="next arrow"
              width="11"
              height="22"
              aria-hidden="true"
              className="reviews__slider-icon"
            />
          </button>
          <swiper-container
            slides-per-view="1"
            space-between="10"
            navigation-prev-el=".reviews__slider-prev"
            navigation-next-el=".reviews__slider-next"
            class="reviews__slider"
            ref={swiperInfoRef}
            a11y="true"
            keyboard="true"
            mousewheel="true"
            mousewheel-threshold-delta="70"
            mousewheel-force-to-axis="true"
            initial-slide="0"
            // a11y-enabled="true"
            // a11y-slide-role="listItem"
            a11y-slide-label-message="null"
          >
            {reviewsData.length ? (
              reviewsData.slice(0, 10).map((review) => (
                <swiper-slide aria-label="user review" key={review.id}>
                  <div
                    className="reviews__slider-img-wrapper"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <PictureComponent
                      src={review.image}
                      smallSrc={review.imageSmall ? review.imageSmall : false}
                      alt={"User review image. " + review.imageDescription}
                      width="465"
                      height="324"
                      className="reviews__slider-img"
                    />
                  </div>
                  <div className="reviews__text-container">
                    <p className="reviews__name secondary-text">
                      <span className="visibility-hidden">User name - </span>
                      {review.userName}
                    </p>
                    <p className="reviews__text title">{review.text}</p>
                  </div>
                </swiper-slide>
              ))
            ) : (
              <>
                <p className=" title">empty list</p>
              </>
            )}
          </swiper-container>
        </div>
      </div>
    </section>
  );
}
