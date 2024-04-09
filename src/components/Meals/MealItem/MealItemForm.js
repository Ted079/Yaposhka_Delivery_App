import React from 'react'
import styles from "./MealItemFrom.module.css"
import Input from '../../UI/Input';

const MealItemForm = ({id}) => {
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
      <button>Add</button>
    </form>
  )
}

export default MealItemForm;