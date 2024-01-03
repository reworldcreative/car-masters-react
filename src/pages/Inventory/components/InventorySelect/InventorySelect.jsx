import React, { useState, useEffect } from "react";
import "./inventorySelect.scss";
import arrowDown from "@/img/icons/arrow-down.svg";

function InventorySelect({ defaultValue, getValue }) {
  const [openSelect, setOpenSelect] = useState(false);
  const [selectedItem, setSelectItem] = useState(defaultValue);

  const toggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setOpenSelect(!openSelect);
    }
  };

  const SelectItem = (e) => {
    setSelectItem(e.currentTarget.getAttribute("data-value"));
    getValue(e.currentTarget.getAttribute("data-value"));
    setOpenSelect(false);
  };

  const handleClickOutside = (e) => {
    const selectWrapper = document.querySelector(
      ".inventory-content__select-wrapper"
    );

    if (selectWrapper && !selectWrapper.contains(e.target)) {
      setOpenSelect(false);
    }
  };

  useEffect(() => {
    if (!openSelect) {
      return;
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openSelect]);

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
      >
        <p className="secondary-text">
          <span className="visibility-hidden">current selected item -</span>
          {selectedItem}
        </p>
        <img
          className="inventory-content__arrowIcon"
          src={arrowDown}
          alt="open details"
          width="18"
          height="9"
          role="button"
          aria-hidden="true"
        />
      </button>

      {openSelect && (
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
            data-value="Newest inventory"
            onClick={SelectItem}
          >
            Newest inventory
          </li>
          <li
            role="option"
            className="secondary-text inventory-content__select-item"
            data-value="Lowest price"
            onClick={SelectItem}
          >
            Lowest price
          </li>
          <li
            role="option"
            className="secondary-text inventory-content__select-item"
            data-value="Highest prices"
            onClick={SelectItem}
          >
            Highest prices
          </li>
        </ul>
      )}
    </div>
  );
}

export default InventorySelect;
