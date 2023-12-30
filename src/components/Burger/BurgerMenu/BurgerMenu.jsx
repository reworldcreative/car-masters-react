import React from "react";

import "./burgerMenu.scss";
import SocialsList from "@/components/Socials/SocialsList";
import { Link, useLocation } from "react-router-dom";

export default function BurgerMenu({ openContact }) {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 700);
  const [activePage, setActivePage] = useState("");

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    switch (location.pathname) {
      case "/inventory":
        setActivePage("inventory");
        break;
      case "/about":
        setActivePage("about");
        break;
      case "/loan":
        setActivePage("loan");
        break;
      case "/videos":
        setActivePage("videos");
        break;
      case "/blog":
        setActivePage("blog");
        break;
      case "/calculator":
        setActivePage("calculator");
        break;

      default:
        break;
    }
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreen(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <ul className="burgerMenu__list" aria-label="navigation links">
        {isMobileScreen ? (
          <li className="burgerMenu__item">
            <Link
              to={"/inventory"}
              className="burgerMenu__link caption"
              style={{
                color: activePage === "inventory" ? "#7481ff" : false,
              }}
            >
              Inventory
            </Link>
          </li>
        ) : (
          <></>
        )}
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
          <Link
            to={"/about"}
            className="burgerMenu__link caption"
            style={{
              color: activePage === "about" ? "#7481ff" : false,
            }}
          >
            About CM
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link
            to={"/loan"}
            className="burgerMenu__link caption"
            style={{
              color: activePage === "loan" ? "#7481ff" : false,
            }}
          >
            Loan Rates
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link
            to={"/videos"}
            className="burgerMenu__link caption"
            style={{
              color: activePage === "videos" ? "#7481ff" : false,
            }}
          >
            Video
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link
            to={"/blog"}
            className="burgerMenu__link caption"
            style={{
              color: activePage === "blog" ? "#7481ff" : false,
            }}
          >
            Blog
          </Link>
        </li>
        <li className="burgerMenu__item">
          <Link
            to={"/calculator"}
            className="burgerMenu__link caption"
            style={{
              color: activePage === "calculator" ? "#7481ff" : false,
            }}
          >
            Calculate
          </Link>
        </li>
      </ul>

      <SocialsList />
    </div>
  );
}
