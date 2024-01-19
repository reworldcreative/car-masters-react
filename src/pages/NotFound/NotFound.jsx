import React from "react";
import "./notFound.scss";

import car from "@/img/icons/moving-car_icon.svg";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = `CarMasters - Not found page`;
  }, []);
  return (
    <section className="not-found">
      <div className="not-found__wrapper">
        <img
          src={car}
          alt="moving car icon"
          width="89"
          height="30"
          aria-hidden="true"
          className="not-found__icon"
        />

        <div className="not-found__text-wrapper">
          <h1 className="section-title not-found__title">404 page</h1>
          <p className="secondary-text">
            Page not found or such pages do not exist.
          </p>
        </div>

        <div
          style={{ height: "45px", width: "fit-content" }}
          className="not-found__button-wrapper"
        >
          <Link to={"/"} className="button accent not-found__button">
            Go home
          </Link>
        </div>
      </div>
    </section>
  );
}
