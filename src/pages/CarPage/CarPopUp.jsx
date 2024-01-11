import React from "react";
import "./carPage.scss";

import share from "@/img/icons/Share.svg";
import shareDown from "@/img/icons/ShareDown.svg";
import zoomUp from "@/img/icons/zoomUp.svg";
import zoomDown from "@/img/icons/zoomDown.svg";
import closeIcon from "@/img/icons/close_icon.svg";

export default function CarPopUp({
  activeSlideImage,
  activeSlideImageAlt,
  toggleImagePopUp,
}) {
  // переміщення pop-up зображення
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mousePressOffset, setMousePressOffset] = useState({ x: 0, y: 0 });

  const [scaleIconBg, setScaleImageBg] = useState(0);
  const [shareIconBg, setShareImageBg] = useState(0);

  const closePopUp = () => {
    toggleImagePopUp();
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
  return (
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
              onClick={closePopUp}
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
        <button
          className="carPage__popUpImage-closeButton"
          aria-label="close image"
          onClick={closePopUp}
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
        </button>
      </div>

      <div className="carPage__popUpImage-bg" onClick={closePopUp} />
    </div>
  );
}
