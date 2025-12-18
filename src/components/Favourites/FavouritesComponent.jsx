import React, { useEffect, useState } from 'react'
import styles from "./Favourite.module.css"
import { getFavourites, deleteFavourite } from '@/api/favouritesFetch'
import Link from 'next/link'

export default function FavouritesComponent() {

  const [favourites, setFavourites] = useState([])

  const getFavouritesAux = async () => {
    const res = await getFavourites()
    const validFavourites = res.data.filter(f => f.donutId !== null)
      setFavourites(validFavourites)
  }

  useEffect(() => {
    getFavouritesAux()
  }, [])

  const removeFavourite = async (donutId) => {
    const res = await deleteFavourite(donutId)
    setFavourites(favourites.filter(f => f.donutId?._id !== donutId))
  }

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>FAVOURITE DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {favourites.length === 0 && (
          <span className={styles.card}>No favourite donuts yet. Add some.</span>
        )}
        {favourites.map(fav => (
          <div className={styles.card} key={fav._id}>
            <div>{fav.donutId?._id}</div>
            <div>{fav.donutId?.name}</div>
            <div>
              <Link href={{
                pathname: 'DetailPage',
                query: { id: fav.donutId?._id }
              }}>
                <button className={styles.smallBtn}>Details</button>
              </Link>
            </div>
            <button className={styles.smallBtn} onClick={() => removeFavourite(fav.donutId._id)}>Remove from Favourites</button>
          </div>
        ))}
      </div>
    </div>
  )
}
