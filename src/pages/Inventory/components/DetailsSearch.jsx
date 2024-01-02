import React, { useState, useRef } from "react";
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
  const inputRef = useRef(null);
  const [focusedSuggestion, setFocusedSuggestion] = useState(null);

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  // const [suggestions, setSuggestions] = useState(Object.keys(suggestionsData));

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const onInputChange = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    setFocusedSuggestion(null);

    // Фільтруємо весь список підказок на основі введеного тексту
    let filtered;
    suggestions
      ? (filtered = suggestions.filter((suggestion) =>
          suggestion.toLowerCase().includes(inputValue.toLowerCase())
        ))
      : null;

    filtered.length === 0 ? (filtered = ["Nothing found"]) : false;

    // Оновлюємо стан фільтрованих підказок
    setFilteredSuggestions(filtered);
  };

  const onInputClear = () => {
    // Очищуємо введене значення та відображаємо повний список підказок
    // setValue("");
    setFocusedSuggestion(null);
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

  // const onInputBlur = (event) => {
  //   const eventValue = event.target.value;
  //   const lowerCaseSuggestions = suggestions.map((item) => item.toLowerCase());
  //   const lowerCaseValue = eventValue.toLowerCase();

  //   if (lowerCaseSuggestions.includes(lowerCaseValue)) {
  //     setValue(eventValue);
  //     setData(eventValue);
  //     // onInputClear();
  //   }
  //   setTimeout(() => {
  //     onInputClear();
  //   }, 100);
  // };

  const suggestionsRef = useRef(null);
  const scrollContainerToFocusedItem = () => {
    if (suggestionsRef.current) {
      // Отримання активного елемента з класом .suggestions-list__item.focused
      const focusedItem = document.querySelector(
        ".suggestions-list__item.focused"
      );

      if (focusedItem) {
        // Визначте відстань між верхом контейнера і верхом активного елемента
        const distanceToTop =
          focusedItem.offsetTop - suggestionsRef.current.offsetTop;
        // Прокрутіть контейнер вниз на відстань до верху активного елемента
        suggestionsRef.current.scrollTop = distanceToTop;
        focusedItem.focus();
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (inputRef.current) {
        const eventValue = inputRef.current.value;
        const lowerCaseSuggestions = suggestions.map((item) =>
          item.toLowerCase()
        );
        const lowerCaseValue = eventValue.toLowerCase();

        if (
          lowerCaseSuggestions.includes(lowerCaseValue) ||
          lowerCaseValue === ""
        ) {
          setValue(eventValue);
          setData(eventValue);
          onInputClear();
        }
      }

      if (
        event.target.className ===
        "suggestions-list__item secondary-text focused"
      ) {
        setValue(event.target.innerText);
        setData(event.target.innerText);
        onInputClear();
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      const nextIndex = focusedSuggestion === null ? 0 : focusedSuggestion + 1;
      if (nextIndex < filteredSuggestions.length) {
        setFocusedSuggestion(nextIndex);
        setTimeout(() => {
          scrollContainerToFocusedItem();
        }, 10);
      }
    } else if (event.key === "ArrowUp") {
      // Обробка натискання стрілки вгору (перехід фокусу на попередню підказку)
      event.preventDefault();
      const prevIndex =
        focusedSuggestion === null
          ? filteredSuggestions.length - 1
          : focusedSuggestion - 1;
      if (prevIndex >= 0) {
        setFocusedSuggestion(prevIndex);
        setTimeout(() => {
          scrollContainerToFocusedItem();
        }, 10);
      }

      if (prevIndex < 0) {
        inputRef.current.focus();
      }
    }
  };

  const handleClickOutside = (event) => {
    if (filteredSuggestions.length === 0) {
      return;
    }
    // const selectWrapper = document.querySelector(".detailsSearch__wrapper");

    console.log(inputRef.current, "   ", event.target);
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      const eventValue = inputRef.current.value;
      const lowerCaseSuggestions = suggestions.map((item) =>
        item.toLowerCase()
      );
      const lowerCaseValue = eventValue.toLowerCase();

      if (
        lowerCaseSuggestions.includes(lowerCaseValue) ||
        lowerCaseValue === ""
      ) {
        setValue(eventValue);
        setData(eventValue);
      }
      onInputClear();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [filteredSuggestions]);

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
          ref={inputRef}
          className="detailsSearch__input"
          type="text"
          placeholder={placeholder}
          onChange={onInputChange}
          onKeyDown={handleKeyDown}
          // onBlur={onInputBlur}
          onBlur={(event) => {
            event.preventDefault();
          }}
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
          <ul
            className="suggestions-list"
            // role="group"
            role="listbox"
            ref={suggestionsRef}
            aria-live="polite"
            aria-relevant="additions"
            aria-activedescendant={
              focusedSuggestion !== null
                ? `suggestion-${focusedSuggestion}`
                : null
            }
          >
            {filteredSuggestions.map((suggestion, index) => (
              <li
                className={`suggestions-list__item secondary-text ${
                  index === focusedSuggestion ? "focused" : ""
                }`}
                key={index}
                onClick={() => onSuggestionClick(suggestion)}
                tabIndex="0"
                onKeyDown={handleKeyDown}
                role="option"
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
