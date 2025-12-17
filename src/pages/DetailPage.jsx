
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import styles from "../components/Detail/Detail.module.css"
import DetailsComponent from '@/components/Detail/DetailsComponent'

export default function ListPage() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <DetailsComponent />
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
