import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = ({ onClick }) => {
  const [isButtonBump, setIsButtonBump] = useState(false);

  const cartContext = useContext(CartContext);

  const cartItemNumber = cartContext.cartItems.reduce((currentValue, item) => {
    return (currentValue += item.amount);
  }, 0);

  const buttonClasses = `${styles.button}  ${isButtonBump ? styles.bump : " "}`;
  useEffect(() => {
    if (cartContext.cartItems.length === 0) {
      return;
    }
    setIsButtonBump(true);

    const timer = setTimeout(() => {
      setIsButtonBump(false);
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [cartContext.cartItems]);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Basket</span>
      <span className={styles.badge}>{cartItemNumber}</span>
    </button>
  );
};

export default HeaderCartButton;
