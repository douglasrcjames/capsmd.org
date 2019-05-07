import React, { Component } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup'
import firestore from "../config/Fire.js";
import { toast } from 'react-toastify';

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email.")
    .required("Email is Required."),
})

const initialFormState = {
  email: "",
};

class Subscribe extends Component {
  constructor(props) {
    super(props);
    this.subscribe = this.subscribe.bind(this);

    this.state = {};
  }

  subscribe(email){
    firestore.collection('subscribers').add({
        email: email,
        timestamp: Date.now(),
        subscribed: true
    }).then(toast.success("Thanks for subscribing!"));
  }
  
  render() {
    return (
    <div>
        <Formik
          initialValues={initialFormState}
          onSubmit={(values, actions) => {
            this.subscribe(values.email)
            console.log(values);
          }}
          validationSchema={formSchema}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Field
                type="email"
                placeholder="Enter email"
                className="box m-width"
                onChange={props.handleChange}
                name="email"
                value={props.values.email}
              />
              {props.errors.email && props.touched.email ? (
                <span className="red">{props.errors.email}</span>
              ) : (
                ""
              )}
              <br/>
              <button
                type="submit"
                className="s-btn s-margin"
                disabled={!props.dirty && !props.isSubmitting}
              >
                Subscribe
              </button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

export default Subscribe;
