import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef(({ input, label }, inputRef ) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={inputRef} {...input} />
    </div>
  );
});

export default Input;
