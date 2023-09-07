import React from 'react';
import { Formik } from 'formik';

const Form = () => {
  return (
    <div>
      <h1>Детали заказа</h1>
      <hr/>
      <br/>
      <Formik
        initialValues={{order: ''}}
        validate={values => {
          const errors = {};
          if (!values.order) {
            errors.order = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.order)
          ) {
            errors.order = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="order"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.order}
            />
            {errors.order && touched.order && errors.order}
            <button type="submit" disabled={isSubmitting}>
              Заказать
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
