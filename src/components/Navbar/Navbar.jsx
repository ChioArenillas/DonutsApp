import React from "react";
import styles from "./Navbar.module.css";


export default function Navbar() {

  return (
    <nav className={styles.navbarBg}>
    <div className={styles.navbar}>
      <a className={styles.title} href="/">SWEET & SALTY</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
            <li> <a href={'../pages/CreatePage'}>Create New Donut</a></li>
            <li> <a href={'../../ListPage'}>All Donuts</a></li>
            <li> <a href={'../../FavouritesPage'}>Favourites</a></li>
            <li> <a href={'../../ContactPage'}>Contact</a></li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
