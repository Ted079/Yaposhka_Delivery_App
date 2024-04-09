import React from 'react'
import styling from "./Card.module.css";

const Card = ({children}) => {
  return (
    <div className={styling.card}>{children}</div>
  )
}

export default Card;