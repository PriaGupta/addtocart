import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Navbar = () => {
  const { totalItem } = useContext(CartContext);
  return (
    <>
      <header>
        <div className="continue-shopping">
          {/* <img src="./images/arrow.png" alt="arrow" className="arrow-icon" /> */}
          <i className="fa fa-arrow-left"></i>
          <h3>continue shoping</h3>
        </div>

        <div className="cart-icon">
          {/* <img src="./images/cart.png" alt="cart-logo" /> */}
          <i className="fa-solid fa-cart-shopping"></i>
          <p>{totalItem}</p>
        </div>
      </header>
    </>
  );
};

export default Navbar;