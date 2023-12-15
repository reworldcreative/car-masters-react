import React, { useState } from "react";
import "./inventorySelect.scss";

import arrowDown from "@/img/icons/arrow-down.svg";

export default function InventorySelect({ defaultValue, getValue }) {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedItem, setSelectItem] = useState(defaultValue);

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setOpenSelect(openSelect);
    }
  };

  const SelectItem = (e) => {
    setSelectItem(e.currentTarget.getAttribute("data-value"));
    getValue(e.currentTarget.getAttribute("data-value"));
  };

  return (
    <div className="inventory-content__select-wrapper">
      <button
        className={
          "inventory-content__select secondary-text" +
          (openSelect ? " open" : "")
        }
        aria-label={openSelect ? "expanded" : "collapsed. enter to get detail"}
        onClick={toggleSelect}
        onKeyDown={handleKeyDown}
        onBlur={() => {
          setTimeout(() => {
            setOpenSelect(false);
          }, 100);
        }}
      >
        <p className="secondary-text">
          <span className="visibility-hidden">current selected item -</span>
          {selectedItem}
        </p>
        <img
          className="inventory-content__arrowIcon"
          src={arrowDown}
          alt="open details"
          width="16"
          height="8"
          role="button"
          aria-hidden="true"
        />
      </button>

      <ul role="optgroup" className="inventory-content__select-list">
        <li
          role="option"
          className="secondary-text inventory-content__select-item"
          data-value="Recommendations"
          onClick={SelectItem}
        >
          Recommendations
        </li>
        <li
          role="option"
          className="secondary-text inventory-content__select-item"
          data-value="Price"
          onClick={SelectItem}
        >
          Price
        </li>
        <li
          role="option"
          className="secondary-text inventory-content__select-item"
          data-value="Year"
          onClick={SelectItem}
        >
          Year
        </li>
        <li
          role="option"
          className="secondary-text inventory-content__select-item"
          data-value="Mileage"
          onClick={SelectItem}
        >
          Mileage
        </li>
      </ul>
    </div>
  );
}
