import React, { useRef, useEffect } from "react";
import "./carCard.scss";

import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

import PictureComponent from "@/../plugins/PictureComponent";
// import carsData from "@/data/cars.json";

import car from "@/img/cars/Porsche/Porsche_1.jpg";
import car2 from "@/img/cars/Porsche/Porsche_2.jpg";
import car3 from "@/img/cars/Porsche/Porsche_3.jpg";
import car4 from "@/img/cars/Porsche/Porsche_4.jpg";
import car5 from "@/img/cars/Porsche/Porsche_5.jpg";
import car6 from "@/img/cars/Porsche/Porsche_6.jpg";
import car27 from "@/img/cars/Porsche/Porsche_7.jpg";
import car28 from "@/img/cars/Porsche/Porsche_8.jpg";
import car29 from "@/img/cars/Porsche/Porsche_9.jpg";
import car30 from "@/img/cars/Porsche/Porsche_10.jpg";
import car31 from "@/img/cars/Porsche/Porsche_11.jpg";
import car32 from "@/img/cars/Porsche/Porsche_12.jpg";

import car7 from "@/img/cars/Mitsubishi/Mitsubishi_1.jpg";
import car8 from "@/img/cars/Mitsubishi/Mitsubishi_2.jpg";
import car9 from "@/img/cars/Mitsubishi/Mitsubishi_3.jpg";

import car10 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_1.jpg";
import car11 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_2.jpg";
import car12 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_3.jpg";
import car13 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_4.jpg";
import car14 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_5.jpg";

import car15 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_6.jpg";
import car16 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_7.jpg";
import car17 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_8.jpg";

import car18 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_10.jpg";
import car19 from "@/img/cars/Mercedes-Benz/Mercedes-Benz_11.jpg";

import car20 from "@/img/cars/Audi/Audi_1.jpg";
import car21 from "@/img/cars/Audi/Audi_2.jpg";

import log from "@/img/logo/logo.svg";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { useFBX } from "@react-three/drei";

export default function CarCard({ carData }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      const paginationFill = swiperInstance.el.querySelector(
        ".swiper-pagination-progressbar-fill"
      );

      if (paginationFill) {
        paginationFill.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        paginationFill.style.borderRadius = "28px";
      }
    }
  });

  // const fbx = useLoader(FBXLoader, '@/img/porsche-panamera-gts/source/Porsche_Panamera_GTS/Poimandres.fbx')
  // const fbx = useFBX("./Porsche_Panamera_GTS/Poimandres.fbx");

  return (
    <article className="carCard" aria-label="car card">
      <p className="visibility-hidden ">car card</p>
      <div className="carCard__pictures">
        <p className="visibility-hidden ">car pictures</p>

        {/* <Canvas
          frameLoop="demand"
          camera={{ position: [0, 0, 5], fov: 30 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <OrbitControls enableZoom={false} />
          <mesh>
            <hemisphereLight intensity={0.15} groundColor={"black"} />
            <pointLight intensity={1} />
            <primitive object={fbx} />
          </mesh>
        </Canvas> */}
        <swiper-container
          ref={swiperRef}
          slides-per-view="1"
          space-between="10"
          class="carCard__slider"
          a11y="true"
          keyboard="true"
          mousewheel="true"
          mousewheel-threshold-delta="70"
          mousewheel-force-to-axis="true"
          pagination-type="progressbar"
          // scrollbar="true"
        >
          {carData.images.length ? (
            carData.images.slice(0, 10).map((carImg) => (
              <swiper-slide key={carImg.id}>
                <PictureComponent
                  src={carImg.image}
                  alt={carImg.imageDescription}
                  width="420"
                  height="216"
                  className="carCard__img"
                />
              </swiper-slide>
            ))
          ) : (
            <div className="carCard__img_empty">
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
        </swiper-container>
      </div>

      <div className="carCard__content">
        <div>
          <Link to={`/car/${carData.id}`} className="carCard__name title">
            {carData.name ? carData.name : "perfect car"}
          </Link>

          <p className="carCard__price title" aria-hidden="true">
            $ {carData.price ? carData.price.toLocaleString() : "000"}
          </p>
          <p className="visibility-hidden">
            {carData.price
              ? typeof carData.price === "string"
                ? parseInt(carData.price.replace(/\s/g, ""), 10) + "$"
                : carData.price + "$"
              : "000"}

            {/* {carData.price
              ? parseInt(carData.price.replace(/\s/g, ""), 10) + "$"
              : "000"} */}
            {/* {parseInt(carData.price.replace(/\s/g, ""), 10)}$ */}
          </p>
        </div>

        <div className="carCard__characteristics">
          <p className="visibility-hidden">car characteristics</p>
          <p className="carCard__characteristicItem secondary-text">
            {carData.year ? carData.year : "incorrect"} year
          </p>
          <p className="carCard__characteristicItem secondary-text">
            {carData.bodyType ? carData.bodyType : "body type"}
          </p>
          <p className="carCard__characteristicItem secondary-text">
            {carData.transmission ? carData.transmission : "transmission"}
            <span className="visibility-hidden">transmission</span>
          </p>
          <p
            className="carCard__characteristicItem secondary-text"
            aria-hidden="true"
          >
            {carData.mileage ? carData.mileage : "000"} km
          </p>
          <p className="visibility-hidden">
            {carData.mileage
              ? typeof carData.mileage === "string"
                ? parseInt(carData.mileage.replace(/\s/g, ""), 10)
                : carData.mileage
              : "000"}
            {/* {carData.mileage
              ? parseInt(carData.mileage.replace(/\s/g, ""), 10)
              : "000"} */}
            kilometers
          </p>
        </div>
      </div>
    </article>
  );
}
