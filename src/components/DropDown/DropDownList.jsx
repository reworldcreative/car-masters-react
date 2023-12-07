import React from "react";
import "./dropDown.scss";
import DropDownItem from "./DropDownItem";

export default function DropDownList({ data }) {
  return (
    <div className="drop-down__list">
      {data.length ? (
        data.map((dataItem) => (
          <DropDownItem
            key={dataItem.id}
            title={dataItem.title}
            text={dataItem.text}
          />
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
