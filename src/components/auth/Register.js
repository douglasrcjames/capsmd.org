import React, { Component } from "react";
import { toast } from "react-toastify";
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Formik, Field } from 'formik';
import { withRouter, Link } from 'react-router-dom';

import { firebase, firestore, fire } from "../../Fire.js";
import { registerSchema } from "../../utilities/formSchemas"

class Register extends Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  signUp(values) {
    if(values.adminPassword === process.env.REACT_APP_CAPS_PASSWORD){
      if (values.confirmPassword === values.password) {
        window.recaptchaVerifier = new fire.auth.RecaptchaVerifier('recaptcha', {
          'callback': (response) => {
            // reCAPTCHA solved, allow Ask.
            firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
              .then(function(userData){
                  // No existing user, now add to Firestore
                  var currentUser = firebase.auth().currentUser;
                  currentUser.updateProfile({
                    displayName: (values.firstName + " " + values.lastName)
                  }).then(function() {
                    console.log("Successfully added display name to Firebase.");
                  }).catch(function(error) {
                    console.error("Error adding your display name to database: ", error);
                    toast.error("Error adding your display name to database" + error);
                    window.recaptchaVerifier.clear()
                  });
                  firestore.collection("users").doc(userData.user.uid).set({
                      firstName: values.firstName,
                      lastName: values.lastName,
                      email: values.email,
                      createdAt: Date.now(),
                  }, { merge: true }).then(function() {
                      console.log("Successful write to Firestore.");
                      this.props.history.push("/cms/signing-in");
                  }.bind(this)).catch(function(error) {
                      console.error("Error adding document: ", error);
                      toast.error("Error adding document: " + error);
                      window.recaptchaVerifier.clear()
                  });
              }.bind(this)).catch(function(error) {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log("Error registering: " + errorCode + ": " + errorMessage)
                  toast.error("Error registering: " + errorMessage)
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
      } else {
        toast.error("Passwords must match!");
      }
    } else {
      toast.error("Please ask the administrator for the CAPS admin password.");
    }
    
  }

  render() {
    const initialFormState = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };

    return (
      <div className="l-container">
        <h1>Register</h1>
        <Formik
          initialValues={initialFormState}
          validationSchema={registerSchema}
          onSubmit={(values, actions) => {
            this.signUp(values)
          }}
        >
          {props => (
            <form onSubmit={props.handleSubmit}>
              <Grid fluid>
                <Row>
                  <Col xs={12} sm={6}>
                    <label htmlFor="firstName">First name: </label>
                    <Field
                      type="text"
                      onChange={props.handleChange}
                      name="firstName"
                      value={props.values.firstName}
                      placeholder="John"
                    />
                    {props.errors.firstName && props.touched.firstName ? (
                      <span className="yup-error">{props.errors.firstName}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col xs={12} sm={6}>
                    <label htmlFor="lastName">Last name: </label>
                    <Field
                      type="text"
                      onChange={props.handleChange}
                      name="lastName"
                      value={props.values.lastName}
                      placeholder="Doe"
                    />
                    {props.errors.lastName && props.touched.lastName ? (
                      <span className="yup-error">{props.errors.lastName}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <label htmlFor="email">Email: </label>
                    <Field
                      type="email"
                      onChange={props.handleChange}
                      name="email"
                      value={props.values.email}
                      placeholder="john_doe@email.com"
                    />
                    {props.errors.email && props.touched.email ? (
                      <span className="yup-error">{props.errors.email}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <label htmlFor="password">Password: </label>
                    <Field
                      type="password"
                      onChange={props.handleChange}
                      name="password"
                      value={props.values.password}
                      placeholder="*********************"
                    />
                    {props.errors.password && props.touched.password ? (
                      <span className="yup-error">{props.errors.password}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                  <Col xs={12} md={6}>
                    <label htmlFor="confirmPassword">Confirm password: </label>
                    <Field
                      type="password"
                      onChange={props.handleChange}
                      name="confirmPassword"
                      value={props.values.confirmPassword}
                      placeholder="*********************"
                    />
                    {props.errors.confirmPassword && props.touched.confirmPassword ? (
                      <span className="yup-error">{props.errors.confirmPassword}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <label htmlFor="adminPassword">CAPS admin password: </label>
                    <Field
                      type="password"
                      onChange={props.handleChange}
                      name="adminPassword"
                      value={props.values.adminPassword}
                      placeholder="*********************"
                    />
                    {props.errors.adminPassword && props.touched.adminPassword ? (
                      <span className="yup-error">{props.errors.adminPassword}</span>
                    ) : (
                      ""
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="center-text" xs={12}>
                    <button
                        type="submit"
                        className="m-btn  m-margin-t"
                        disabled={!props.dirty && !props.isSubmitting}>
                      Submit
                    </button>
                  </Col>
                </Row>
                <Row>
                  <Col className="center-text" xs={12}>
                    <br/>
                    <div className="center-text">
                      <Link to="/cms/sign-in" className="grey-text-btn s-padding-b">
                        Already have an account?
                      </Link>
                    </div>
                  </Col>
                </Row>
                <Row className="s-padding-t">
                  <Col className="center-text" xs={12}>
                    <div id="recaptcha" className="p-container recaptcha"></div>
                  </Col>
                  </Row>
              </Grid>
            </form>
          )}
        </Formik>
          
      </div>
    );
  }
}

export default withRouter(Register);
