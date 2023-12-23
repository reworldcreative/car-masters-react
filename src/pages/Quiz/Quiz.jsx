import React, { useEffect, useState } from "react";
import "./quiz.scss";
import Header from "@/components/Header/Header";
import QuizRadio from "./QuizRadio";
import questionsData from "@/data/quiz.json";

import backIcon from "@/img/icons/arrow-down.svg";
import successIcon from "@/img/icons/Success.svg";
import QuizInput from "./QuizInput";
import { Link } from "react-router-dom";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [maxQuestion, setMaxQuestion] = useState(questionsData.length + 1);
  const [currentItem, setCurrentItem] = useState(
    questionsData.find((element) => element.id === currentQuestion)
  );

  const [budget, setBudget] = useState("");
  const [employmentStatus, setEmploymentStatus] = useState("");
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
          budget !== "" ? setCurrentQuestion(currentQuestion + 1) : false;
          break;
        case 2:
          employmentStatus !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;

          if (employmentStatus !== "Other") {
            employmentStatus !== "" ? setCurrentQuestion(4) : false;
          }
          break;
        case 3:
          employmentStatus !== "" && employmentStatus !== "Other"
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 4:
          monthlyIncome !== ""
            ? employmentStatus === "Retired / Pension" && monthlyIncome !== ""
              ? setCurrentQuestion(5)
              : employmentStatus === "Employed" && monthlyIncome !== ""
              ? setCurrentQuestion(6)
              : employmentStatus === "Self-Employed" && monthlyIncome !== ""
              ? setCurrentQuestion(7)
              : employmentStatus === "Student" && monthlyIncome !== ""
              ? setCurrentQuestion(7)
              : setCurrentQuestion(8)
            : false;
          break;
        case 5:
          employmentStatus !== "" &&
          employmentStatus === "Retired / Pension" &&
          workingNow !== ""
            ? setCurrentQuestion(8)
            : false;
          break;
        case 6:
          employmentEmployer !== "" && employmentTitle !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 7:
          years !== "" && months !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 8:
          receivingTime !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 9:
          street !== "" && city !== "" && province !== "" && postal !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 10:
          bornYear !== "" && bornMonth !== "" && bornDay !== ""
            ? setCurrentQuestion(currentQuestion + 1)
            : false;
          break;
        case 11:
          firstName !== "" && lastName !== "" && email !== "" && phone !== ""
            ? handleSetSuccess()
            : false;
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
          }

          if (
            employmentStatus !== "Retired / Pension" ||
            employmentStatus !== "Employed" ||
            employmentStatus !== "Self-Employed" ||
            employmentStatus !== "Student"
          ) {
            setCurrentQuestion(4);
          }
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
        setEmploymentStatus(value);
        break;
      case 5:
        setWorkingNow(value);
        break;

      default:
        break;
    }
  };

  const getInputValue = (value) => {
    if (value !== "") {
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
    }
  };

  return (
    <>
      <div className="quiz__header">
        <Header />
      </div>

      <section className="quiz">
        <div className="quiz__wrapper">
          <div className="quiz__content">
            {!success ? (
              <>
                <div className="quiz__progressbar" style={fillStyle} />

                {questionsData.length > 0 ? (
                  <div className="quiz__question">
                    <h1 className="quiz__title caption">{currentItem.title}</h1>
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
                          />
                        ))
                      ) : currentItem.type === "input" ? (
                        <QuizInput
                          placeholder={currentItem.placeholder}
                          getValue={getInputValue}
                          regular={currentQuestion === 4 ? "number" : ""}
                        />
                      ) : currentItem.type === "inputEmployment" ? (
                        <div className="quiz__inputEmployment">
                          <QuizInput
                            placeholder={currentItem.placeholderEmployer}
                            getValue={getEmploymentEmployer}
                            regular={""}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderTitle}
                            getValue={getEmploymentTitle}
                            regular={""}
                          />
                        </div>
                      ) : currentItem.type === "inputData" ? (
                        <div className="quiz__row">
                          <QuizInput
                            placeholder={currentItem.placeholderYears}
                            getValue={getYears}
                            regular={"number"}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderMonths}
                            getValue={getMonths}
                            regular={""}
                          />
                        </div>
                      ) : currentItem.type === "address" ? (
                        <div className="quiz__address">
                          <QuizInput
                            placeholder={currentItem.placeholderStreet}
                            getValue={getStreet}
                            regular={""}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderCity}
                            getValue={getCity}
                            regular={""}
                          />
                          <div className="quiz__row">
                            <QuizInput
                              placeholder={currentItem.placeholderProvince}
                              getValue={getProvince}
                              regular={""}
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderPostal}
                              getValue={getPostal}
                              regular={"number"}
                            />
                          </div>
                        </div>
                      ) : currentItem.type === "born" ? (
                        <div className="quiz__row">
                          <QuizInput
                            placeholder={currentItem.placeholderYear}
                            getValue={getBornYear}
                            regular={"number"}
                          />
                          <div className="quiz__row">
                            <QuizInput
                              placeholder={currentItem.placeholderMonth}
                              getValue={getBornMonth}
                              regular={""}
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderDay}
                              getValue={getBornDay}
                              regular={"number"}
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
                            />
                            <QuizInput
                              placeholder={currentItem.placeholderLastName}
                              getValue={getLastName}
                              regular={""}
                            />
                          </div>
                          <QuizInput
                            placeholder={currentItem.placeholderEmail}
                            getValue={getEmail}
                            regular={""}
                          />
                          <QuizInput
                            placeholder={currentItem.placeholderPhone}
                            getValue={getPhone}
                            regular={"number"}
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

                <div className="quiz__buttons">
                  {currentQuestion > 1 ? (
                    <button
                      className="back-button"
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

                <h1 className="caption quiz__success-title">
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
