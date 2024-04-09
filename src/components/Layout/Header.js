import React, { Fragment} from "react";
import sushiBanner from "../../assets/heroBanner4.png";
import sushiIcon from "../../assets/2.png";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = ({onShowCart}) => {

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles["icon-wrapper"]}>
            <img src={sushiIcon} alt="icon"/>
          </div>
          <h1>Yaposhka</h1>
        </div>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiBanner} alt="Banner" />
      </div>
    </Fragment>
  );
};

export default Header;
