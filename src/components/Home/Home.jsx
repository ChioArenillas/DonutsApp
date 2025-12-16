import React from 'react'
import Link from 'next/link'
import styles from "./Home.module.css"


export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.title}>
        <h1 >DONUTS</h1>
        </div>
        <div className={styles.btnsection}>
          <button className={styles.btn}>
            <Link className={styles.btnLink} href={'/CreatePage'}>CREATE NEW DONUT</Link>
          </button>
          <button lassName={styles.btn}>
            <Link className={styles.btnLink} href={'/ListPage'}>ALL DONUTS</Link>
          </button>
          <button lassName={styles.btn}>
            <Link className={styles.btnLink} href={'/FavouritePage'}>FAVOURITE DONUTS</Link>
          </button >      
          <button lassName={styles.btn}>
            <Link className={styles.btnLink} href={'/ContactPage'}>CONTACT</Link>
          </button>
        </div>
    </div>
  )
}




