import React from "react";
import Link from "next/link";
import styles from "@styles/NavBar.module.css";
import logoImg from "../assets/images/logo.png";
import Image from "next/image";

const Logo = () => (
  <div className={styles.logoWrapper}>
    <div className={styles.logoImg}>
      <Image src={logoImg} alt="NextJS" />
    </div>
    <h2 className={styles.logoTxth2}>GitHub Demo</h2>
  </div>
);


const ActionButtons = () => (
  <div className={styles.actionContainer}>
    <button className={styles.homeBtn}><Link href="/">Home</Link></button>
    <button className={styles.aboutBtn}>About</button>
  </div>
);


const NavBar = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo />
      </div>
      <div className={styles.mainLinks}></div>

      <div className={styles.rightSide}>
        { <ActionButtons />}
      </div>
    </div>
  );
}

export default NavBar;
