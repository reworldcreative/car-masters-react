import React from "react";
import "./footer.scss";
import Logo from "../Logo/Logo";
import SocialsList from "../Socials/SocialsList";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__container">
          <Logo />

          <div className="footer__links">
            <a href="#" className="footer__link footer-text">
              Terms
            </a>
            <a href="#" className="footer__link footer-text">
              Privacy
            </a>
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
