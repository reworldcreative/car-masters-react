import React from "react";
import "./detailsTag.scss";

import closeIcon from "@/img/icons/close_icon.svg";

export default function DetailsTag({ name, removeTag }) {
  const handleRemoveTag = () => {
    removeTag(name);
  };
  return (
    <div className="detailsTag" aria-label={"selected tag " + name}>
      <button
        className="detailsTag__remove"
        aria-label={"remove tag" + name}
        onClick={handleRemoveTag}
      >
        <img
          src={closeIcon}
          alt="remove tag"
          width="9"
          height="9"
          className="detailsTag__remove_icon"
          aria-hidden="true"
        />
      </button>

      <p className="detailsTag__text secondary-text" aria-hidden="true">
        {name}
      </p>
    </div>
  );
}
