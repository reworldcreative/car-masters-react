import React from "react";

import "./burgerMenu.scss";
import SocialsList from "@/components/Socials/SocialsList";
import { Link } from "react-router-dom";

export default function BurgerMenu({ openContact }) {
  return (
    <div>
      <ul className="burgerMenu__list" aria-label="navigation links">
        <li className="burgerMenu__item">
          <button
            // role="link"
            className="burgerMenu__link caption"
            onClick={openContact}
          >
            Contact us
          </button>
        </li>
        <li className="burgerMenu__item">
          <Link to={"/about"} className="burgerMenu__link caption">
            About CM
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link to={"/loan"} className="burgerMenu__link caption">
            Loan Rates
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link to={"/videos"} className="burgerMenu__link caption">
            Video
          </Link>
        </li>
        <li className="burgerMenu__item">
          <a href="#" className="burgerMenu__link caption">
            Blog
          </a>
        </li>
        <li className="burgerMenu__item">
          <a href="#" className="burgerMenu__link caption">
            Calculate
          </a>
        </li>
      </ul>

      <SocialsList />
    </div>
  );
}
