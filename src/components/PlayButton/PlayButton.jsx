import React from "react";
import "./playButton.scss";

import playIcon from "@/img/icons/Play.svg";

export default function PlayButton({ click }) {
  return (
    <button className="playButton" aria-label="play video" onClick={click}>
      <img
        className="playButton__icon"
        src={playIcon}
        alt="pay button icon"
        aria-hidden="true"
        width="19"
        height="19"
      />
    </button>
  );
}
