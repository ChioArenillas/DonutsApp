import React, { useEffect, useState } from 'react'
import styles from "./Detail.module.css"
import { getDonut, deleteDonut } from '@/api/donutFetch'
import { useRouter } from 'next/router'
import EditComponent from './EditComponent'

export default function DetailsComponent() {
  const router = useRouter()
  const { id } = router.query

  const [donut, setDonut] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    if (!id) return
    const loadDonut = async () => {
      const donutAux = await getDonut(id)
      setDonut(donutAux.data)
    }
    loadDonut()
  }, [id])

  const handleCloseEdit = async () =>{
    const donutAux = await getDonut(id)
    setDonut(donutAux.data)
    setIsEditing(false)
  }
  const initUpdateDonut = () => {
    setIsEditing(true)
  }
  const handlerDeleteDonut = async () => {
    await deleteDonut(id)
    setDonut(null)
    router.back()
  }

  return (
    <div className={styles.component}>
      <div className={styles.title}>
        <h1>DETAILS</h1>
      </div>
      {!isEditing ?
        <div className={styles.card}>
          <div>
            <span>ID:  </span>
            <span>{donut?._id}</span>
          </div>
          <div>
            <span>NAME:  </span>
            <span>{donut?.name}</span>
          </div>
          <div>
            <span>FLAVOUR:  </span>
            <span>{donut?.flavor}</span>
          </div>
          <div>
            <span>PRICE:  </span>
            <span>{donut?.price}</span>
          </div>
          <div className={styles.btnSection}>
            <div>
              <button className={styles.smallBtn} onClick={initUpdateDonut}>Edit Donut</button>
            </div>
            <div>
              <button className={styles.smallBtn} onClick={handlerDeleteDonut}>Delete Donut</button>
            </div>
          </div>
        </div>
        :
        <EditComponent donut={donut} closeEdit={handleCloseEdit} />
      }
    </div>
  )
}