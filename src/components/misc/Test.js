import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import * as yup from 'yup'
import firestore from "../config/Fire.js";
import { toast } from 'react-toastify';
import { Grid, Row, Col } from 'react-flexbox-grid';

const formSchema = yup.object().shape({
    title: yup
        .string()
        .required("A title is required."),
    author: yup
        .string(),
    date: yup
        .string(),
    body: yup
        .string(),
    pdfUrl: yup
        .string(),
    status: yup
        .string(),
    category: yup
        .string()
        .required("A category tag is required."),
    issue: yup
        .string()
        .required("An issue tag is required."),
    
})

const initialFormState = {
  title: "",
  author: "",
  date: "",
  body: "",
  pdfUrl: "",
  status: "",
  category: "",
  issue: "",
};

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.addArticle = this.addArticle.bind(this);
        this.state = {
             
        }
    }

    componentDidMount() {
        
    }
    
    addArticle(values){
        var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
        var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified

        var localUrl =  `/issues/${values.issue}/${values.category}/${titleCleaned}`

        firestore.collection("articles").doc(`${titleCleaned}`).set({
            title: values.title,
            author: values.author,
            date: values.date, //change this to a calender set for user
            body: values.body,
            pdfUrl: values.pdfUrl,
            status: values.status,
            category: values.category,
            issue: values.issue,
            localUrl: localUrl
        })
        .then(function() {
            toast.success("Article added successfully!");
        })
        .catch(function(error) {
            toast.error("Error writing document: ", error);
        });
      }

    render() {
        return (
            <div className="wrapper">
                <h1>Testing Page</h1>
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addArticle(values);
                        actions.resetForm()
                    }}
                    validationSchema={formSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                            {/* Row 1 */}
                            <Row>
                                <Col xs={12} sm={6}>
                                    <label htmlFor="title">Title: </label>
                                    <Field
                                        type="title"
                                        placeholder="The Greatest Finding Ever"
                                        className="box"
                                        onChange={props.handleChange}
                                        name="title"
                                        value={props.values.title}
                                    />
                                    <br/>
                                    {props.errors.title && props.touched.title ? (
                                        <span className="red">{props.errors.title}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                            </Row>

                            {/* Row 2 */}
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <label htmlFor="author">Author: </label>
                                    <Field
                                        type="text"
                                        placeholder="John Doe"
                                        className="box"
                                        onChange={props.handleChange}
                                        name="author"
                                        value={props.values.author}
                                    />
                                    <br/>
                                    {props.errors.author && props.touched.author ? (
                                        <span className="red">{props.errors.author}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <label htmlFor="date">Date: </label>
                                    <Field
                                        type="text"
                                        placeholder="September 25, 2019"
                                        className="box"
                                        onChange={props.handleChange}
                                        name="date"
                                        value={props.values.date}
                                    />
                                    <br/>
                                    {props.errors.date && props.touched.date ? (
                                        <span className="red">{props.errors.date}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                            </Row>

                            {/* Row 3 */}
                            <Row>
                                <Col xs={12}>
                                    {/* Make this a markdown field */}
                                    <label htmlFor="body">Body: </label>
                                    <Field
                                        component="textarea"
                                        placeholder="This can be a simple body of text."
                                        className="box"
                                        onChange={props.handleChange}
                                        name="body"
                                        value={props.values.body}
                                    />
                                    <br/>
                                    {props.errors.body && props.touched.body ? (
                                        <span className="red">{props.errors.body}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                            </Row>  

                            {/* Row 4 */}
                            <Row>
                                <Col xs={12} sm={6}>
                                    <label htmlFor="pdfUrl">Google Drive PDF URL: </label>
                                    <Field
                                        type="text"
                                        placeholder="https://drive.google.com/file/d/1eqNFnV8Df8ODN-hB4ZtAYe_OWyE3igeE"
                                        className="pdfUrl"
                                        onChange={props.handleChange}
                                        name="pdfUrl"
                                        value={props.values.pdfUrl}
                                    />
                                    <br/>
                                    {props.errors.pdfUrl && props.touched.pdfUrl ? (
                                        <span className="red">{props.errors.pdfUrl}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                            </Row>  
                            
                            {/* Row 5 */}
                            <Row>
                                <Col xs={12} sm={6} md={4}>
                                    <label htmlFor="issue">Issue: </label>
                                    <Field
                                        component="select" 
                                        onChange={props.handleChange}
                                        name="issue"
                                        value={props.values.issue}
                                        >
                                        <option defaultValue value="">No issue selected</option> 
                                        <option value="economic-development">Economic Development</option>
                                        <option value="education">Education</option>
                                        <option value="infrastructure">Infrastructure</option>
                                        <option value="resident-reflections">Resident Reflections</option>
                                        <option value="more">More</option>
                                    </Field>
                                    <br/>
                                    {props.errors.issue && props.touched.issue ? (
                                        <span className="red">{props.errors.issue}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <label htmlFor="category">Category: </label>
                                    <Field
                                        component="select" 
                                        onChange={props.handleChange}
                                        name="category"
                                        value={props.values.category}
                                        >
                                        <option defaultValue value="">No category selected</option> 
                                        <option value="facts">Facts</option>
                                        <option value="stories-opinions">Stories &amp; Opinions</option>
                                        <option value="solutions">Solutions</option>
                                    </Field>
                                    <br/>
                                    {props.errors.category && props.touched.category ? (
                                        <span className="red">{props.errors.category}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                    <label htmlFor="status">Status: </label>
                                    <Field
                                        type="text"
                                        placeholder="live or draft"
                                        className="box"
                                        onChange={props.handleChange}
                                        name="status"
                                        value={props.values.status}
                                    />
                                    <br/>
                                    {props.errors.status && props.touched.status ? (
                                        <span className="red">{props.errors.status}</span>
                                    ) : (
                                        ""
                                    )}
                                    <br/>
                                </Col>
                            </Row>  
                        </Grid>
                        <div className="center-text">
                            <button
                                type="submit"
                                className="m-btn"
                                disabled={!props.dirty && !props.isSubmitting}
                                >
                            Submit Article
                            </button>
                        </div>
                        </form>
                    )}
                </Formik>
            </div>
        )
    }
}