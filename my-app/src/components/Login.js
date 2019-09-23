import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';
import * as yup from 'yup';

const Login = ({ isSubmitting, values, errors, touched, status }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
    }
  }, [status]);

  return (
    <header className="App-header2">
      <div className="card2">
    <Form>
        <h1>Sign in to see your schedule</h1>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type='email' name='email' placeholder='Email' />
      </div>
      
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type='password' name='password' placeholder='Password' />
      </div>
      
      <button disabled={isSubmitting} type='submit'>
        Submit
      </button>

    </Form>
    </div>
      </header>
  );
};

export default withFormik({
  mapPropsToValues: ({  email,  password  }) => {
    return {
      
      email: email || '',
    
      password: password || '',
    
    };
  },

  validationSchema: yup.object().shape({
    
    email: yup
      .string()
      .required('Email is required')
      .email('Email not valid'),
     
       password: yup
      .string()
      
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
})(Login);