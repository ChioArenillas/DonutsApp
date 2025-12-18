import React, { useState } from 'react'
import styles from "./Favourite.module.css"


export default function FavouritesComponent(props) {

  const {favourites, setFavourites} = props

  const deleteFavourite = (donut) => {
    setFavourites(favourites.filter(f => f.id !== donut.id));
  };

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>FAVOURITE DONUTS</h1>
      </div>
      <div className={styles.cardList}>
        {
          !favourites && (
            <span className={styles.card}>Not favourites Donuts yet. Add some.</span>
          )
        }
        {
          favourites && favourites.map((donut) => {
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
              <button className={styles.smallBtn} onClick={() => deleteFavourite(donut)}>Remove from Favourites</button>
            </div>
          })
        }
      </div>
    </div>
  )
}
