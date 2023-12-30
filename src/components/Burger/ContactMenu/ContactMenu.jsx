import React, { useEffect, useState } from "react";
import "./contactMenu.scss";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import SocialsList from "../../Socials/SocialsList";

import mailIcon from "@/img/icons/mail_icon.svg";
import phoneIcon from "@/img/icons/phone_icon.svg";
import avatarIcon from "@/img/icons/avatar_icon.svg";

export default function ContactMenu({ success }) {
  const [selectedCar, setSelectedCar] = useState(false);

  const location = useLocation();

  // Отримуємо загальний шлях без ідентифікатора
  // const generalPath = location.pathname.split('/').slice(0, 2).join('/');

  useEffect(() => {
    if (location.pathname === "/inventory") {
      setSelectedCar(true);
    }
  }, [location]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // console.log(data);
    success();
  };
  return (
    <div className="contactMenu">
      <p className="contactMenu__title title-text">
        We can't wait to hear from you!
      </p>

      <form className="contactMenu__form" onSubmit={handleSubmit(onSubmit)}>
        {selectedCar ? (
          <>
            <div className="contactMenu__input-container">
              <div className="contactMenu__input-wrapper">
                <input
                  id="car-name"
                  className="contactMenu__input car-model"
                  type="text"
                  placeholder="Name of selected vehicle"
                  defaultValue=""
                  maxLength="30"
                  minLength="1"
                  {...register("CarName", {
                    required: "The field is required",
                    pattern: {
                      value: /^[\w]{1,30}$/u,
                      message: "The field  no more than 30 characters",
                    },
                  })}
                />
              </div>

              {errors.CarName && (
                <p className="contactMenu__errorMessage">
                  {errors.CarName.message}
                </p>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="contactMenu__input-container">
          <div className="contactMenu__input-wrapper">
            <input
              id="user-name"
              className="contactMenu__input"
              type="text"
              placeholder="Your Name"
              defaultValue=""
              maxLength="30"
              minLength="1"
              {...register("Name", {
                required: "The field is required",
                pattern: {
                  value: /^[\p{L}]{1,30}$/u,
                  message:
                    "The field can contain only letters and no more than 30 characters",
                },
              })}
            />

            <div className="contactMenu__icon-wrapper" aria-hidden="true">
              <img
                className="contactMenu__icon"
                src={avatarIcon}
                alt="avatar icon"
                width="18"
                height="18"
              />
            </div>
          </div>

          {errors.Name && (
            <p className="contactMenu__errorMessage">{errors.Name.message}</p>
          )}
        </div>

        <div className="contactMenu__input-container">
          <div className="contactMenu__input-wrapper">
            <input
              id="user-phone"
              className="contactMenu__input"
              type="tel"
              placeholder="Phone Number"
              defaultValue=""
              maxLength="12"
              minLength="8"
              {...register("Phone", {
                required: "The field is required",
                pattern: {
                  value: /^(\+?38)?0\d{9}$/u,
                  message: "The field can contain 380 + nine numbers",
                },
              })}
            />

            <div className="contactMenu__icon-wrapper" aria-hidden="true">
              <img
                className="contactMenu__icon"
                src={phoneIcon}
                alt="phone icon"
                width="18"
                height="18"
              />
            </div>
          </div>
          {errors.Phone && (
            <p className="contactMenu__errorMessage">{errors.Phone.message}</p>
          )}
        </div>

        <div className="contactMenu__input-container">
          <div className="contactMenu__input-wrapper">
            <input
              id="user-email"
              className="contactMenu__input"
              type="email"
              placeholder="Email Address"
              defaultValue=""
              {...register("Email", {
                required: "The field is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />

            <div className="contactMenu__icon-wrapper" aria-hidden="true">
              <img
                className="contactMenu__icon"
                src={mailIcon}
                alt="mail icon"
                width="18"
                height="18"
              />
            </div>
          </div>
          {errors.Email && (
            <p className="contactMenu__errorMessage">{errors.Email.message}</p>
          )}
        </div>
        <div className="contact__button-wrapper" style={{ height: "45px" }}>
          <button type="submit" className="button accent contact-button">
            contact me
          </button>
        </div>
      </form>

      <div className="contactMenu__links">
        <p className="title">You can contact us yourself</p>
        <SocialsList mail="true" />
      </div>
    </div>
  );
}
