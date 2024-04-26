import React from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useDispatch } from "react-redux";
import { addItem } from "../../../store/cartSlice";

const MealItem = ({ name, description, price, id }) => {
const dispatch = useDispatch();  

const fixedPrice = `$${price.toFixed(2)}`;

const addToCartHandler = () => {
  dispatch(addItem({id, name, fixedPrice}));
};

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{fixedPrice}</p>
      </div>
      <div>
        <MealItemForm addItemHandler={addToCartHandler} id={id}/>
      </div>
    </li>
  );
};

export default MealItem;
