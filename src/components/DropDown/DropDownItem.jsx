import React from "react";
import "./dropDown.scss";
import ReactMarkdown from "react-markdown";

import downArrow from "@/img/icons/arrow-down.svg";

export default function DropDownItem({ title, text }) {
  return (
    <details className="drop-down__item">
      <summary className="drop-down__title" aria-label="enter to get details">
        <span className="title">{title}</span>
        <div className="drop-down__icon">
          <img
            // className="drop-down__icon"
            src={downArrow}
            alt="open details"
            // width="16"
            // height="8"
            width="18"
            height="9"
            role="button"
            aria-hidden="true"
          />
        </div>
      </summary>
      {/* <p className="secondary-text drop-down__text">{text}</p> */}
      <ReactMarkdown className="secondary-text drop-down__text">
        {text}
      </ReactMarkdown>
    </details>
  );
}
