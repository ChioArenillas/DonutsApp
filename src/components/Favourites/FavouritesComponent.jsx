import React, { useEffect, useState } from 'react'
import styles from "./Favourite.module.css"
import { deleteFavourite } from '@/store/favourites/favouritesThunks'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFavourites } from '@/store/favourites/favouritesThunks'

export default function FavouritesComponent() {

  const dispatch = useDispatch()

  const favourites = useSelector(state => state.favourites.list)
  const loading = useSelector(state => state.favourites.loading)

  useEffect(() => {
    dispatch(fetchFavourites())
  }, [dispatch])

  const removeFavourite = (donutId) => {
    dispatch(deleteFavourite(donutId))
  }
  if (loading) return <p className={styles.text}>Loading donuts...</p>

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1 >FAVOURITE DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {favourites.length === 0 && (
          <span className={styles.card}>No favourite donuts yet.</span>
        )}
        {favourites
        .filter(fav => fav.donutId)
        .map(fav => (
          <div className={styles.card} key={fav._id}>
            <div>{fav.donutId?._id}</div>
            <div>{fav.donutId?.name}</div>
            <div>
              <Link href={{
                pathname: '/DetailPage',
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
