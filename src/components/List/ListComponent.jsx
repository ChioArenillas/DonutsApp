import React, { useEffect, useState } from 'react'
import styles from "./List.module.css"
import { getAllDonuts } from '@/api/donutFetch'
import Link from 'next/link'

export default function ListComponent() {

   const [donuts, setDonuts] = useState([])
  const [favourites, setFavourites] = useState([])


  const getAllDonutsAux = async () => {
    const donutsAux = await getAllDonuts()
    setDonuts(donutsAux.data)
  }

  useEffect(() => {
    getAllDonutsAux()
  }, [])
  const favouriteDonut = (donut) => {
    if (!favourites.find(f => f.id === donut.id)) {
      setFavourites([...favourites, donut])
    }
  }
  


  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>ALL DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {
          donuts && donuts.map((donut, index) => {
             const isFavourite = favourites.find(f => f.id === donut.id);
             return <div className={styles.card} key={donut.id}>
              <div>{donut.id}</div>
              <div>{donut.name}</div>
              <div>
                 <Link href={{
                  pathname: 'DetailPage',
                  query: {
                    id: donut.id
                  }
                }} ><button className={styles.smallBtn}>Details</button> </Link>
              </div>
               <div>
                {
                  !isFavourite &&(
                <button className={styles.smallBtn} onClick={() => favouriteDonut(donut)}>Add to Favourites</button>
                  )
                }
              </div>
               </div>
        })
        }
      </div>
    </div>
  )
}
