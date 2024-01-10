import React, { Suspense, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./carPage.scss";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useFBX } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

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
import { Link } from "react-router-dom";

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

  const [activeSlideImage, setActiveSlideImage] = useState();
  const [activeSlideImageAlt, setActiveSlideImageAlt] = useState("");
  const [imagePopUp, setImagePopUp] = useState(false);

  const [scaleIconBg, setScaleImageBg] = useState(0);
  const [shareIconBg, setShareImageBg] = useState(0);

  const toggleImagePopUp = () => {
    window.scrollTo({ top: 0, left: 0 });
    setImagePopUp(!imagePopUp);
    setScale(false);
    setPosition({ x: 0, y: 0 });
  };

  const [scale, setScale] = useState(false);
  const handleScaleChange = () => {
    const container = document.querySelector(".carPage__popUpImage-wrapper");
    const containerRect = container ? container.getBoundingClientRect() : false;
    setScale(!scale);
    setPosition({ x: 0, y: 0 });
    setScaleImageBg(
      mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47)
    );
    setShareImageBg(
      mostPixelsColor(containerRect.right - 42, containerRect.bottom - 47)
    );
  };

  useEffect(() => {
    if (imagePopUp) {
      document.body.classList.add("no-scroll");
      const container = document.querySelector(".carPage__popUpImage-wrapper");
      const containerRect = container
        ? container.getBoundingClientRect()
        : false;
      setScaleImageBg(
        mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47)
      );
      setShareImageBg(
        mostPixelsColor(containerRect.right - 42, containerRect.bottom - 47)
      );
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [imagePopUp]);

  // переміщення pop-up зображення
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePressOffset, setMousePressOffset] = useState({ x: 0, y: 0 });

  // Отримати розміри контейнера
  const container = document.querySelector(".carPage__popUpImage-wrapper");
  const containerRect = container ? container.getBoundingClientRect() : false;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.willReadFrequently = true;
  const imageElement = document.querySelector(".carPage__popUpImage-img");

  if (imageElement) {
    const imageRect = imageElement.getBoundingClientRect();

    const originalWidth = imageElement.naturalWidth;
    const originalHeight = imageElement.naturalHeight;

    const scale = Math.max(
      imageRect.width / originalWidth,
      imageRect.height / originalHeight
    );

    const offsetX = (imageRect.width - originalWidth * scale) / 2;
    const offsetY = (imageRect.height - originalHeight * scale) / 2;

    canvas.width = imageRect.width;
    canvas.height = imageRect.height;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
      imageElement,
      0,
      0,
      originalWidth,
      originalHeight,
      offsetX,
      offsetY,
      imageRect.width - offsetX * 2,
      imageRect.height - offsetY * 2
    );
  }

  const bgColor = (eventX, eventY) => {
    // колір пікселів
    const imageElement = document.querySelector(".carPage__popUpImage-img");
    if (imageElement) {
      const imageRect = imageElement.getBoundingClientRect();

      // const originalWidth = imageElement.naturalWidth;
      // const originalHeight = imageElement.naturalHeight;

      // console.log(
      //   "Оригінальний розмір зображення:",
      //   originalWidth,
      //   "x",
      //   originalHeight
      // );

      // const scale = Math.max(
      //   imageRect.width / originalWidth,
      //   imageRect.height / originalHeight
      // );

      // const offsetX = (imageRect.width - originalWidth * scale) / 2;
      // const offsetY = (imageRect.height - originalHeight * scale) / 2;

      // Отримання розташування та розмірів відображення зображення на екрані
      const xImage = eventX - imageRect.left;
      const yImage = eventY - imageRect.top;

      // const xContainer = eventX - containerRect.left;
      // const yContainer = eventY - containerRect.top;

      // Встановлення розмірів canvas, відповідних розмірам зображення
      // canvas.width = imageRect.width;
      // canvas.height = imageRect.height;

      // Встановлення оригінального зображення на canvas
      // context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);
      // context.clearRect(0, 0, canvas.width, canvas.height);
      // context.drawImage(
      //   imageElement,
      //   0,
      //   0,
      //   originalWidth,
      //   originalHeight,
      //   offsetX,
      //   offsetY,
      //   imageRect.width - offsetX * 2,
      //   imageRect.height - offsetY * 2
      // );

      // Отримання даних пікселя
      const pixelData = context.getImageData(xImage, yImage, 1, 1).data;
      const red = pixelData[0];
      const green = pixelData[1];
      const blue = pixelData[2];
      const pixelColor = "RGB(" + red + ", " + green + ", " + blue + ")";

      // Розрахунок середнього значення компонент кольору
      const averageColor = (red + green + blue) / 3;

      // Визначення, чи є піксель темним чи світлим (в даному прикладі, якщо середнє значення менше 128 - темний)
      const isDarkPixel = averageColor < 128;

      // console.log(isDarkPixel ? "Піксель темний" : "Піксель світлий");

      // console.log(xImage, yImage, "--", xContainer, yContainer, pixelColor);
      return {
        pixelColor: `RGB(${red}, ${green}, ${blue})`,
        isDarkPixel: (red + green + blue) / 3 < 128,
      };
    }
    return null;
  };

  const mostPixelsColor = (pixelX, pixelY) => {
    let mostPixels = 0;

    for (let i = pixelX; i < pixelX + 22; i++) {
      for (let j = pixelY; j < pixelY + 22; j++) {
        const color = bgColor(i, j).isDarkPixel;
        color ? mostPixels-- : mostPixels++;
      }
    }
    // console.log(mostPixels);
    return mostPixels;
  };

  const handleMouseDown = (e) => {
    const imageRect = document.querySelector(".carPage__popUpImage-img")
      ? document
          .querySelector(".carPage__popUpImage-img")
          .getBoundingClientRect()
      : false;

    // Визначити позицію курсора відносно верхнього лівого кута об'єкта
    // const offsetX = e.clientX - containerRect.left - imageRect.left;
    // const offsetY = e.clientY - containerRect.top - imageRect.top;

    // Визначити поточну позицію об'єкта
    const offsetX = e.clientX - imageRect.left;
    const offsetY = e.clientY - imageRect.top;

    // console.log(
    //   e.clientX,
    //   offsetX,
    //   "------",
    //   e.clientY,
    //   offsetY,
    //   "----",
    //   imageRect,
    //   "----",
    //   containerRect
    // );

    setMousePressOffset({ x: offsetX, y: offsetY });

    setIsDragging(true);

    // bgColor(e.clientX, e.clientY);

    // Отримати розміри контейнера
    // const container = document.querySelector(".carPage__popUpImage-wrapper");
    // const containerRect = container ? container.getBoundingClientRect() : false;
    // console.log(containerRect, imageRect, "----------------------");
    // bgColor(containerRect.right  - 42, containerRect.bottom  - 47);

    // mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    // Визначити поточну позицію об'єкта
    const imageRect = document.querySelector(".carPage__popUpImage-img")
      ? document
          .querySelector(".carPage__popUpImage-img")
          .getBoundingClientRect()
      : false;

    // Визначити нову позицію відносно контейнера
    const newX =
      e.clientX -
      mousePressOffset.x -
      containerRect.left -
      (containerRect.width - imageRect.width) / 2;
    const newY =
      e.clientY -
      mousePressOffset.y -
      containerRect.top -
      (containerRect.height - imageRect.height) / 2;

    // Обмеження для руху всередині контейнера
    const maxX = -(containerRect.width - imageRect.width) / 2;
    const maxY = -(containerRect.height - imageRect.height) / 2;

    const minX = (containerRect.width - imageRect.width) / 2;
    const minY = (containerRect.height - imageRect.height) / 2;

    // Забезпечити, що нова позиція не виходить за межі контейнера
    const constrainedX = Math.min(Math.max(newX, minX), maxX);
    const constrainedY = Math.min(Math.max(newY, minY), maxY);

    // console.log({
    //   "New X ": newX,
    //   "New Y ": newY,
    //   "Max X ": maxX,
    //   "Max Y ": maxY,
    //   "Min X ": minX,
    //   "Min Y ": minY,
    //   "Container Rectangle": containerRect,
    //   "Image Rectangle": imageRect,
    //   "Final X ": constrainedX,
    //   "Final Y ": constrainedY,
    // });
    // setPosition({ x: newX, y: newY });

    setPosition({ x: constrainedX, y: constrainedY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47);

    setScaleImageBg(
      mostPixelsColor(containerRect.left + 20, containerRect.bottom - 47)
    );
    setShareImageBg(
      mostPixelsColor(containerRect.right - 42, containerRect.bottom - 47)
    );
  };

  // const fbx = useLoader(FBXLoader, '@/img/porsche-panamera-gts/Porsche_Panamera_GTS.fbx')
  // const fbx = useFBX("./models/Porsche_Panamera_GTS.fbx");
  return (
    <>
      {imagePopUp ? (
        <div className="carPage__popUpImage">
          <div className="carPage__popUpImage-container">
            <div className="carPage__popUpImage-wrapper">
              <img
                src={activeSlideImage}
                alt={activeSlideImageAlt}
                width="500"
                height="500"
                className="carPage__popUpImage-img"
                style={{
                  transform: scale ? "scale(1.5)" : "scale(1)",
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  position: "absolute",
                  cursor: scale ? (isDragging ? "grabbing" : "grab") : false,
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onDragStart={(e) => {
                  e.preventDefault();
                  return false;
                }}
              />
              <div className="carPage__popUpImage-bottom">
                <button
                  className="zoom"
                  aria-label="zoom cars image"
                  onClick={handleScaleChange}
                  style={{
                    filter:
                      scaleIconBg > 0
                        ? "drop-shadow(1px 1px 3px white)"
                        : "drop-shadow(1px 1px 1px black)",
                  }}
                >
                  <img
                    className="zoom__icon"
                    src={!scale ? zoomUp : zoomDown}
                    alt="zoom icon"
                    width="22"
                    height="22"
                    aria-hidden="true"
                    style={{
                      filter:
                        scaleIconBg > 0
                          ? "invert(100%) sepia(100%) saturate(2%) hue-rotate(137deg) brightness(106%) contrast(101%) drop-shadow(1px 1px 3px white)"
                          : "drop-shadow(1px 1px 1px black)",
                    }}
                  />
                </button>

                <button
                  className="share"
                  aria-label="share cars"
                  onClick={toggleImagePopUp}
                  style={{
                    filter:
                      shareIconBg > 0
                        ? "drop-shadow(1px 1px 3px white)"
                        : "drop-shadow(1px 1px 1px black)",
                  }}
                >
                  <img
                    className="share__icon"
                    src={shareDown}
                    alt="share icon"
                    width="22"
                    height="22"
                    aria-hidden="true"
                    style={{
                      filter:
                        shareIconBg > 0
                          ? "invert(0%) sepia(100%) saturate(2%) hue-rotate(137deg) brightness(0%) contrast(101%) drop-shadow(1px 1px 3px white)"
                          : "invert(100%) sepia(100%) saturate(2%) hue-rotate(137deg) brightness(106%) contrast(101%) drop-shadow(1px 1px 1px black)",
                    }}
                  />
                </button>
              </div>
            </div>
            {/* <button
              className="carPage__popUpImage-closeButton"
              aria-label="close image"
              onClick={toggleImagePopUp}
              tabIndex="0"
            >
              <img
                src={closeIcon}
                alt="close image icon"
                width="24"
                height="24"
                aria-hidden="true"
                loading="eager"
              />
            </button> */}
          </div>

          <div className="carPage__popUpImage-bg" onClick={toggleImagePopUp} />
        </div>
      ) : (
        false
      )}

      <div className="carPage__header">
        <Header />
      </div>

      {/* <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 70, 50], fov: 70 }}
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
          <mesh
            scale={[0.3, 0.3, 0.3]}
            position={[800, -100, -1000]}
          > */}
      {/* <hemisphereLight intensity={0.15} groundColor={"black"} />
          <pointLight intensity={1} /> */}
      {/* <boxGeometry />
            <meshStandardMaterial color="blue" /> */}
      {/* <primitive object={fbx} />
          </mesh>
        </Canvas>
      </Suspense>  */}
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
                    centered-slides="true"
                    class="swiperMain"
                    a11y="true"
                    keyboard="true"
                    mousewheel="true"
                    mousewheel-threshold-delta="70"
                    mousewheel-force-to-axis="true"
                    navigation-prev-el=".carPage__slider-prev"
                    navigation-next-el=".carPage__slider-next"
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
                    observer="true"
                    observe-parents="true"
                    observe-slide-children="true"
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
