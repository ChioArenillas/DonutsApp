import React, { useState } from 'react'
import styles from "./Detail.module.css"
import { updateDonut } from '@/api/donutFetch'
import { useRouter } from 'next/router'
import { object, string, number } from 'yup'
import { ErrorMessage, Formik, Form, Field } from 'formik'


export default function EditComponent({ donut, closeEdit }) {

  const router = useRouter()
  const { id } = router.query


  const editDonut = async (opt) => {
    await updateDonut(id, JSON.stringify(opt))
    closeEdit()
  }
  const validationSchemaYup = object({
    name: string().required(),
    flavor: string().required(),
    price: number().required()
  })

  return (
    <div className={styles.componentContainer}>
      <div className={styles.title}>
        <h1>EDIT DONUT</h1>
      </div>
      <div className={styles.card}>
        <Formik
          initialValues={{
            name: donut.name,
            flavor: donut.flavor,
            price: donut.price
          }}
          onSubmit={editDonut} validationSchemaYup={validationSchemaYup}>
          {
            ({ }) => (<Form className={styles.componentContainer}>
              <div>
                <label>New Name: </label>
                <Field type='text' name='name' placeholder={donut.name}></Field>
                <ErrorMessage name='name' component='div' />
              </div>
              <div>
                <label>New Flavor: </label>
                <Field type='text' name='flavor' placeholder={donut.flavor}></Field>
                <ErrorMessage name='flavor' component='div' />
              </div>
              <div>
                <label>New Price: </label>
                <Field type='number' name='price' placeholder={donut.price}></Field>
                <ErrorMessage name='price' component='div' />
              </div>
              <div className={styles.btnSection}>
              <button type='submit' className={styles.smallBtn}>Save</button>
              <button type='button' className={styles.smallBtn} onClick={closeEdit}>Cancel</button>
</div>
            </Form>)
          }
        </Formik>
      </div>

    </div>
  )
}


