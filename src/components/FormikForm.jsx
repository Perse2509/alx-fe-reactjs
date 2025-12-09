import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password required")
});

function FormikForm() {
  return (
    <div style={{ maxWidth: "450px", margin: "2rem auto" }}>
      <h2>Registration Form (Formik + Yup)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik submitting...", values);
          setTimeout(() => {
            alert("Registered successfully with Formik!");
            resetForm();
          }, 800);
        }}
      >
        <Form>
          <label>Username</label>
          <Field name="username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <label>Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <label>Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormikForm;
