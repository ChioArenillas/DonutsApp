import React, { useEffect } from 'react'
import styles from "./List.module.css"
import Link from 'next/link'
import { addFavourite } from '@/store/favourites/favouritesThunks'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDonuts } from '@/store/donuts/donutsThunks'
import { fetchFavourites } from '@/store/favourites/favouritesThunks'

export default function ListComponent() {

  const dispatch = useDispatch()

  const donuts = useSelector(state => state.donuts.list)
  const favourites = useSelector(state => state.favourites.list)
  const loading = useSelector(state => state.donuts.loading)

  useEffect(() => {
    dispatch(fetchDonuts())
    dispatch(fetchFavourites())
  }, [dispatch])

  const handleAddFavourite = async (donutId) => {
    await dispatch(addFavourite(donutId))
    dispatch(fetchFavourites())
  }
  if (loading) return <p className={styles.text}>Loading donuts...</p>

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>ALL DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {
          donuts && donuts.map((donut) => {
            const isFavourite = favourites.some(fav => {
              return String(fav.donutId?._id) === String(donut?.id)
            })
            return <div className={styles.card} key={donut?.id}>
              <div>{donut.id}</div>
              <div>{donut.name}</div>
              <div>
                <Link href={{
                  pathname: '/DetailPage',
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
