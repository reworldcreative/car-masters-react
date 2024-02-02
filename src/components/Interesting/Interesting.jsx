import React, { useEffect, useRef, useState } from "react";
import "./interesting.scss";
import Button from "../Button/Button";

import interesting_1 from "@/img/interesting/interesting_1.jpg";
import interesting_1_2 from "@/img/interesting/interesting_1-2.jpg";
import interesting_2 from "@/img/interesting/interesting_2.jpg";
import interesting_2_2 from "@/img/interesting/interesting_2-2.jpg";
import interesting_3 from "@/img/interesting/interesting_3.jpg";
import interesting_4 from "@/img/interesting/interesting_4.jpg";
import interesting_5 from "@/img/interesting/interesting_5.jpg";
import interesting_6 from "@/img/interesting/interesting_6.jpg";
import interesting_7 from "@/img/interesting/interesting_7.jpg";
import interesting_8 from "@/img/interesting/interesting_8.jpg";
import interesting_9 from "@/img/interesting/interesting_9.jpg";
import InterestingItem from "./InterestingItem";

import nextArrow from "@/img/icons/next_arrow.svg";
import { Link } from "react-router-dom";

// import articles from "@/data/articles.json";

export default function Interesting({ sliderNavigation, caption, articles }) {
  const swiperInterestingRef = useRef(null);
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // var liveRegionInteresting = document.getElementById(
  //   "live-region-InterestingPage"
  // );

  const liveRegionInteresting = useRef(null);
  function announceSlideChange() {
    if (liveRegionInteresting.current) {
      liveRegionInteresting.current.setAttribute("aria-hidden", "false");
      setTimeout(() => {
        liveRegionInteresting.current.textContent =
          "slides have been changed. current: " +
          (swiperInterestingRef.current.swiper.activeIndex + 1);
      }, 100);
    }
  }

  useEffect(() => {
    liveRegionInteresting.current.setAttribute("aria-hidden", "true");
    document
      .querySelectorAll(".interesting__slider-prev, .interesting__slider-next")
      .forEach(function (button) {
        button.removeAttribute("aria-controls");
      });
  }, []);
  return (
    <section className="interesting">
      <div className="interesting__wrapper">
        <div className="interesting__head">
          <h2 className="section-title">{caption}</h2>
          {!isMobileScreen ? (
            <>
              {/* <Button addclass="interesting__button">all articles</Button> */}
              <Link to={"/blog/1"} className="interesting__button button">
                all articles
              </Link>
            </>
          ) : (
            <></>
          )}
        </div>

        <div className="interesting__container" id="interesting__container">
          <p className="visibility-hidden">list of interesting articles</p>
          <div
            className="visibility-hidden"
            id="live-region-InterestingPage"
            aria-live="polite"
            aria-atomic="true"
            aria-hidden="true"
            ref={liveRegionInteresting}
          >
            slides have been changed. current:
          </div>

          {sliderNavigation === true ? (
            <>
              <button
                className="interesting__slider-prev"
                aria-label="previous slide"
                onClick={announceSlideChange}
                aria-controls={["interesting__container"]}
              >
                <img
                  src={nextArrow}
                  alt="previous arrow"
                  width="11"
                  height="22"
                  aria-hidden="true"
                  className="interesting__slider-icon"
                />
              </button>
              <button
                className="interesting__slider-next"
                aria-label="next slide"
                onClick={announceSlideChange}
                aria-controls={["interesting__container"]}
              >
                <img
                  src={nextArrow}
                  alt="next arrow"
                  width="11"
                  height="22"
                  aria-hidden="true"
                  className="interesting__slider-icon"
                />
              </button>
            </>
          ) : (
            <></>
          )}
          <swiper-container
            slides-per-view="1"
            space-between="10"
            // navigation="true"
            navigation-prev-el=".interesting__slider-prev"
            navigation-next-el=".interesting__slider-next"
            class="interesting__slider"
            ref={swiperInterestingRef}
            a11y="true"
            keyboard="true"
            mousewheel="true"
            mousewheel-threshold-delta="70"
            mousewheel-force-to-axis="true"
            breakpoints={JSON.stringify({
              1700: { slidesPerView: "3", spaceBetween: "70" },
              1100: { slidesPerView: "3", spaceBetween: "20" },
              500: { slidesPerView: "2", spaceBetween: "20" },
              100: { slidesPerView: "1", spaceBetween: "10" },
            })}
          >
            {articles.length ? (
              articles.slice(0, 6).map((article) => (
                <swiper-slide key={article.id}>
                  <InterestingItem
                    image={article.image}
                    imageMedium={
                      article.imageMedium ? article.imageMedium : false
                    }
                    imageDescription={article.imageDescription}
                    data={article.data}
                    title={article.title}
                    id={article.id}
                  />
                </swiper-slide>
              ))
            ) : (
              <></>
            )}
          </swiper-container>
        </div>
        {isMobileScreen ? (
          <>
            {/* <Button addclass="interesting__button">all articles</Button> */}
            <div
              style={{ position: "relative" }}
              className="interesting__button-wrapper"
            >
              <Link to={"/blog"} className="interesting__button button">
                all articles
              </Link>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
}
