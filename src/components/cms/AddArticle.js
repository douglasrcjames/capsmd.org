import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import { Link } from 'react-router-dom'
import { firestore } from "../../Fire.js";
import { toast } from 'react-toastify';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { addArticleSchema } from '../../utilities/formSchemas'

export default class AddArticle extends Component {
    constructor(props) {
        super(props)
        this.addArticle = this.addArticle.bind(this);
    }

    // TODO: add ability to add image
    // TODO: body needs to do something?
    // TODO: on carousel? recents preview? issue index preview?

    
    addArticle(values){
        var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
        var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified

        var ref = firestore.collection("articles").doc(`${titleCleaned}`)
        ref.get().then(doc => {
        console.log("Exists?" + doc.exists); //true
            if(doc.exists){
                toast.error("An article with a similar title exists");
            } else {
                var localUrl = `/issues/${values.issue}/${values.category}/${titleCleaned}`
                ref.set({
                    title: values.title,
                    author: values.author,
                    date: values.date, //change this to a calender set for user
                    body: values.body,
                    pdfUrl: values.pdfUrl,
                    status: values.status,
                    category: values.category,
                    issue: values.issue,
                    localUrl: localUrl,
                    created: Date.now()
                }).then(function() {
                    toast.success("Article added successfully!");
                }).catch(function(error) {
                    toast.error("Error writing document: ", error);
                });
            }
        })

      }

    render() {
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

        return (
            <div className="wrapper">
                <h1>Add Article</h1>
                <p>Please spell and capitalize everything how you would want it to be seen.</p>
                <Link to="/cms/home"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to CMS home</button></Link>
                <br/>
                <br/>
                <hr/>
                <br/>
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addArticle(values);
                    }}
                    validationSchema={addArticleSchema}
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
                                <Col xs={12}>
                                    <label htmlFor="pdfUrl">Google Drive PDF URL: </label>
                                    <br/>
                                    <span className="grey s-text">* make sure this URL follows the placeholder value format (i.e. no '/view' appended)</span>
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
                                        <option value="governance">Governance</option>
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
                        <div className="center-text s-margin-t">
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
