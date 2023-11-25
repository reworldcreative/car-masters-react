import React from "react";
import "./socials.scss";

import instagramIcon from "@/img/icons/instagram_icon.svg";
import facebookIcon from "@/img/icons/facebook_icon.svg";
import youtubeIcon from "@/img/icons/youtube_icon.svg";

export default function SocialsList() {
  return (
    <address>
      <ul className="socialsList" aria-label="our social links">
        <li className="socialsList__item">
          <a
            href="https://www.instagram.com"
            className="socialsList__link"
            target="_blank"
            aria-label="instagram link"
          >
            <img
              src={instagramIcon}
              alt="instagram icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
          </a>
        </li>

        <li className="socialsList__item">
          <a
            href="https://uk-ua.facebook.com"
            className="socialsList__link"
            target="_blank"
            aria-label="facebook link"
          >
            <img
              src={facebookIcon}
              alt="facebook icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
          </a>
        </li>

        <li className="socialsList__item">
          <a
            href="https://www.youtube.com"
            className="socialsList__link"
            target="_blank"
            aria-label="youtube link"
          >
            <img
              src={youtubeIcon}
              alt="youtube icon"
              width="16"
              height="16"
              aria-hidden="true"
            />
          </a>
        </li>
      </ul>
    </address>
  );
}
