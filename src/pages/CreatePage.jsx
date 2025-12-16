import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import Link from 'next/link'
import React from 'react'
import styles from "../components/Create/Create.module.css"
import CreateComponent from '@/components/Create/CreateComponent'

export default function CreatePage() {
    return (
        <div>
            <Navbar />
            <div className={styles.container}>
                <CreateComponent />
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
