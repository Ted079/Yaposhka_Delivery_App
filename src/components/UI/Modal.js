import React,{Fragment} from 'react';
import styles from "./Modal.module.css";
import ReactDom from "react-dom";

const Backdrop = ({onClick}) => {
    return <div className={styles.backdrop} onClick={onClick}></div>
};

const ModalWindow = ({children}) => {
  return (
    <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
    </div>
  )
};

const portalElements = document.getElementById("overlay");

const Modal = ({children, onClick}) => {
    return (
      <Fragment>
        {ReactDom.createPortal(<Backdrop onClick={onClick}/>, portalElements)}
        {ReactDom.createPortal(<ModalWindow>{children}</ModalWindow>, portalElements)}
      </Fragment>
    )
  }

export default Modal;