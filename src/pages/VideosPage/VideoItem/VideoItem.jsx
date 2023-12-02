import React from "react";
import "./videoItem.scss";
import PictureComponent from "@/../plugins/PictureComponent";
import PlayButton from "@/components/PlayButton/PlayButton";

import watermark from "@/img/watermark.svg";
import download from "@/img/icons/download-arrow.svg";

export default function VideoItem({
  buttonClick,
  image,
  title,
  imgDescription,
  link,
}) {
  return (
    <article
      className="videos__item"
      data-link={link}
      aria-label="card for video"
    >
      <p className="visibility-hidden">card for video</p>
      <div className="videos__img">
        <div className="watermark" aria-hidden="true">
          <img src={watermark} alt="watermark CM" width="30" height="30" />
          <p className="caption watermark__caption">CM</p>
        </div>
        <PictureComponent
          src={image}
          alt={"Image placeholder for video, named-" + title + imgDescription}
          className="videos__picture"
          width="580"
          height="326"
        />

        <PlayButton click={buttonClick} />
        {/* <a download href="" className="download-button" aria-hidden="true">
          <img src={download} alt="dovnload icon" width="15" height="20" />
        </a> */}
        <button
          className="download-button"
          aria-hidden="true"
          aria-label="download video"
        >
          <img src={download} alt="download icon" width="15" height="20" />
        </button>
      </div>
      <p className="videos__title caption" aria-hidden="true">
        {title}
      </p>
    </article>
  );
}
