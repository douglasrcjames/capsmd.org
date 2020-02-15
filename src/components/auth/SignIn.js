import React, { Component } from 'react'
import { toast } from "react-toastify";
import { Formik, Field } from "formik";
import { withRouter, Link } from 'react-router-dom';

import { firebase, fire } from "../../Fire.js";
import { signInSchema } from "../../utilities/formSchemas"

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    handleSubmit(e) {
      e.preventDefault();
    }
  
    signIn(values) {
      window.recaptchaVerifier = new fire.auth.RecaptchaVerifier('recaptcha', {
        'callback': (response) => {
          // reCAPTCHA solved, allow signIn.
          firebase.auth().signInWithEmailAndPassword(values.email, values.password)
          .then(function(user) {
              console.log("Sign in success!")
              this.props.history.push("/cms/signing-in");
              window.location.reload();
          }.bind(this))
          .catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log("Error signing in: " + errorCode + ": " + errorMessage)
              toast.error("Error signing in: " + errorMessage)
              window.recaptchaVerifier.clear()
          });
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          toast.error("Please solve the reCAPTCHA again.")
          window.recaptchaVerifier.clear()
        }
      })
      window.recaptchaVerifier.render()
    }

  render() {
    const initialFormState = {
      email: "",
      password: ""
    }; 
    
    return (
        <div className="m-container">
          <h1>Sign in</h1>
          <Formik
            initialValues={initialFormState}
            validationSchema={signInSchema}
            onSubmit={(values, actions) => {
                this.signIn(values);
            }}
            >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <label htmlFor="email">Email: </label>
                <Field
                  type="email"
                  onChange={props.handleChange}
                  name="email"
                  value={props.values.email}
                  placeholder="john_doe@email.com" />
                {props.errors.email && props.touched.email ? (
                    <span className="yup-error">{props.errors.email}</span>
                ) : (
                    ""
                )}
                <br />
                <label htmlFor="password">Password: </label>
                <Field
                  type="password"
                  onChange={props.handleChange}
                  name="password"
                  value={props.values.password}
                  placeholder="*********************" />
                {props.errors.password && props.touched.password ? (
                    <span className="yup-error">{props.errors.password}</span>
                ) : (
                    ""
                )}
                <br />
                <div className="center-text">
                    <br />
                    <button
                      type="submit"
                      className="m-btn"
                      disabled={!props.dirty && !props.isSubmitting}>
                      Sign in
                    </button>
                </div>
                <br/>
                <div className="center-text">
                  <Link to="/cms/register" className="grey-text-btn s-padding-b">
                    Don't have an account?
                  </Link>
                </div>
                <br/>
                <div id="recaptcha" className="p-container recaptcha"></div>
                <br/>
              </form>
            )}
          </Formik>
        </div>
      )
  }
}

export default withRouter(SignIn);
