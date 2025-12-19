import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import styles from "../components/Contact/Contact.module.css"

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.componentContainer}>
          <div className={styles.title}>
            <h1>CONTACT</h1>
          </div>
          <div className={styles.card}>
            <span>SWEET & SALTY</span>
            <span>Casa de Gominola, C/ de la Piruleta, 28037, Madrid</span>
            <span>sweetandsalty@gmail.com</span>
          </div>
        </div>
        <div>
          <button className={styles.btn}>
            <Link className={styles.btnLink} href={{
              pathname: '/'
            }}>Back to Homepage</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}
