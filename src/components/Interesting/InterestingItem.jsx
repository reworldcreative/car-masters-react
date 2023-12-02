import React from "react";
import "./interesting.scss";
import PictureComponent from "@/../plugins/PictureComponent";

export default function InterestingItem({
  image,
  imageDescription,
  data,
  title,
}) {
  return (
    <article className="interesting__item">
      <p className="visibility-hidden">One article</p>
      <div className="interesting__img-wrapper" style={{ height: "230px" }}>
        <PictureComponent
          src={image}
          alt={"Article image. " + imageDescription}
          width="387"
          height="230"
          className="interesting__img"
        />
      </div>

      <div className="interesting__content">
        <p className="interesting__data secondary-text">
          <span className="visibility-hidden">date of publication is </span>
          {data}
          {/* <time>{data}</time> */}
        </p>
        <p className="interesting__title title">
          <span className="visibility-hidden">article title - </span>
          {title}
        </p>
      </div>
    </article>
  );
}
