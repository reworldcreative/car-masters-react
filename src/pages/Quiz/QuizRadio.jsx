import React, { useEffect } from "react";
import "./quiz.scss";

export default function QuizRadio({ text, getValue, selected }) {
  // const [selectedOption, setSelectedOption] = useState(selected);

  const handleRadioChange = (event) => {
    // setSelectedOption(event.target.value);
    getValue(event.target.value);
    // console.log("Вибрана опція:", event.target.value, "selected", selected);
  };

  // useEffect(() => {
  //   setSelectedOption(selected);
  // }, [text]);

  return (
    <div className="quiz__radio-wrapper">
      <input
        className="quiz__radio"
        type="radio"
        id={text}
        value={text}
        name="quizRadioGroup"
        checked={selected === text}
        onChange={handleRadioChange}
      />

      <label
        role="button"
        className="quiz__radio-label secondary-text"
        htmlFor={text}
        aria-label=" "
      >
        {text}
        <span className="visibility-hidden">
          {". "}
          {selected === text ? "selected" : "unselected"}
        </span>
      </label>
    </div>
  );
}
