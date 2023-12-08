import React, { useEffect } from "react";
import "./inventory.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Inventory() {
  // useEffect(() => {
  //   const headerInventory = document.querySelector(
  //     ".inventory-header .header__inventory"
  //   );

  //   if (headerInventory) {
  //     headerInventory.classList.add("caption");
  //   }
  // }, []);
  return (
    <>
      <div className="inventory-header">
        <Header />
      </div>

      <section className="inventory">
        <div className="inventory__wrapper"></div>
      </section>

      <Footer />
    </>
  );
}
