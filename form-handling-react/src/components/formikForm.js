import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.username) {
          errors.username = "Required";
        }

        if (!values.email) {
          errors.email = "Required";
        }

        if (!values.password) {
          errors.password = "Required";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik User Registered:", values);
        resetForm();
      }}
    >
      <Form>
        <h2>Register (Formik Form)</h2>

        <div>
          <Field type="text" name="username" placeholder="Username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
