import React from "react";
import "./quiz.scss";

export default function QuizInput({ placeholder, getValue, regular }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setInputValue("");
  }, [placeholder]);

  const handleChange = (e) => {
    const onlyRegular = regular === "number" ? /^[0-9]*$/ : "";

    if (regular !== null && regular !== "") {
      if (onlyRegular.test(e.target.value)) {
        setInputValue(e.target.value);
        getValue(e.target.value);
      }
    } else {
      setInputValue(e.target.value);
      getValue(e.target.value);
    }
  };

  return (
    <input
      type="text"
      className="quiz__input secondary-text"
      placeholder={placeholder}
      value={inputValue}
      onChange={handleChange}
    />
  );
}
