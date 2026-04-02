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
            <span>info@sweetandsalty.com</span>
            <span>Casa de Gominola, C/ de la Piruleta, 28037, Madrid</span>
            <div>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2605173473544!2d-3.6875003000000315!3d40.425229900000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422897339fe995%3A0x2c4fd086280388eb!2sCalle%20de%20Goya%2C%204%2C%20Salamanca%2C%2028001%20Madrid!5e0!3m2!1ses!2ses!4v1769424562027!5m2!1ses!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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
