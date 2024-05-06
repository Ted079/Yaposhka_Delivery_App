import React,{useRef, useState} from 'react'
import styles from "./MealItemFrom.module.css"
import Input from '../../UI/Input';

const MealItemForm = ({id, onAddToCart}) => {
  const [isAmountValid, setIsAmountValid] = useState(false);
  const amountInputRef = useRef();
  
  const submitHandler = (event) => {
    event.preventDefault();

    const inputAmount = amountInputRef.current.value;
    if(inputAmount.trim().length === 0 || +inputAmount < 1 || +inputAmount > 10){
      setIsAmountValid(true);
      return;
    }
    onAddToCart(+inputAmount);
  }


  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input label="Quantity" ref={amountInputRef} input={{
        id: id,
        type:"number",
        min:"1",
        step:"1",
        max:"10",
        defaultValue:"1"
      }}/>
      <button>Add</button>
      {isAmountValid && <p>Введите количество от 1 до 10</p>}
    </form>
  )
}

export default MealItemForm;