import React from "react";
import "./interesting.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import { Link } from "react-router-dom";

export default function InterestingItem({
  image,
  imageMedium,
  imageDescription,
  data,
  title,
  id,
}) {
  return (
    <article className="interesting__item" id={id} tabIndex="0">
      <Link
        to={`/article/${id}`}
        aria-label="One article preview, go to view the full article"
      >
        {/* <p className="visibility-hidden">One article preview</p> */}
        <div className="interesting__img-wrapper" style={{ height: "230px" }}>
          <PictureComponent
            src={image}
            mediumSrc={imageMedium}
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
      </Link>
    </article>
  );
}
