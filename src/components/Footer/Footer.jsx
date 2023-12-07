import React from "react";
import "./footer.scss";
import Logo from "../Logo/Logo";
import SocialsList from "../Socials/SocialsList";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <Logo />

          <div className="footer__links">
            <Link to={"/terms"} className="footer__link footer-text">
              Terms
            </Link>
            <Link to={"/privacy"} className="footer__link footer-text">
              Privacy
            </Link>
          </div>
        </div>

        <SocialsList />

        <div className="footer__copyright-wrapper">
          <p className="footer__copyright-title footer-text">Created by</p>
          <p className="footer__copyright">
            <span aria-hidden="true">©</span>Copyright, 2020. Car Masters
          </p>
        </div>
      </div>
    </footer>
  );
}
