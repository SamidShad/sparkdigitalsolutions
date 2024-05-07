import React, { useState } from "react";
import styles from "./navbar.module.css";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { fullscreen_menu } from "../../lib/animation";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function menuFunc() {
    setOpen(!isOpen);
  }

  return (
    <>
      <div className={styles.navbar_area}>
        <nav className={styles.navbar}>
          <div className={styles.nav_logo}>
            <span>Spark Digital</span>
            <span>Solutions</span>
          </div>
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#works">
              <li>Works</li>
            </a>
          </ul>
          <a href="#contact">
            <button className="btn">Contact</button>
          </a>
          <div className={styles.menu_btn}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </nav>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={fullscreen_menu}
            initial="initial"
            animate="visible"
            exit="exit"
            className={styles.full_screen_menu}
          >
            <ul>
              <a href="#home">
                <li onClick={menuFunc}>Home</li>
              </a>
              <a href="#about">
                <li onClick={menuFunc}>About</li>
              </a>
              <a href="#services">
                <li onClick={menuFunc}>Services</li>
              </a>
              <a href="#works">
                <li onClick={menuFunc}>Works</li>
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
