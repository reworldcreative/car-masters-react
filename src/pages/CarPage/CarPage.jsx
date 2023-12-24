import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./carPage.scss";

import cars from "@/data/cars.json";
import log from "@/img/logo/logo.svg";
import nextArrow from "@/img/icons/next_arrow.svg";
import share from "@/img/icons/Share.svg";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Calculator from "@/components/Calculator/Calculator";
import PictureComponent from "@/../plugins/PictureComponent";
import Button from "@/components/Button/Button";

export default function CarPage() {
  const [currentCar, setCurrentCar] = useState({ ...cars[0] });
  const [isExterior, setIsExterior] = useState(true);
  const [isInterior, setIsInterior] = useState(false);

  const { id } = useParams();

  const swiperMainRef = useRef(null);
  const swiperListRef = useRef(null);

  const [swiperMainKey, setSwiperMainKey] = useState(0);
  const [swiperListKey, setSwiperListKey] = useState(0);

  const swapPicturesType = () => {
    setIsExterior(!isExterior);
    setIsInterior(!isInterior);

    setSwiperMainKey((prevKey) => prevKey + 1);
    setSwiperListKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    document.querySelector(".header__buttons .RequestCar").textContent =
      "apply for this vehicle";
  }, []);

  useEffect(() => {
    const updateCurrentCar = () => {
      const newCar = cars.find((el) => el.id === +id);
      setCurrentCar(newCar);
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.activeElement.blur();
    };

    updateCurrentCar();

    window.addEventListener("popstate", updateCurrentCar);

    return () => {
      window.removeEventListener("popstate", updateCurrentCar);
    };
  }, [id]);
  return (
    <>
      <div className="carPage__header">
        <Header />
      </div>
      <section className="carPage">
        <div className="carPage__wrapper">
          <div className="carPage__top">
            <h1 className="carPage__title section-title">{currentCar.name}</h1>
            <p className="carPage__viewers secondary-text">
              Watching now {currentCar.watching} people
            </p>
          </div>
          <div className="carPage__container">
            <div className="carPage__pictures">
              <div className="carPage__picturesMain">
                <div className="carPage__pictures-bottom">
                  <div className="carPage__pictures-buttons">
                    <button
                      className={
                        "carPage__pictures-type secondary-text " +
                        (isExterior ? "active" : "")
                      }
                      onClick={swapPicturesType}
                      aria-label={
                        "show exterior pictures. " +
                        (isExterior ? "active" : "")
                      }
                    >
                      <span aria-hidden="true">Exterior</span>
                    </button>
                    <button
                      className={
                        "carPage__pictures-type secondary-text " +
                        (isInterior ? "active" : "")
                      }
                      onClick={swapPicturesType}
                      aria-label={
                        "show interior pictures. " +
                        (isInterior ? "active" : "")
                      }
                    >
                      <span aria-hidden="true">Interior</span>
                    </button>
                  </div>
                  <button className="share" aria-label="share cars">
                    <img
                      className="share__icon"
                      src={share}
                      alt="share icon"
                      width="22"
                      height="22"
                      aria-hidden="true"
                    />
                  </button>
                </div>
                {currentCar.images.filter(
                  (carImg) =>
                    carImg.imageType === (isExterior ? "Exterior" : "Interior")
                ).length ? (
                  <swiper-container
                    ref={swiperMainRef}
                    key={swiperMainKey}
                    slides-per-view="1"
                    space-between="10"
                    class="swiperMain"
                    a11y="true"
                    keyboard="true"
                    mousewheel="true"
                    mousewheel-threshold-delta="70"
                    mousewheel-force-to-axis="true"
                    loop="true"
                    thumbs-swiper=".swiperList"
                    // zoom="true"
                  >
                    {currentCar.images
                      .filter(
                        (carImg) =>
                          carImg.imageType ===
                          (isExterior ? "Exterior" : "Interior")
                      )
                      .slice(0, 10)
                      .map((carImg) => (
                        <swiper-slide key={carImg.id}>
                          <PictureComponent
                            src={carImg.image}
                            alt={carImg.imageDescription}
                            width="420"
                            height="216"
                            className="carPage__img"
                          />
                        </swiper-slide>
                      ))}
                  </swiper-container>
                ) : (
                  <div className="carPage__img_empty">
                    <p className="visibility-hidden">No images</p>
                    <img
                      src={log}
                      alt="logo"
                      width="50"
                      height="50"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
              {currentCar.images.filter(
                (carImg) =>
                  carImg.imageType === (isExterior ? "Exterior" : "Interior")
              ).length ? (
                <div className="carPage__picturesList" aria-hidden="true">
                  <>
                    <button
                      className="carPage__slider-prev"
                      aria-label="previous slide"
                    >
                      <img
                        src={nextArrow}
                        alt="previous arrow"
                        width="11"
                        height="22"
                        aria-hidden="true"
                        className="carPage__slider-icon"
                      />
                    </button>
                    <button
                      className="carPage__slider-next"
                      aria-label="next slide"
                    >
                      <img
                        src={nextArrow}
                        alt="next arrow"
                        width="11"
                        height="22"
                        aria-hidden="true"
                        className="carPage__slider-icon"
                      />
                    </button>
                  </>
                  <swiper-container
                    ref={swiperListRef}
                    key={swiperListKey}
                    slides-per-view="auto"
                    space-between="10"
                    class="swiperList"
                    a11y="true"
                    keyboard="true"
                    mousewheel="true"
                    mousewheel-threshold-delta="70"
                    mousewheel-force-to-axis="true"
                    loop="true"
                    // free-mode="true"
                    watch-slides-progress="true"
                    navigation-prev-el=".carPage__slider-prev"
                    navigation-next-el=".carPage__slider-next"
                    breakpoints={JSON.stringify({
                      400: { spaceBetween: "10" },
                      10: { spaceBetween: "5" },
                    })}
                  >
                    {currentCar.images
                      .filter(
                        (carImg) =>
                          carImg.imageType ===
                          (isExterior ? "Exterior" : "Interior")
                      )
                      .slice(0, 10)
                      .map((carImg) => (
                        <swiper-slide key={carImg.id}>
                          <PictureComponent
                            src={carImg.image}
                            alt={carImg.imageDescription}
                            width="420"
                            height="216"
                            className="carPage__img"
                          />
                        </swiper-slide>
                      ))}
                  </swiper-container>
                </div>
              ) : (
                <></>
              )}
            </div>

            <div
              style={{ height: "35px", width: "fit-content" }}
              className="carPage__ApplyButton_wrapper"
            >
              <Button addclass="accent carPage__ApplyButton">
                apply for this vehicle
              </Button>
            </div>

            <div className="carPage__content">
              <div className="carPage__info-wrapper">
                <div className="carPage__info">
                  <div className="carPage__infoItem">
                    <h2 className="carPage__infoItem_title secondary-text">
                      Price
                    </h2>
                    <p className="carPage__price caption" aria-hidden="true">
                      {parseInt(
                        currentCar.price.replace(/\s/g, ""),
                        10
                      ).toLocaleString()}{" "}
                      $
                    </p>
                    <p className="visibility-hidden">
                      {parseInt(currentCar.price.replace(/\s/g, ""), 10)}$
                    </p>
                  </div>
                </div>
                <div className="carPage__info">
                  <div className="carPage__infoItem">
                    <p className="carPage__infoItem_title secondary-text">
                      Body
                    </p>
                    <p className="caption">{currentCar.bodyType}</p>
                  </div>
                  <div className="carPage__infoItem">
                    <p className="carPage__infoItem_title secondary-text">
                      Year
                    </p>
                    <p className="caption">{parseInt(currentCar.year, 10)}</p>
                  </div>
                </div>
                <div className="carPage__info">
                  <div className="carPage__infoItem">
                    <p className="carPage__infoItem_title secondary-text">
                      Transmission
                    </p>
                    <p className="caption">{currentCar.transmission}</p>
                  </div>
                  <div className="carPage__infoItem">
                    <p className="carPage__infoItem_title secondary-text">
                      Kilometers
                    </p>
                    <p className="caption" aria-hidden="true">
                      {parseInt(
                        currentCar.mileage.replace(/\s/g, ""),
                        10
                      ).toLocaleString()}
                    </p>
                    <p className="visibility-hidden">
                      {parseInt(currentCar.mileage.replace(/\s/g, ""), 10)}
                    </p>
                  </div>
                </div>
              </div>

              {currentCar.detail.length > 0 ? (
                <div className="carPage__info-wrapper carPage__details-wrapper">
                  <div className="carPage__info">
                    <h2 className="carPage__infoItem_title secondary-text">
                      Detail
                    </h2>
                  </div>

                  <div className="carPage__details">
                    {currentCar.detail.slice(0, 8).map((carDetail) => (
                      <p className="carPage__detailsItem title">{carDetail}</p>
                    ))}
                  </div>
                </div>
              ) : (
                <></>
              )}

              {currentCar.description !== "" ? (
                <div className="carPage__description-wrapper">
                  <h2 className="carPage__infoItem_title carPage__description_title secondary-text">
                    Description
                  </h2>

                  <p className="secondary-text carPage__description">
                    {currentCar.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        {index !==
                          currentCar.description.split("\n").length - 1 && (
                          <br />
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              ) : (
                <></>
              )}
              <div
                style={{ height: "45px", width: "fit-content" }}
                className="carPage__RequestCarButton_wrapper"
              >
                <Button addclass="accent carPage__RequestCarButton">
                  Request more information
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="carPage__Calculator">
        <Calculator />
      </div>
      <Footer />
    </>
  );
}
