import React, { useState } from 'react'
import Link from 'next/link'
import styles from "./Home.module.css"

export default function Home() {



  return (
      <div className={styles.container}>
        <div className={styles.btnSectionHome}>
          <button className={styles.btnCard}>
            <Link className={styles.btnLink} href={'../../CreatePage'}>CREATE NEW DONUT</Link>
          </button>
          <button className={styles.btnCard}>
            <Link className={styles.btnLink} href={'../../ListPage'}>ALL DONUTS</Link>
          </button>
          <button className={styles.btnCard}>
            <Link className={styles.btnLink} href={'../../FavouritesPage'}>FAVOURITE DONUTS</Link>
          </button >      
          <button className={styles.btnCard}>
            <Link className={styles.btnLink} href={'../../ContactPage'}>CONTACT</Link>
          </button>
        </div>
    </div>
  )
}




