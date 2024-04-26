import React from 'react'
import styles from "./MealItemFrom.module.css"
import Input from '../../UI/Input';

const MealItemForm = ({id, addItemHandler}) => {
  return (
    <form className={styles.form}>
      <Input label="Quantity" input={{
        id: id,
        type:"number",
        min:"1",
        step:"1",
        max:"10",
        defaultValue:"1"
      }}/>
      <button type='button' onClick={addItemHandler}>Add</button>
    </form>
  )
}

export default MealItemForm;