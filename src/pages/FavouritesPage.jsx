import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import styles from "../components/Favourites/Favourite.module.css"
import FavouritesComponent from '@/components/Favourites/FavouritesComponent'

export default function FavouritePage() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <FavouritesComponent />
                <button className={styles.btn}>
                    <Link className={styles.btnLink} href={{
                        pathname: '/'
                    }}>Back to Homepage</Link>
                </button>
            </div>
            <Footer />
        </div>
    )
}
