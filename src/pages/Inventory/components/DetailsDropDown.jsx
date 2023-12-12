import React from "react";
import "./detailsDropDown.scss";

import downArrow from "@/img/icons/arrow-down.svg";
import DetailsTag from "./DetailsTag";
import DetailsSearch from "./DetailsSearch";

export default function DetailsDropDown({ children, title, tags, removeTag }) {
  return (
    <details className="detailsDropDown__item">
      <summary
        className="detailsDropDown__top"
        aria-label="enter to get details"
      >
        <div className="detailsDropDown__title-wrapper">
          <span className="detailsDropDown__title secondary-text">{title}</span>
          <div className="detailsDropDown__icon">
            <img
              className="detailsDropDown__icon"
              src={downArrow}
              alt="open details"
              width="16"
              height="8"
              role="button"
              aria-hidden="true"
            />
          </div>
        </div>

        {tags && tags.length > 0 ? (
          <div className="detailsDropDown__tags">
            {tags.map((type, index) => (
              <DetailsTag name={type} key={index} removeTag={removeTag} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </summary>
      <div className="secondary-text detailsDropDown__content">{children}</div>
    </details>
  );
}
