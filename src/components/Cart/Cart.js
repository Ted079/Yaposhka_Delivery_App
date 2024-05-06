import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = ({ onCloseCart }) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

  const hasItems = cartContext.cartItems.length > 0; //

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClick={onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Price</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button-alt"]} onClick={onCloseCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>To Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
