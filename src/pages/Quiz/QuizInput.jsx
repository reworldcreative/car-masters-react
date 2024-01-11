import React from "react";
import "./quiz.scss";

export default function QuizInput({
  placeholder,
  getValue,
  regular,
  value,
  maxLength,
}) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [placeholder]);

  const handleChange = (e) => {
    const onlyRegular =
      regular === "number"
        ? /^[0-9]*$/
        : "years"
        ? /^((1|)(19)?|((2|)(20)?))((^(19|20)\d)?)((^((19|20)\d)\d)?)$/
        : "text"
        ? /[^\d]/
        : regular;

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
      maxLength={maxLength}
    />
  );
}
