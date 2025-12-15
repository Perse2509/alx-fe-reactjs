import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const FormikForm = () => {
const initialValues = {
username: "",
email: "",
password: "",
};


const validationSchema = Yup.object({
username: Yup.string().required("Username is required"),
email: Yup.string()
.email("Invalid email address")
.required("Email is required"),
password: Yup.string()
.min(6, "Password must be at least 6 characters")
.required("Password is required"),
});


const handleSubmit = (values, { resetForm }) => {
// Mock API call
console.log("User Registered with Formik:", values);
resetForm();
};


return (
<Formik
initialValues={initialValues}
validationSchema={validationSchema}
onSubmit={handleSubmit}
>
<Form>
<h2>Register (Formik Form)</h2>


<div>
<Field name="username" placeholder="Username" />
<ErrorMessage name="username" component="p" />
</div>


<div>
<Field name="email" type="email" placeholder="Email" />
<ErrorMessage name="email" component="p" />
</div>
<div>
<Field name="password" type="password" placeholder="Password" />
<ErrorMessage name="password" component="p" />
</div>


<button type="submit">Register</button>
</Form>
</Formik>
);
};


export default FormikForm;