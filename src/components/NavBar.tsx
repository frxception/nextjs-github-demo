import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.css";
import { motion } from "framer-motion";
import GreenlandLogoImg from "../assets/images/logo.png";
import Image from "next/image";

const Logo = () => (
  <div className={styles.logoWrapper}>
    <div className={styles.logoImg}>
      <Image src={GreenlandLogoImg} alt="NextJS" />
    </div>
    <h2 className={styles.logoTxth2}>GitHub Demo</h2>
  </div>
);

const NavLinks = () => (
  <div className={styles.navLinksContainer}>
    <ul className={styles.linksWrapper}>
      <li className={styles.linkItem}>
        <a href="#" className={styles.linkItemTxt}>xxxxx</a>
      </li>
      <li className={styles.linkItem}>
        <a href="#" className={styles.linkItemTxt}>xxxxx</a>
      </li>
      <li className={styles.linkItem}>
        <a href="#" className={styles.linkItemTxt}>xxxxx</a>
      </li>
    </ul>
  </div>
);

const ActionButtons = () => (
  <div className={styles.actionContainer}>
    <button className={styles.homeBtn}>Home</button>
    <button className={styles.aboutBtn}>About</button>
  </div>
);

const MenuToggler = ({ toggle, isOpen }) => {
  const transition = { duration: 0.33 };
  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3"
      {...props}
    />
  );

  return (
    <div className={styles.menuTogglerBtn} onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 18%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 18%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 18%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};
const MobileNavLinks = (props) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={styles.mobileNavLinksContainer}>
      <MenuToggler isOpen={isOpen} toggle={() => setOpen(!isOpen)} />

      <ul className={styles.mobileLinksWrapper}>
        <li className={styles.mobileLinkItem}>
          <a href="#" className={styles.mobileLinkTxt}>
            mmmmmm
          </a>
        </li>
        <li className={styles.mobileLinkItem}>
          <a href="#" className={styles.mobileLinkTxt}>
            mmmmmm
          </a>
        </li>
        <li className={styles.mobileLinkItem}>
          <a href="#" className={styles.mobileLinkTxt}>
            mmmmmm
          </a>
        </li>
       
        <div className={styles.mobileLinkDivider}>
          <ActionButtons />
        </div>
      </ul>
    </div>
  );
};

function NavBar() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent)) {
        setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Logo />
      </div>
      <div className={styles.mainLinks}>{!isMobile && <NavLinks />}</div>

      <div className={styles.rightSide}>
        { !isMobile ? "" : <ActionButtons />}
        {/* { isMobile && <MobileNavLinks /> } */}
        {/* {!isMobile && <ActionButtons />}
        {isMobile && <MobileNavLinks />} */}
      </div>
    </div>
  );
}

export default NavBar;
