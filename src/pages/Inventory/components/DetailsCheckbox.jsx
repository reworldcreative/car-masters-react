import React, { useEffect } from "react";
import "./detailsCheckbox.scss";
import checkMark from "@/img/icons/check-mark.svg";
import bodyType from "@/img/BodyTypes/Truck-icon.svg";

export default function DetailsCheckbox({
  icon,
  text,
  iconWidth,
  iconHeight,
  TypesChange,
  TypesRemove,
  checked,
}) {
  const [isChecked, setIsChecked] = useState(checked);
  const checkboxValue = text;

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      TypesChange(checkboxValue);
    } else {
      TypesRemove(checkboxValue);
    }
  };

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div className="detailsCheckbox">
      <input
        className="detailsCheckbox__input"
        type="checkbox"
        id={text}
        value={checkboxValue}
        onChange={handleCheckboxChange}
        aria-label={checkboxValue}
      />
      <label className="detailsCheckbox__label secondary-text" htmlFor={text}>
        {icon ? (
          <img
            src={icon}
            alt="body type icon"
            width={iconWidth}
            height={iconHeight}
            className="detailsCheckbox__icon"
            aria-hidden="true"
          />
        ) : (
          <></>
        )}
        <span aria-hidden="true">{text}</span>
      </label>
    </div>
  );
}
