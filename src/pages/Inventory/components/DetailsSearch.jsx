import React, { useState } from "react";
import "./detailsSearch.scss";
// import Autosuggest from "react-autosuggest";

import searchIcon from "@/img/icons/search_icon.svg";
// import suggestionsData from "@/data/car_brands.json";

export default function DetailsSearch({
  placeholder,
  suggestions,
  setData,
  id,
  inputValue,
}) {
  // const [value, setValue] = useState("");

  // const [suggestions, setSuggestions] = useState([]);

  // const getSuggestions = async (inputText) => {
  //   return ["Honda", "BMW", "Toyota", "Audi", "Porsche"].filter((suggestion) =>
  //     suggestion.toLowerCase().includes(inputText.toLowerCase())
  //   );
  // };

  // const onSuggestionsFetchRequested = async ({ value }) => {
  //   const suggestions = await getSuggestions(value);
  //   setSuggestions(suggestions);
  // };

  // const onSuggestionsClearRequested = () => {
  //   setSuggestions([]);
  // };

  // const onSuggestionSelected = (event, { suggestionValue }) => {
  //   console.log(`Вибрано: ${suggestionValue}`);
  // };

  // const inputProps = {
  //   placeholder: "Пошук...",
  //   value,
  //   onChange: (_, { newValue }) => setValue(newValue),
  // };

  const [value, setValue] = useState(inputValue);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  // const [suggestions, setSuggestions] = useState(Object.keys(suggestionsData));

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);

    // Фільтруємо весь список підказок на основі введеного тексту
    let filtered;
    suggestions
      ? (filtered = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        ))
      : null;

    // Оновлюємо стан фільтрованих підказок
    setFilteredSuggestions(filtered);
  };

  const onInputClear = () => {
    // Очищуємо введене значення та відображаємо повний список підказок
    // setValue("");
    setFilteredSuggestions([]);
  };

  const onSuggestionClick = (suggestion) => {
    // Дії, які відбудуться при виборі варіанта
    // console.log(`Вибрано: ${suggestion}`);
    setValue(suggestion);
    setData(suggestion);
    // Очистка значення вводу та відображення повного списку підказок
    onInputClear();
  };

  const onInputBlur = (event) => {
    const eventValue = event.target.value;
    const lowerCaseSuggestions = suggestions.map((item) => item.toLowerCase());
    const lowerCaseValue = eventValue.toLowerCase();

    if (lowerCaseSuggestions.includes(lowerCaseValue)) {
      setValue(eventValue);
      setData(eventValue);
      // onInputClear();
    }
    setTimeout(() => {
      onInputClear();
    }, 100);
  };

  return (
    <div className="detailsSearch">
      {/* <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={(suggestion) => <div>{suggestion}</div>}
        inputProps={inputProps}
      /> */}
      <div className="detailsSearch__wrapper">
        <input
          className="detailsSearch__input"
          type="text"
          placeholder={placeholder}
          onChange={onInputChange}
          onBlur={onInputBlur}
          value={value}
          id={id}
        />
        <img
          src={searchIcon}
          className="detailsSearch__icon"
          alt="search icon"
          width="24"
          height="24"
          aria-hidden="true"
        />
      </div>
      {filteredSuggestions && filteredSuggestions.length > 0 && (
        <div className="suggestions-list__wrapper">
          <ul className="suggestions-list" role="group">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                className="suggestions-list__item secondary-text"
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
          <div
            className="suggestions-list__decoration"
            aria-hidden="true"
          ></div>
        </div>
      )}
    </div>
  );
}
