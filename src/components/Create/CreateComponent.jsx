import React, { useState } from 'react'
import styles from "./Create.module.css"
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { createDonut } from '@/api/donutFetch'
import { object, string, number } from 'yup'


export default function CreateComponent() {

const [successMessage, setSuccessMessage] = useState('')

const newDonut = async (opt, {resetForm}) => {
  await createDonut(opt)
  resetForm()
  setSuccessMessage('New Donut has been added to the list')
 }
const validationSchemaYup = object({
  name: string().required(),
  flavor: string().required(),
  price: number().required(),
})


  return (
    <div className={styles.component}>
        <div className={styles.title}>
        <h1>CREATE NEW DONUT</h1>
        </div>
        <div className={styles.card}>
          <Formik 
          initialValues={{
            name: '',
            flavor: '',
            price: ''
          }}
          onSubmit={newDonut} validationSchema={validationSchemaYup}>
            {
              ({ }) => (<Form className={styles.componentContainer}>
                <div>
                  <span>Name: </span>
                  <Field type='text' name='name' ></Field>
                  <ErrorMessage name='name' component='div' />
                </div>                
                <div>
                  <span>Flavor: </span>
                  <Field type='text' name='flavor' ></Field>
                  <ErrorMessage name='flavor' component='div' />
                </div>                
                <div>
                  <span>Price: </span>
                  <Field type='number' name='price' ></Field>
                  <ErrorMessage name='price' component='div' />
                </div>
                <button type='submit' className={styles.smallBtn}>SAVE</button>
                <div>
                {successMessage && (
                  <p className={styles.successMessage}>{successMessage}</p>
                )}
                </div>
              </Form>)
            }
          </Formik>
        </div>
    </div>
  )
}
