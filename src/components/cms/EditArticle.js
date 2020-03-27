import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FileUploader from "react-firebase-file-uploader";
import { ReactDatez } from 'react-datez'
import "react-datez/dist/css/react-datez.css";

import { firestore, fire } from "../../Fire.js";
import { editRichTextArticleSchema, editPdfArticleSchema } from '../../utilities/formSchemas'
import { checkFile, chunkSubstr } from '../../utilities/misc.js';

class EditArticle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             article: "",
             headerUrl: "",
             isUploading: false,
             progress: 0,
             picPath: '',
        }

        this.modules = {
            toolbar: [
                [{'header': '2'}],
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

    componentDidMount(){
        firestore.collection("articles").doc(this.props.match.params.articleId).get().then((doc) => {
            if (doc.exists) {
                var docWithMore = Object.assign({}, doc.data());
                docWithMore.id = doc.id;
                if(Array.isArray(doc.data().body)){
                    docWithMore.body = doc.data().body.join('')
                }
                
                this.setState({
                    article: docWithMore
                })
            } else {
                console.log("No such document!");
                this.props.history.push("/cms/");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }


    deleteArticle(){
        if(window.confirm('Are you sure you want to delete this article?')){
            firestore.collection("articles").doc(this.props.match.params.articleId).delete().then(() => {
                this.props.history.push("/cms/");
                toast.success("Article successfully deleted!");
                console.log("Document successfully deleted!");
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });
        }
    }

    updateRichTextArticle(values){
        var dateValue = new Date(values.date).getTime();
        var catPass = false
        if(values.issue === "resident-reflections"){
            catPass = true;
        } else {
            if(values.category){
                catPass = true
            } else {
                catPass = false
                toast.error("If the Issue tag is not Resident Reflections then the Category must be set to something!")
            }
        }

        console.log("Updating body: ")
        console.log(values.body)

        // TODO: getting error: // FirebaseError: [code=invalid-argument]: The value of property "body" is longer than .
        // First test data size of string, if exceeds the 1048487 byte limit, 
        // then split into array of strings, then piece that back together on the render screen
       // Get total byte size to test
        var bodyByteSize = new Blob([values.body]).size;
        console.log("bodyByteSize: ")
        console.log(bodyByteSize)
        var bodyArray = null
        if(bodyByteSize > 1048400){
            console.error("Need to split up the body into arrays")

            // Prepare to split into N sized chunks, where the size of N is half the length of the body
            // ** might want to reduce this to a third or less
            // https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
            // https://stackoverflow.com/questions/4029109/javascript-regex-how-to-put-a-variable-inside-a-regular-expression
            bodyArray = chunkSubstr(values.body, 10)
        } else {
            bodyArray = [`${values.body}`]
        }

        console.log("bodyArray: ")
        console.log(bodyArray);
        if(catPass){
            firestore.collection("articles").doc(this.props.match.params.articleId).update({
                title: values.title,
                author: values.author,
                date: dateValue,
                body: bodyArray,
                status: values.status,
                category: values.category,
                issue: values.issue,
                localUrl: values.localUrl,
                carousel: values.carousel
            }).then(() => {
                console.log("Successfully updated article.");
                toast.success("Successfully updated article.")
            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating article: ", error);
                toast.error("Error updating article: " + error);
            });
        }


        
    }

    updatePdfArticle(values){
        var dateValue = new Date(values.date).getTime();
        var catPass = false
        if(values.issue === "resident-reflections"){
            catPass = true;
        } else {
            if(values.category){
                catPass = true
            } else {
                catPass = false
                toast.error("If the Issue tag is not Resident Reflections then the Category must be set to something!")
            }
        }

        if(catPass){
            firestore.collection("articles").doc(this.props.match.params.articleId).update({
                title: values.title,
                date: dateValue,
                pdfUrl: values.pdfUrl,
                status: values.status,
                category: values.category,
                issue: values.issue,
                localUrl: values.localUrl,
                carousel: values.carousel
            }).then(() => {
                console.log("Successfully updated article.");
                toast.success("Successfully updated article.")
            }).catch((error) => {
                // The document probably doesn't exist.
                console.error("Error updating article:  ", error);
                toast.error("Error updating article: " + error);
            });
        }
    }

    handleFileChange = e => {
        if (e.target.files[0]) {
            if(checkFile(this.state.article.pdfUrl)){
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
        fire.storage()
            .ref(`headers`)
            .child(filename)
            .getDownloadURL()
            .then((url) => {    
                firestore.collection("articles").doc(this.props.match.params.articleId).update({
                    headerUrl: url
                })
                .then(function() {
                    console.log("Successfully updated article.");
                    toast.success("Successfully updated article.")
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating article: ", error);
                    toast.error("Error updating article: " + error);
                });

                this.setState({  
                    headerUrl: url,
                    progress: 100, 
                    isUploading: false
                });
            });
        }
    
    render() {
        if(!this.state.article){
            return (
                <div className="wrapper">
                    <h2>Looking for your article...</h2>
                </div>
            )
        } else {
            const initialRichTextFormState = {
                title: this.state.article.title,
                author: this.state.article.author,
                date: new Date(this.state.article.date),
                body: this.state.article.body,
                localUrl: this.state.article.localUrl,
                status: this.state.article.status,
                category: this.state.article.category,
                issue: this.state.article.issue,
                carousel: this.state.article.carousel
              };
    
            const initialPDFFormState = {
                title: this.state.article.title,
                date: new Date(this.state.article.date),
                localUrl: this.state.article.localUrl,
                pdfUrl: this.state.article.pdfUrl,
                status: this.state.article.status,
                category: this.state.article.category,
                issue: this.state.article.issue,
                carousel: this.state.article.carousel
              };

            return (
                <div className="wrapper">
                    <h1>Edit Article</h1>
                    <p>Please spell and capitalize everything how you would want it to be seen.</p>
                    <Link to="/cms/list-articles"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to article list</button></Link>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    {/* // Rich Text Article // */}
                    { this.state.article.body && (
                        <Formik
                            initialValues={initialRichTextFormState}
                            onSubmit={(values) => {
                                this.updateRichTextArticle(values);
                            }}
                            enableReinitialize={true}
                            validationSchema={editRichTextArticleSchema}
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
                                        <Col xs={12} sm={6}>
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
                                        <Col xs={12} sm={6}>
                                            <label htmlFor="date">Date: </label>
                                            <br/>
                                            <Field name="date">
                                                {({ field }) => 
                                                    <ReactDatez 
                                                        inputClassName="box"
                                                        allowPast={true}
                                                        value={field.value}
                                                        handleChange={field.onChange(field.name)}
                                                        placeholder="Select date"
                                                        dateFormat="MM/DD/YYYY"
                                                    />
                                                }
                                            </Field>
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
                                        <Col xs={12}>
                                            <label htmlFor="localUrl">Local URL: </label>
                                            <Field
                                                type="text"
                                                placeholder="/issues/governance/stories-opinions/article-name"
                                                className="localUrl"
                                                onChange={props.handleChange}
                                                name="localUrl"
                                                value={props.values.localUrl}
                                            />
                                            <br/>
                                            {props.errors.localUrl && props.touched.localUrl ? (
                                                <span className="red">{props.errors.localUrl}</span>
                                            ) : (
                                                ""
                                            )}
                                            <br/>
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
                                                component="select" 
                                                onChange={props.handleChange}
                                                name="status"
                                                value={props.values.status}
                                                >
                                                <option defaultValue value="">No status selected</option> 
                                                <option value="live">Live</option>
                                                <option value="draft">Draft</option>
                                            </Field>
                                            <br/>
                                            {props.errors.status && props.touched.status ? (
                                                <span className="red">{props.errors.status}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                    </Row>

                                    {/* Row 6 */}
                                    <Row>
                                        <Col xs={12} className="s-margin-b">
                                            <Field type="checkbox" id="carousel1" name="carousel" value={props.values.carousel} checked={props.values.carousel} className="checkbox-input" />
                                            <label htmlFor="carousel1">&nbsp;Carousel Article?</label>  
                                            <br/>
                                        </Col>
                                    </Row>

                                    {/* Row 7 */}
                                    <Row>
                                        { !this.state.headerUrl && (
                                            <>
                                            <Col xs={12} sm={6}>
                                                <img
                                                    src={this.state.article.headerUrl}
                                                    alt="headerUrl"
                                                    className="medium responsive"
                                                />
                                                <br/>
                                                <label className="s-btn-inv">
                                                    <i className="fa fa-upload"></i> Choose a new header photo
                                                    <FileUploader
                                                        name="file-upload1"
                                                        id="file-upload1"
                                                        hidden
                                                        accept="image/*"
                                                        randomizeFilename
                                                        storageRef={fire.storage().ref(`headers`)}
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
                                            <Col xs={12}>
                                                <span className="blue"><i className="fa fa-check"></i> New header updated successfully!</span>
                                                <br/><br/>
                                                <img
                                                    src={this.state.headerUrl}
                                                    alt="headerUrl"
                                                    className="medium responsive"
                                                />
                                            </Col>
                                        )}
                                        
                                    </Row> 
                                </Grid>
                                <div className="center-text s-margin-t">
                                    <button
                                        type="submit"
                                        className="m-btn"
                                        disabled={!props.dirty && !props.isSubmitting}
                                        >
                                        Update Article
                                    </button>
                                </div>
                                </form>
                            )}
                        </Formik>
                    )}

                    {/* // PDF Article // */}
                    { this.state.article.pdfUrl && (
                        <Formik
                            initialValues={initialPDFFormState}
                            onSubmit={(values) => {
                                this.updatePdfArticle(values);
                            }}
                            enableReinitialize={true}
                            validationSchema={editPdfArticleSchema}
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
                                        <Col xs={12} sm={6}>
                                            <label htmlFor="date">Date: </label>
                                            <br/>
                                            <Field name="date">
                                                {({ field }) => 
                                                    <ReactDatez 
                                                        inputClassName="box"
                                                        allowPast={true}
                                                        value={field.value}
                                                        handleChange={field.onChange(field.name)}
                                                        placeholder="Select date"
                                                        dateFormat="MM/DD/YYYY"
                                                    />
                                                }
                                            </Field>
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
                                            <label htmlFor="localUrl">Local URL: </label>
                                            <Field
                                                type="text"
                                                placeholder="/issues/governance/stories-opinions/article-name"
                                                className="localUrl"
                                                onChange={props.handleChange}
                                                name="localUrl"
                                                value={props.values.localUrl}
                                            />
                                            <br/>
                                            {props.errors.localUrl && props.touched.localUrl ? (
                                                <span className="red">{props.errors.localUrl}</span>
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
                                                component="select" 
                                                onChange={props.handleChange}
                                                name="status"
                                                value={props.values.status}
                                                >
                                                <option defaultValue value="">No status selected</option> 
                                                <option value="live">Live</option>
                                                <option value="draft">Draft</option>
                                            </Field>
                                            <br/>
                                            {props.errors.status && props.touched.status ? (
                                                <span className="red">{props.errors.status}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                    </Row>  

                                    {/* Row 6 */}
                                    <Row>
                                        <Col xs={12} className="s-margin-b">
                                            <Field type="checkbox" id="carousel2" name="carousel" value={props.values.carousel} className="checkbox-input" />
                                            <label htmlFor="carousel2">&nbsp;Carousel Article?</label>  
                                            <br/>
                                        </Col>
                                    </Row> 

                                    {/* Row 7 */}
                                    <Row>
                                        { !this.state.headerUrl && (
                                            <>
                                            <Col xs={12} sm={6}>
                                                <img
                                                    src={this.state.article.headerUrl}
                                                    alt="headerUrl"
                                                    className="medium responsive"
                                                />
                                                <br/>
                                                <label className="s-btn-inv">
                                                    <i className="fa fa-upload"></i> Choose a new header photo
                                                    <FileUploader
                                                        name="file-upload2"
                                                        id="file-upload2"
                                                        hidden
                                                        accept="image/*"
                                                        randomizeFilename
                                                        storageRef={fire.storage().ref(`headers`)}
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
                                            <Col xs={12}>
                                                <span className="blue"><i className="fa fa-check"></i> New header updated successfully!</span>
                                                <br/><br/>
                                                <img
                                                    src={this.state.headerUrl}
                                                    alt="headerUrl"
                                                    className="medium responsive"
                                                />
                                            </Col>
                                        )}
                                        
                                    </Row> 
                                </Grid>
                                
                                <div className="center-text s-margin-t">
                                    <button
                                        type="submit"
                                        className="m-btn"
                                        disabled={!props.dirty && !props.isSubmitting}
                                        >
                                        Update Article
                                    </button>
                                </div>
                                </form>
                            )}
                        </Formik>
                    )}

                    <br/>
                    <br/>
                    <br/>
                    <button type="button" className="s-btn-danger" onClick={() => this.deleteArticle()}>Delete article</button>
                </div>
            )
        }
       
    }
}

export default withRouter(EditArticle);