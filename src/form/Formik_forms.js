import React from "react";
import { useFormik, Formik, Field, Form } from "formik";
import * as yup from "yup";

const Formik_forms = () => {
 

  return (
    <div>
      <h2>Formik Forms</h2>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
        }}
        validationSchema={yup.object({
          firstname: yup.string().required("First name is required"),
          lastname: yup.string().required("last name is required"),
          email: yup
            .string()
            .required("email is required")
            .email("enter valid email"),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors }) => (
          <Form>
            <label>First Name</label>
            <Field type="text" name="firstname" />

 
            {errors.firstname}
            <label>Last Name</label>
            <Field type="text" name="lastname" />
  
            {errors.lastname}
            <label>Email</label>
            <Field type="text" name="email" />
   
            {errors.email}
            <button>Add</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formik_forms;
