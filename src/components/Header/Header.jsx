import React, { useState } from "react";
import "./header.scss";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import BurgerButton from "../Burger/BurgerButton/BurgerButton";
import Burger from "../Burger/Burger";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);

  const [BurgerButtonFocus, setBurgerButtonFocus] = useState(false);
  const toggleMenu = () => {
    setIsOpenBurger(!isOpenBurger);

    if (!isOpenBurger) {
      // document.body.style.overflow = "hidden";
      setBurgerButtonFocus(false);
    } else {
      // document.body.style.overflow = "auto";
      setBurgerButtonFocus(true);
    }
  };
  return (
    <>
      {isOpenBurger ? <Burger close={toggleMenu} /> : false}
      <header className="header">
        <Logo />

        <div className="header__navigation">
          <div className="header__buttons">
            {/* <Button addclass="header__inventory">Inventory</Button> */}
            <Link to={"/inventory"} className="button header__inventory">
              Inventory
            </Link>
            {/* <Button addclass="accent RequestCar">Request a car</Button> */}
            <Link to={"/quiz"} className="button accent RequestCar">
              Request a car
            </Link>
          </div>

          <BurgerButton onClick={toggleMenu} focus={BurgerButtonFocus} />
        </div>
      </header>
    </>
  );
}
