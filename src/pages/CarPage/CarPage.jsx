import React, { Suspense, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./carPage.scss";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

import cars from "@/data/cars.json";
import log from "@/img/logo/logo.svg";
import nextArrow from "@/img/icons/next_arrow.svg";
import share from "@/img/icons/Share.svg";
import shareDown from "@/img/icons/ShareDown.svg";
import zoomUp from "@/img/icons/zoomUp.svg";
import zoomDown from "@/img/icons/zoomDown.svg";
import closeIcon from "@/img/icons/close_icon.svg";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Calculator from "@/components/Calculator/Calculator";
import PictureComponent from "@/../plugins/PictureComponent";
import Button from "@/components/Button/Button";
import { MeshStandardMaterial } from "three";

import threeModel from "@/img/porsche-panamera-gts/Porsche_Panamera_GTS.fbx";
import Porsche_2 from "@/img/porsche-panamera-gts/Porsche_2.fbx";
import mustangModel from "@/img/Mustang/Mustang.obj";
import { Link } from "react-router-dom";
import CarPopUp from "./CarPopUp";

export default function CarPage() {
  const [currentCar, setCurrentCar] = useState({ ...cars[0] });
  const [isExterior, setIsExterior] = useState(true);
  const [isInterior, setIsInterior] = useState(false);

  const { id } = useParams();

  const swiperMainRef = useRef(null);
  const swiperListRef = useRef(null);

  const [swiperMainKey, setSwiperMainKey] = useState(0);
  const [swiperListKey, setSwiperListKey] = useState(0);

  // const swapPicturesType = () => {
  //   setIsExterior(!isExterior);
  //   setIsInterior(!isInterior);

  //   setSwiperMainKey((prevKey) => prevKey + 1);
  //   setSwiperListKey((prevKey) => prevKey + 1);
  // };

  const HandleSetInterior = () => {
    setIsInterior(true);
    setIsExterior(false);

    // swiperMainKey ? setSwiperMainKey((prevKey) => prevKey + 1) : false;
    // swiperListKey ? setSwiperListKey((prevKey) => prevKey + 1) : false;

    if (!isInterior) {
      setSwiperMainKey((prevKey) => prevKey + 1);
      setSwiperListKey((prevKey) => prevKey + 1);
    }
  };

  const HandleSetExterior = () => {
    setIsExterior(true);
    setIsInterior(false);

    // swiperMainKey ? setSwiperMainKey((prevKey) => prevKey + 1) : false;
    // swiperListKey ? setSwiperListKey((prevKey) => prevKey + 1) : false;
    if (!isExterior) {
      setSwiperMainKey((prevKey) => prevKey + 1);
      setSwiperListKey((prevKey) => prevKey + 1);
    }
  };

  useEffect(() => {
    document.querySelector(".header__buttons .RequestCar").textContent =
      "apply for this vehicle";
  }, []);

  useEffect(() => {
    const updateCurrentCar = () => {
      setSwiperMainKey((prevKey) => prevKey + 1);
      setSwiperListKey((prevKey) => prevKey + 1);
      const newCar = cars.find((el) => el.id === +id);
      setCurrentCar(newCar);
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.activeElement.blur();
    };

    updateCurrentCar();

    window.addEventListener("popstate", updateCurrentCar);
    document.title = `CarMasters - ${currentCar.name}`;

    return () => {
      window.removeEventListener("popstate", updateCurrentCar);
    };
  }, [id]);

  const [activeSlideImage, setActiveSlideImage] = useState();
  const [activeSlideImageAlt, setActiveSlideImageAlt] = useState("");
  const [imagePopUp, setImagePopUp] = useState(false);

  const toggleImagePopUp = () => {
    window.scrollTo({ top: 0, left: 0 });
    setImagePopUp(!imagePopUp);
  };

  const scaleImage = () => {
    const currentSlideIndex =
      swiperMainRef.current && swiperMainRef.current.swiper
        ? swiperMainRef.current.swiper.activeIndex
        : null;

    // Отримання активного слайда
    const activeSlide =
      swiperMainRef.current && swiperMainRef.current.swiper
        ? swiperMainRef.current.swiper.slides[currentSlideIndex]
        : null;

    // Отримання зображення всередині активного слайда
    const activeSlideImage = activeSlide
      ? activeSlide.querySelector("img")
      : null;
    setActiveSlideImage(activeSlideImage.src);
    setActiveSlideImageAlt(activeSlideImage.alt);
    toggleImagePopUp();
    // console.log("Зображення активного слайда:", activeSlideImage.alt);
  };

  useEffect(() => {
    if (imagePopUp) {
      document.body.classList.add("no-scroll");
      // const container = document.querySelector(".carPage__popUpImage-wrapper");
      // const containerRect = container
      //   ? container.getBoundingClientRect()
      //   : false;
      // setScaleImageBg(
      //   mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47)
      // );
      // setShareImageBg(
      //   mostPixelsColor(containerRect.right - 42, containerRect.bottom - 47)
      // );
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [imagePopUp]);

  // const fbx = useLoader(FBXLoader, '@/img/porsche-panamera-gts/Porsche_Panamera_GTS.fbx')
  // const fbx = useFBX("./models/Porsche_Panamera_GTS.fbx");
  // const fbx = useLoader(OBJLoader, "./models/Mustang.obj");
  // const fbx = useFBX("./models/Porsche_2.fbx");
  return (
    <>
      {imagePopUp ? (
        <CarPopUp
          activeSlideImage={activeSlideImage}
          activeSlideImageAlt={activeSlideImageAlt}
          toggleImagePopUp={toggleImagePopUp}
        />
      ) : (
        false
      )}

      <div className="carPage__header">
        <Header />
      </div>

      {/* <Suspense fallback={null}>
        <Canvas
          perspectiveCamera={{ position: [0, 0, 0], fov: 70 }}
          gl={{ preserveDrawingBuffer: true }}
          shadows
        >
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <hemisphereLight intensity={0.15} groundColor={"black"} />
          <pointLight intensity={1} />
          <mesh scale={[1, 1, 1]} position={[0, 0, 5]}
            // rotation={[-90, 0, 0]}
          > */}
      {/* <hemisphereLight intensity={0.15} groundColor={"black"} />
          <pointLight intensity={1} /> */}
      {/* <boxGeometry />
            <meshStandardMaterial color="blue" /> */}
      {/* <primitive object={fbx} />
          </mesh>
        </Canvas>
      </Suspense> */}
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
                      onClick={HandleSetExterior}
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
                      onClick={HandleSetInterior}
                      aria-label={
                        "show interior pictures. " +
                        (isInterior ? "active" : "")
                      }
                    >
                      <span aria-hidden="true">Interior</span>
                    </button>
                  </div>
                  <button
                    className="share"
                    aria-label="share cars"
                    onClick={scaleImage}
                  >
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
                    // centered-slides="true"
                    class="swiperMain"
                    a11y="true"
                    keyboard="true"
                    mousewheel="true"
                    mousewheel-threshold-delta="70"
                    mousewheel-force-to-axis="true"
                    navigation-prev-el=".carPage__slider-prev"
                    navigation-next-el=".carPage__slider-next"
                    // loop="true"
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
                        <swiper-slide key={carImg.id} onClick={scaleImage}>
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
                    observer="true"
                    observe-parents="true"
                    observe-slide-children="true"
                    a11y="true"
                    keyboard="true"
                    mousewheel="true"
                    mousewheel-threshold-delta="70"
                    mousewheel-force-to-axis="true"
                    // loop="true"
                    // free-mode="true"
                    watch-slides-progress="true"
                    // navigation-prev-el=".carPage__slider-prev"
                    // navigation-next-el=".carPage__slider-next"
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
              <Link to={"/quiz"} className="button accent carPage__ApplyButton">
                apply for this vehicle
              </Link>
              {/* <Button addclass="accent carPage__ApplyButton">
                apply for this vehicle
              </Button> */}
            </div>

            <div className="carPage__content">
              <div className="carPage__info-wrapper">
                <div className="carPage__info">
                  <div className="carPage__infoItem">
                    <h2 className="carPage__infoItem_title secondary-text">
                      Price
                    </h2>
                    <p className="carPage__price caption">
                      <span className="visibility-hidden">
                        {parseInt(currentCar.price.replace(/\s/g, ""), 10)}$
                      </span>
                      <span aria-hidden="true">
                        {parseInt(
                          currentCar.price.replace(/\s/g, ""),
                          10
                        ).toLocaleString()}{" "}
                        $
                      </span>
                    </p>
                    {/* <p className="visibility-hidden">
                      {parseInt(currentCar.price.replace(/\s/g, ""), 10)}$
                    </p> */}
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
                    <p className="caption">
                      <span className="visibility-hidden">
                        {parseInt(currentCar.mileage.replace(/\s/g, ""), 10)}
                      </span>
                      <span aria-hidden="true">
                        {parseInt(
                          currentCar.mileage.replace(/\s/g, ""),
                          10
                        ).toLocaleString()}
                      </span>
                    </p>
                    {/* <p className="visibility-hidden">
                      {parseInt(currentCar.mileage.replace(/\s/g, ""), 10)}
                    </p> */}
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
                    {currentCar.detail.slice(0, 8).map((carDetail, index) => (
                      <p className="carPage__detailsItem title" key={index}>
                        {carDetail}
                      </p>
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
                <Link
                  className="carPage__RequestCarButton accent button"
                  to={"/quiz"}
                  aria-label="Move to quiz page"
                >
                  Request more information
                </Link>
                {/* <Button addclass="accent carPage__RequestCarButton">
                  Request more information
                </Button> */}
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
