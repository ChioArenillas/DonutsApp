import React, { useState } from "react";
import styles from "./Navbar.module.css";
import closeIcon from "../../assets/nav/closeIcon.png";
import menuIcon from "../../assets/nav/menuIcon.png";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/">SWEET & SALTY</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={menuOpen 
            ? closeIcon
            : menuIcon
        } 
        alt="menu-button"
        onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={() => setMenuOpen(false)}>
            <li> <a href={'../../CreatePage'}>Create New Donut</a></li>
            <li> <a href={'../../ListPage'}>All Donuts</a></li>
            <li> <a href={'../../FavouritesPage'}>Favourites</a></li>
            <li> <a href={'../../ContactPage'}>Contact</a></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
