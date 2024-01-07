import React, { useEffect, useState } from "react";
import "./quiz.scss";
import Header from "@/components/Header/Header";
import QuizRadio from "./QuizRadio";
import questionsData from "@/data/quiz.json";

import backIcon from "@/img/icons/arrow-down.svg";
import successIcon from "@/img/icons/Success.svg";
import QuizInput from "./QuizInput";
import { Link, useLocation } from "react-router-dom";

export default function Quiz() {
  const title = useRef(null);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [maxQuestion, setMaxQuestion] = useState(questionsData.length + 1);
  const [currentItem, setCurrentItem] = useState(
    questionsData.find((element) => element.id === currentQuestion)
  );

  const [budget, setBudget] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [employmentStatusMore, setEmploymentStatusMore] = useState("");

  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [workingNow, setWorkingNow] = useState("");

  const [employmentEmployer, setEmploymentEmployer] = useState("");
  const [employmentTitle, setEmploymentTitle] = useState("");
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [receivingTime, setReceivingTime] = useState("");

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postal, setPostal] = useState("");

  const [bornYear, setBornYear] = useState("");
  const [bornMonth, setBornMonth] = useState("");
  const [bornDay, setBornDay] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [success, setSuccess] = useState(false);
  const [confirmation, setСonfirmation] = useState("");

  const [error, setError] = useState(false);

  const handleSetError = () => {
    setError(true);
  };

  const handleRemoveError = () => {
    setError(false);
  };

  function generateRandomString(length) {
    const characters =
      "Aa0BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";

    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  const handleSetSuccess = () => {
    setSuccess(true);

    setСonfirmation(generateRandomString(7) + "-" + generateRandomString(7));
  };

  const getFirstName = (value) => {
    setFirstName(value);
  };

  const getLastName = (value) => {
    setLastName(value);
  };

  const getEmail = (value) => {
    setEmail(value);
  };

  const getPhone = (value) => {
    setPhone(value);
  };

  const getBornYear = (value) => {
    setBornYear(value);
  };

  const getBornMonth = (value) => {
    setBornMonth(value);
  };

  const getBornDay = (value) => {
    setBornDay(value);
  };

  const getStreet = (value) => {
    setStreet(value);
  };

  const getCity = (value) => {
    setCity(value);
  };

  const getProvince = (value) => {
    setProvince(value);
  };

  const getPostal = (value) => {
    setPostal(value);
  };

  const getYears = (value) => {
    setYears(value);
  };
  const getMonths = (value) => {
    setMonths(value);
  };
  const getEmploymentEmployer = (value) => {
    setEmploymentEmployer(value);
  };

  const getEmploymentTitle = (value) => {
    setEmploymentTitle(value);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 <= maxQuestion) {
      switch (currentQuestion) {
        case 1:
          budget !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 2:
          employmentStatus !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();

          if (employmentStatus !== "Other") {
            employmentStatus !== ""
              ? (setCurrentQuestion(4), handleRemoveError())
              : handleSetError();
          }
          break;
        case 3:
          employmentStatusMore !== "" && employmentStatus !== ""
            ? // && employmentStatus !== "Other"
              (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 4:
          monthlyIncome !== ""
            ? employmentStatus === "Retired / Pension" && monthlyIncome !== ""
              ? (setCurrentQuestion(5), handleRemoveError())
              : employmentStatus === "Employed" && monthlyIncome !== ""
              ? (setCurrentQuestion(6), handleRemoveError())
              : employmentStatus === "Self-Employed" && monthlyIncome !== ""
              ? (setCurrentQuestion(7), handleRemoveError())
              : employmentStatus === "Student" && monthlyIncome !== ""
              ? (setCurrentQuestion(7), handleRemoveError())
              : (setCurrentQuestion(8), handleRemoveError())
            : handleSetError();
          break;
        case 5:
          employmentStatus !== "" &&
          employmentStatus === "Retired / Pension" &&
          workingNow !== ""
            ? (setCurrentQuestion(8), handleRemoveError())
            : handleSetError();
          break;
        case 6:
          employmentEmployer !== "" && employmentTitle !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 7:
          years !== "" && months !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 8:
          receivingTime !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 9:
          street !== "" && city !== "" && province !== "" && postal !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 10:
          bornYear !== "" && bornMonth !== "" && bornDay !== ""
            ? (setCurrentQuestion(currentQuestion + 1), handleRemoveError())
            : handleSetError();
          break;
        case 11:
          firstName !== "" && lastName !== "" && email !== "" && phone !== ""
            ? (handleSetSuccess(), handleRemoveError())
            : handleSetError();
          break;

        default:
          setCurrentQuestion(currentQuestion + 1);
          break;
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion - 1 >= 1) {
      setCurrentQuestion(currentQuestion - 1);
      handleRemoveError();

      switch (currentQuestion) {
        case 4:
          if (employmentStatus !== "Other") {
            setCurrentQuestion(2);
          }
          break;

        case 6:
          if (employmentStatus !== "Retired / Pension") {
            setCurrentQuestion(4);
          }
          break;

        case 7:
          if (
            employmentStatus === "Student" ||
            employmentStatus === "Self-Employed"
          ) {
            setCurrentQuestion(4);
          }
          break;

        case 8:
          if (employmentStatus === "Retired / Pension") {
            setCurrentQuestion(5);
          } else if (
            employmentStatus === "Employed" ||
            employmentStatus === "Self-Employed" ||
            employmentStatus === "Student"
          ) {
            setCurrentQuestion(7);
          } else {
            setCurrentQuestion(4);
          }

          // if (
          //   employmentStatus !== "Retired / Pension" ||
          //   employmentStatus !== "Employed" ||
          //   employmentStatus !== "Self-Employed" ||
          //   employmentStatus !== "Student"
          // ) {
          //   setCurrentQuestion(4);
          // }
          break;
        default:
          setCurrentQuestion(currentQuestion - 1);
          break;
      }
    }
  };

  const fillStyle = {
    background: `linear-gradient(to right, var(--base-color) 0%, var(--base-color) ${
      (currentQuestion / maxQuestion) * 100
    }%, #d7d7d7 ${(currentQuestion / maxQuestion) * 100}%, #d7d7d7 100%)`,
  };

  const errorStyle = {
    display: `${error ? "block" : "none"}`,
  };

  useEffect(() => {
    setCurrentItem(
      questionsData.find((element) => element.id === currentQuestion)
    );
  }, [currentQuestion]);

  const getRadioValue = (value) => {
    switch (currentQuestion) {
      case 1:
        setBudget(value);
        break;

      case 2:
        setEmploymentStatus(value);
        break;
      case 3:
        setEmploymentStatusMore(value);
        break;
      case 5:
        setWorkingNow(value);
        break;

      default:
        break;
    }
  };

  const getInputValue = (value) => {
    // if (value !== "") {
    switch (currentQuestion) {
      case 4:
        setMonthlyIncome(value);
        break;
      case 8:
        setReceivingTime(value);
        break;

      default:
        break;
    }
    // }
  };

  useEffect(() => {
    title.current.blur();
  }, []);

  useEffect(() => {
    if (title.current && currentQuestion > 1) {
      setTimeout(() => {
        title.current.focus();
      }, 100);
    }
  }, [currentItem, success]);

  return (
    <>
      <div className="quiz__header">
        <Header />
      </div>

      <section className="quiz">
        <div className="quiz__wrapper">
          {!success ? (
            <p className="visibility-hidden">
              little quiz for more information
            </p>
          ) : (
            <></>
          )}
          <div
            className="quiz__content"
            // aria-live="polite"
          >
            {!success ? (
              <>
                <div
                  className="quiz__progressbar"
                  style={fillStyle}
                  aria-hidden="true"
                />

                {questionsData.length > 0 ? (
                  <div className="quiz__question">
                    <h1
                      className="quiz__title caption"
                      ref={title}
                      tabIndex="0"
                    >
                      {currentItem.title}
                    </h1>
                    <p className="quiz__question-text secondary-text">
                      {currentItem.text}
                    </p>
                    <div className="quiz__answer">
                      {currentItem.type === "radio" ? (
                        currentItem.answers.map((answer, index) => (
                          <QuizRadio
                            text={answer}
                            key={index}
                            getValue={getRadioValue}
                            selected={
                              currentItem.id === 1
                                ? budget
                                : currentItem.id === 2
                                ? employmentStatus
                                : currentItem.id === 3
                                ? employmentStatusMore
                                : currentItem.id === 5
                                ? workingNow
                                : ""
                            }
                          />
                        ))
                      ) : currentItem.type === "input" ? (
                        <QuizInput
                          placeholder={currentItem.placeholder}
                          getValue={getInputValue}
                          regular={currentQuestion === 4 ? "number" : ""}
                          value={
                            currentItem.id === 4
                              ? monthlyIncome
                              : currentItem.id === 8
                              ? receivingTime
                              : false
                          }
                          maxLength={15}
                        />
                      ) : currentItem.type === "inputEmployment" ? (
                        <div className="quiz__inputEmployment">
                          <QuizInput
                            placeholder={currentItem.placeholderEmployer}
                            getValue={getEmploymentEmployer}
                            regular={""}
                            value={employmentEmployer}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderTitle}
                            getValue={getEmploymentTitle}
                            regular={""}
                            value={employmentTitle}
                          />
                        </div>
                      ) : currentItem.type === "inputData" ? (
                        <div className="quiz__row">
                          <QuizInput
                            placeholder={currentItem.placeholderYears}
                            getValue={getYears}
                            regular={"number"}
                            value={years}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderMonths}
                            getValue={getMonths}
                            regular={""}
                            value={months}
                          />
                        </div>
                      ) : currentItem.type === "address" ? (
                        <div className="quiz__address">
                          <QuizInput
                            placeholder={currentItem.placeholderStreet}
                            getValue={getStreet}
                            regular={""}
                            value={street}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderCity}
                            getValue={getCity}
                            regular={""}
                            value={city}
                          />
                          <div className="quiz__row">
                            <QuizInput
                              placeholder={currentItem.placeholderProvince}
                              getValue={getProvince}
                              regular={""}
                              value={province}
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderPostal}
                              getValue={getPostal}
                              regular={"number"}
                              value={postal}
                            />
                          </div>
                        </div>
                      ) : currentItem.type === "born" ? (
                        <div className="quiz__row">
                          <QuizInput
                            placeholder={currentItem.placeholderYear}
                            getValue={getBornYear}
                            regular={"number"}
                            value={bornYear}
                          />
                          <div className="quiz__row">
                            <QuizInput
                              placeholder={currentItem.placeholderMonth}
                              getValue={getBornMonth}
                              regular={""}
                              value={bornMonth}
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderDay}
                              getValue={getBornDay}
                              regular={"number"}
                              value={bornDay}
                            />
                          </div>
                        </div>
                      ) : currentItem.type === "personal" ? (
                        <div className="quiz__address">
                          <div className="quiz__row">
                            <QuizInput
                              placeholder={currentItem.placeholderFirstName}
                              getValue={getFirstName}
                              regular={""}
                              value={firstName}
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderLastName}
                              getValue={getLastName}
                              regular={""}
                              value={lastName}
                            />
                          </div>
                          <QuizInput
                            placeholder={currentItem.placeholderEmail}
                            getValue={getEmail}
                            regular={""}
                            value={email}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderPhone}
                            getValue={getPhone}
                            regular={"number"}
                            value={phone}
                          />
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}

                <div className="quiz__error" style={errorStyle}>
                  <p className="quiz__error-text secondary-text">
                    select one or fill all fields
                  </p>
                </div>

                <div className="quiz__buttons">
                  {currentQuestion > 1 ? (
                    <button
                      className="back-button secondary-text "
                      // aria-label="back to previous question"
                      onClick={handlePrevQuestion}
                    >
                      <img
                        src={backIcon}
                        alt="back icon"
                        aria-hidden="true"
                        width="16"
                        height="8"
                      />
                      Back
                      <span className="visibility-hidden">
                        {" "}
                        to previous question
                      </span>
                    </button>
                  ) : (
                    <></>
                  )}
                  <div
                    style={{ height: "45px", width: "fit-content" }}
                    className="quiz__Button_wrapper"
                  >
                    <button
                      className="button accent continue"
                      onClick={handleNextQuestion}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="quiz__success">
                <img
                  src={successIcon}
                  className="success-icon"
                  alt="success icon"
                  width="70"
                  height="70"
                  aria-hidden="true"
                />

                <h1
                  className="caption quiz__success-title"
                  ref={title}
                  tabIndex="0"
                >
                  Application successful!
                </h1>
                <p className="secondary-text">
                  Your response was successfully submitted. Thank you! Our team
                  will reach out to you shortly.
                </p>

                <div className="quiz__confirmation">
                  <h2 className="title">Confirmation number:</h2>
                  <p className="secondary-text quiz__confirmation_code">
                    {/* 0002466-1vwrh0 */}
                    {confirmation}
                  </p>
                </div>

                <div
                  style={{ height: "45px", width: "fit-content" }}
                  className="quiz__successButton_wrapper"
                >
                  <Link to={"/"} className="button accent successButton">
                    Go to main page
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
