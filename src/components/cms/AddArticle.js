import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FileUploader from "react-firebase-file-uploader";
import ReactQuill from 'react-quill';

import { firestore, firebase } from "../../Fire.js";
import { addRichTextArticleSchema, addPdfArticleSchema } from '../../utilities/formSchemas'
import { checkFile } from '../../utilities/misc.js';

export default class AddArticle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            quillShown: false,
            pdfShown: false,
            headerUrl: "",
            isUploading: false,
            progress: 0,
            picPath: '',
        }

        this.modules = {
            toolbar: [
                [{ 'header': '1'}, {'header': '2'}],
                [{size: []}],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, 
                {'indent': '-1'}, {'indent': '+1'}],
                [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
                ['link', 'image'],
                ['clean']
            ],
            // TODO: this is still adding <p><br></p> for line breaks!
            clipboard: {
              matchVisual: false,
            }
          }
        
        this.formats = [
            'header', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'align'
        ]
        
    }

    // TODO: add ability to add image to header
    // TODO: on carousel? recents preview? issue index preview?

    
    addRichTextArticle(values){
        var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
        var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified

        var ref = firestore.collection("articles").doc(`${titleCleaned}`)
        ref.get().then(doc => {
            if(doc.exists){
                toast.error("An article with a similar title exists");
            } else {
                if(this.state.headerUrl){
                    var localUrl = `/issues/${values.issue}/${values.category}/${titleCleaned}`
                    ref.set({
                        title: values.title,
                        author: values.author,
                        date: values.date, // TODO: change this to a calender set for user
                        body: values.body,
                        status: values.status,
                        category: values.category,
                        issue: values.issue,
                        headerUrl: this.state.headerUrl,
                        localUrl: localUrl,
                        created: Date.now()
                    }).then(function() {
                        toast.success("Rich text article added successfully!");
                    }).catch(function(error) {
                        toast.error("Error writing document: ", error);
                    });
                } else {
                    toast.error("Please upload a header image!")
                }  
            }
        })

      }

      addPdfArticle(values){
        var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
        var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified

        var ref = firestore.collection("articles").doc(`${titleCleaned}`)
        ref.get().then(doc => {
            if(doc.exists){
                toast.error("An article with a similar title exists");
            } else {
                if(this.state.headerUrl){
                    var localUrl = `/issues/${values.issue}/${values.category}/${titleCleaned}`
                    ref.set({
                        title: values.title,
                        pdfUrl: values.pdfUrl,
                        status: values.status,
                        category: values.category,
                        issue: values.issue,
                        localUrl: localUrl,
                        headerUrl: this.state.headerUrl,
                        created: Date.now()
                    }).then(function() {
                        toast.success("PDF article added successfully!");
                    }).catch(function(error) {
                        toast.error("Error writing document: ", error);
                    });
                } else {
                    toast.error("Please upload a header image!")
                }  
            }
        })

      }

    handleFileChange = e => {
        if (e.target.files[0]) {
            if(checkFile(this.state.pdfShown)){
                const picPath = e.target.files[0];
                this.setState(() => ({ picPath }));
            } else {
                toast.error("Please upload a picture file format like png, jpeg, jpg, bmp.");
            }
        }
    };

    uploadHeaderUrl() {
        if(this.state.picPath){
            this.fileUploader.startUpload(this.state.picPath)
        } else {
            toast.error("Choose a header picture first!");
        }
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

    handleProgress = progress => this.setState({ progress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error("Error handling upload: " + error);
        toast.error("Error handling upload: " + error);
    };

    deletePicPath(){
        this.setState(() => ({ picPath: "" }));
    }

    handleUploadSuccess = filename => {
        firebase.storage()
            .ref(`headers`)
            .child(filename)
            .getDownloadURL()
            .then((url) => {       
                this.setState({  
                    headerUrl: url,
                    progress: 100, 
                    isUploading: false
                });
            });
        }
    
    showPdf(){
        this.setState({
            pdfShown: true,
            author: "",
            body: "",
        })
    }

    showQuill(){
        this.setState({
            pdfShown: false,
            pdfUrl: ""
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
                <p>
                    Please spell and capitalize everything how you would want it to be seen. 
                    Remember that the Title, Date, and Author will be shown in the final article so do not include them in the Body section!
                </p>
                <Link to="/cms/home"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to CMS home</button></Link>
                <br/>
                <br/>
                <hr/>
                <br/>
                <Grid fluid>
                    {/* Row 1 */}
                    <Row center="xs">
                        <Col xs={12} sm={6}>
                            <button className={this.state.pdfShown ? "s-btn-inv" : "s-btn"} onClick={()=>this.showQuill()}> <i className="fas fa-text-height" />&nbsp; Rich Text Article</button>
                        </Col>
                        <Col xs={12} sm={6}>
                            <button className={this.state.pdfShown ? "s-btn" : "s-btn-inv"} onClick={()=>this.showPdf()}> <i className="fas fa-file-pdf" />&nbsp; PDF Article</button>
                        </Col>
                    </Row>
                </Grid>

                {/* // Rich Text Article // */}
                <div className={this.state.pdfShown ? "hide" : ""}>
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values) => {
                        this.addRichTextArticle(values);
                    }}
                    validationSchema={addRichTextArticleSchema}
                    className={this.state.pdfShown ? "" : "hide"}
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
                                    <label htmlFor="body">Body: </label>
                                    <Field name="body">
                                        {({ field }) => 
                                        <ReactQuill 
                                            value={field.value} 
                                            modules={this.modules}
                                            formats={this.formats}
                                            placeholder="This can be a simple or complex body of text with links to webpages, bolded text, headers, and more!"
                                            onChange={field.onChange(field.name)} />
                                        }
                                    </Field>
                                    <br/>
                                    {props.errors.body && props.touched.body ? (
                                        <span className="red">{props.errors.body}</span>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>  
                            
                            {/* Row 4 */}
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
                            {/* Row 6 */}
                            <Row>
                                { !this.state.headerUrl && (
                                    <>
                                    <Col xs={12} sm={6}>
                                        <label className="s-btn-inv">
                                            <i className="fa fa-upload"></i> Choose a header photo
                                            <FileUploader
                                                name="file-upload1"
                                                id="file-upload1"
                                                hidden
                                                accept="image/*"
                                                randomizeFilename
                                                storageRef={firebase.storage().ref(`headers`)}
                                                onChange={this.handleFileChange}
                                                ref={instance => { this.fileUploader = instance; } }
                                                onUploadStart={this.handleUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleUploadSuccess}
                                                onProgress={this.handleProgress}
                                            />
                                        </label>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        {this.state.isUploading && <p>Progress: {this.state.progress}%</p>}
                                        <br/>
                                        {this.state.picPath && (
                                            <>
                                                <button type="button" className="s-btn-inv" onClick={() => this.uploadHeaderUrl()}>Upload choice</button>
                                                &nbsp; &nbsp;
                                                <button type="button" className="s-btn-danger-inv" onClick={() => this.deletePicPath()}>Delete choice</button>
                                                <br/><br/>
                                                <img className="responsive square medium" alt="profile" src={URL.createObjectURL(this.state.picPath)} />
                                            </>
                                        )}
                                    </Col>
                                    </>
                                )}
                                { this.state.headerUrl && (
                                    <span className="blue"><i className="fa fa-check"></i> Header uploaded!</span>
                                )}
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

                {/* // PDF Article // */}
                <div className={this.state.pdfShown ? "" : "hide"}>
                <Formik
                    initialValues={initialFormState}
                    onSubmit={(values, actions) => {
                        this.addPdfArticle(values);
                    }}
                    validationSchema={addPdfArticleSchema}
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

                            {/* Row 4 */}
                            <Row>
                                <Col xs={12}>
                                    <label htmlFor="pdfUrl">Google Drive PDF URL: </label>
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
                            {/* Row 6 */}
                            <Row>
                                { !this.state.headerUrl && (
                                    <>
                                    <Col xs={12} sm={6}>
                                        <label className="s-btn-inv">
                                            <i className="fa fa-upload"></i> Choose a header photo
                                            <FileUploader
                                                name="file-upload2"
                                                id="file-upload2"
                                                hidden
                                                accept="image/*"
                                                randomizeFilename
                                                storageRef={firebase.storage().ref(`headers`)}
                                                onChange={this.handleFileChange}
                                                ref={instance => { this.fileUploader = instance; } }
                                                onUploadStart={this.handleUploadStart}
                                                onUploadError={this.handleUploadError}
                                                onUploadSuccess={this.handleUploadSuccess}
                                                onProgress={this.handleProgress}
                                            />
                                        </label>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        {this.state.isUploading && <p>Progress: {this.state.progress}%</p>}
                                        <br/>
                                        {this.state.picPath && (
                                            <>
                                                <button type="button" className="s-btn-inv" onClick={() => this.uploadHeaderUrl()}>Upload choice</button>
                                                &nbsp; &nbsp;
                                                <button type="button" className="s-btn-danger-inv" onClick={() => this.deletePicPath()}>Delete choice</button>
                                                <br/><br/>
                                                <img className="responsive square medium" alt="profile" src={URL.createObjectURL(this.state.picPath)} />
                                            </>
                                        )}
                                    </Col>
                                    </>
                                )}
                                { this.state.headerUrl && (
                                    <span className="blue">Header uploaded!</span>
                                )}
                                
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
            </div>
        )
    }
}
