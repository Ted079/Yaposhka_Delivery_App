import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";



const MealItem = ({ name, description, price, id }) => {
const cartContext = useContext(CartContext);

const fixedPrice = `$${price.toFixed(2)}`;

const addToCartHandler = (amount) => {
  cartContext.addItem({
    id: id,
    description: description,
    name: name,
    price: price,
    amount: amount,
  });
  
}

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealItem;
