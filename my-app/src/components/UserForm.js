import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';
import { Link } from "react-router-dom";

const UserForm = ({ isSubmitting, values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <header className="App-header1">
      <div className="card">
    <Form>
        <h1>Become a Member</h1>
      <div>
        {touched.name && errors.name && <p>{errors.name}</p>}
        <Field type='text' name='name' placeholder='Name' />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>
      <div>
        {touched.phone && errors.phone && <p>{errors.phone}</p>}
        <Field type='phone' name='phone' placeholder='Phone Number' />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      <label>
        <Field type='checkbox' name='tos' checked={values.tos} required />
        Agree to terms of service
      </label>
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>

    </Form>
</div>
<p>Already a member? <Link to='/Login'>Sign in</Link></p>
    </header>
  );
};

export default withFormik({
  mapPropsToValues: ({ name, email, phone, password, tos }) => {
    return {
      name: name || '',
      email: email || '',
      phone: phone || '',
      password: password || '',
      tos: tos || false
    };
  },

  validationSchema: yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .required('Email is required')
      .email('Email not valid'),
     phone: yup
      .string()
      .required('Phone Number is required'),
      
    password: yup
      .string()
      .min(8, 'Password must be 8 characters or longer')
      .required('Password is required')
  }),

  handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    axios
      .post('https://reqres.in/api/users', values)
      .then(res => {
        setStatus(res.data);

        resetForm();
        setSubmitting(false);
      })
      .catch(err => {
        console.log(err);
      });
  }
})(UserForm);