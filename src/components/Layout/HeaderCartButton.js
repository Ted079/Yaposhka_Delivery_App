import React, {useContext} from 'react'
import CartIcon from '../Cart/CartIcon';
import styles from "./HeaderCartButton.module.css"
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({onClick}) => {
  const cartContext = useContext(CartContext);

  const cartItemNumber = cartContext.items.reduce((currentValue, item) => {
    return currentValue += item.amount;
  }, 0);

  console.log(cartContext.items);


  return (
    <button className={styles.button} onClick={onClick}>
        <span className={styles.icon}><CartIcon/></span>
        <span>Basket</span>
        <span className={styles.badge}>{cartItemNumber}</span>
    </button>
  )
}

export default HeaderCartButton;