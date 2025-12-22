import React, { useState } from 'react'
import styles from "./Create.module.css"
import { ErrorMessage, Field, Formik, Form } from 'formik'
import { createDonut } from '@/store/donuts/donutsThunks'
import { object, string, number } from 'yup'
import { useDispatch } from 'react-redux'


export default function CreateComponent() {

  const dispatch = useDispatch()
  const [successMessageVisible, setSuccessMessageVisible] = useState(false)

  const validationSchemaYup = object({
    name: string().required(),
    flavor: string().required(),
    price: number().required(),
  })

  const handleCreateDonut = async (values, {resetForm}) => {
      const donutToCreate = {
      ...values,
      price: Number(values.price)
    }
      await dispatch(createDonut(donutToCreate))
        resetForm()
        setSuccessMessageVisible(true)
        setTimeout(() => setSuccessMessageVisible(false), 3000)
}

  return (
    <div>
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
            validationSchema={validationSchemaYup}
            onSubmit={handleCreateDonut}>
            <Form className={styles.componentContainer}>
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
                {successMessageVisible && (
                  <p className={styles.successMessage}>New Donut has been created</p>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}
