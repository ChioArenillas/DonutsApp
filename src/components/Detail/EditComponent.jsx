import React, { useState } from 'react'
import styles from "./Detail.module.css"
import { updateDonut } from '@/api/donutFetch'
import { useRouter } from 'next/router'


export default function EditComponent(donut) {

  const router = useRouter()
  const { id } = router.query

  const [name, setName] = useState('')
  const [flavor, setFlavor] = useState('')
  const [price, setPrice] = useState('')
  const [successMessage, setSuccessMessage] = useState('')


  const handlerOnChangeName = (e) => {
    setName(e.target.value)
  }
  const handlerOnChangeFlavor = (e) => {
    setFlavor(e.target.value)
  }  
  const handlerOnChangePrice = (e) => {
    setPrice(e.target.value)
  }

  const saveDonut = async () => { 
    await updateDonut (id, JSON.stringify({
      name,
      flavor,
      price
    }))
    setSuccessMessage('Donut has been edited')
  }

  return (
    <div className={styles.componentContainer}>
        <div className={styles.title}>
        <h1>EDIT DONUT</h1>
        </div>
        <div className={styles.card}>
        <div>
          <label>New Name: </label>
          <input type="text" value={name} onChange={handlerOnChangeName} placeholder={donut.name}/>
        </div>
        <div>
          <label>New Flavor: </label>
          <input type="text" value={flavor} onChange={handlerOnChangeFlavor} placeholder={donut.flavor}/>
        </div>
        <div>
          <label>New Price: </label>
          <input type="number" value={price} onChange={handlerOnChangePrice} placeholder={donut.price}/>
        </div>
        <div>
          <button className={styles.smallBtn} onClick={saveDonut}>Save</button>
        </div>
        {successMessage && (
                  <p className={styles.successMessage}>{successMessage}</p>
        )}
        </div>
    </div>
  )
}
