import React, { useEffect, useState } from 'react'
import styles from "./List.module.css"
import { getAllDonuts } from '@/api/donutFetch'
import Link from 'next/link'
import { addFavourite, getFavourites } from '@/api/favouritesFetch'

export default function ListComponent() {

  const [donuts, setDonuts] = useState([])
  const [favourites, setFavourites] = useState([])

  const getData = async () => {
    const donutsAux = await getAllDonuts()
    setDonuts(donutsAux.data)

    const favouritesAux = await getFavourites()
    setFavourites(favouritesAux.data)
  }

  useEffect(() => {
    getData()
  }, [])

  const handleAddFavourite = async (donutId) => {
    const res = await addFavourite(donutId)
    setFavourites([...favourites, res.data])
    getData()
  }

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>ALL DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {
          donuts && donuts.map((donut) => {
            const isFavourite = donut && favourites.find(f => f.donutId?._id === donut?.id)
            return <div className={styles.card} key={donut?.id}>
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
                  !isFavourite ?
                    <button className={styles.smallBtn} onClick={() => handleAddFavourite(donut.id)}>Add to Favourites</button>
                :
                  <span> 🩷 </span>
                }
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
