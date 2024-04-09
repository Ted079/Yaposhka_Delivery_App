import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = ({ onCloseCart}) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[
        {
          id: "m1",
          name: 'Ролл "Наоми"',
          price: 11.99,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClick={onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Price</span>
        <span>34$</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={onCloseCart}>Close</button>
        <button className={styles.button}>To Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
