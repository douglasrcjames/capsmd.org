import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import ReactQuill from 'react-quill';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FileUploader from "react-firebase-file-uploader";
import { ReactDatez } from 'react-datez'
import "react-datez/dist/css/react-datez.css";
import Modal from "react-modal";
import { firestore, fire } from "../../Fire.js";
import { editRichTextArticleSchema, editPdfArticleSchema } from '../../utilities/formSchemas'
import { checkFile } from '../../utilities/misc.js';

class EditArticle extends Component {
    constructor(props) {
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            typeShown: "pdf-header",
            article: "",
            headerUrl: "",
            isUploading: false,
            progress: 0,
            picPath: '',
            pdfUrl: "",
            isUploadingPdf: false,
            pdfProgress: 0,
            pdfPath: "",
            showModal: false,
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
                var docWithId = Object.assign({}, doc.data());
                docWithId.id = doc.id;
                this.setState({
                    article: docWithId
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

        var bodyByteSize = new Blob([values.body]).size;
        console.log("bodyByteSize: ")
        console.log(bodyByteSize)
        if(bodyByteSize > 1048400){
            // TODO: this needs to be displayed longer... so they can read it
            toast.error("The document is too large. Try reducing the file size of some bigger pictures with online tools or ask Doug. Remember you can always just upload it as a PDF! ")
        } else {
            if(catPass){
                if(this.state.article.title !== values.title){
                    // If title changed, delete old article doc and create new one
                    var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
                    var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
                    var ref = firestore.collection("articles").doc(`${titleCleaned}`)
                    ref.get().then(doc => {
                        if(doc.exists){
                            toast.error("An article with a similar title exists");
                        } else {
                            ref.set({
                                title: values.title,
                                date: dateValue,
                                status: values.status,
                                category: values.category,
                                issue: values.issue,
                                headerUrl: this.state.article.headerUrl,
                                creator: this.state.article.creator,
                                body: this.state.article.body,
                                created: this.state.article.created,
                                carousel: values.carousel,
                                localUrl: values.localUrl,
                                updated: Date.now()
                            }).then(() =>  {
                                // Delete old doc
                                firestore.collection("articles").doc(this.props.match.params.articleId).delete().then(() => {
                                    this.props.history.push("/cms/list-articles");
                                    toast.success("Article successfully updated!");
                                    console.log("Document successfully deleted");
                                }).catch((error) => {
                                    console.error("Error removing document: ", error);
                                });
                            }).catch((error) =>  {
                                toast.error("Error writing document: ", error);
                            });
                        }
                    })
                } else {
                    firestore.collection("articles").doc(this.props.match.params.articleId).update({
                        author: values.author,
                        date: dateValue,
                        body: values.body,
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
            if(this.state.article.title !== values.title){
                // If title changed, delete old article doc and create new one
                var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
                var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
                var ref = firestore.collection("articles").doc(`${titleCleaned}`)
                ref.get().then(doc => {
                    if(doc.exists){
                        toast.error("An article with a similar title exists");
                    } else {
                        ref.set({
                            title: values.title,
                            date: dateValue,
                            status: values.status,
                            category: values.category,
                            issue: values.issue,
                            headerUrl: this.state.article.headerUrl,
                            pdfUrl: this.state.article.pdfUrl,
                            creator: this.state.article.creator,
                            created: this.state.article.created,
                            carousel: values.carousel,
                            localUrl: values.localUrl,
                            updated: Date.now()
                        }).then(() =>  {
                            // Delete old doc
                            firestore.collection("articles").doc(this.props.match.params.articleId).delete().then(() => {
                                this.props.history.push("/cms/list-articles");
                                toast.success("Article successfully updated!");
                                console.log("Document successfully deleted");
                            }).catch((error) => {
                                console.error("Error removing document: ", error);
                            });
                        }).catch((error) =>  {
                            toast.error("Error writing document: ", error);
                        });
                    }
                })
                
                
            } else {
                firestore.collection("articles").doc(this.props.match.params.articleId).update({
                    status: values.status,
                    category: values.category,
                    issue: values.issue,
                    localUrl: values.localUrl,
                    carousel: values.carousel,
                    updated: Date.now()
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
    }

    handleOpenModal() {
        this.setState({ showModal: true, typeShown: "pdf-file" });
    }
      
    handleCloseModal() {
        this.setState({ showModal: false, typeShown: "pdf-header" });
    }

    handleFileChange = e => {
        if (e.target.files[0]) {
            if(checkFile(this.state.typeShown)){
                const picPath = e.target.files[0];
                this.setState(() => ({ picPath }));
            } else {
                toast.error("Please upload a picture file format like png, jpeg, jpg, bmp.");
            }
        }
    };
    handlePdfFileChange = e => {
        if (e.target.files[0]) {
            if(checkFile(this.state.typeShown)){
                const pdfPath = e.target.files[0];
                this.setState(() => ({ pdfPath }));
            } else {
                toast.error("Please upload a PDF file format like such as 'example.pdf'");
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
    uploadPdfUrl() {
        if(this.state.pdfPath){
            this.pdfUploader.startUpload(this.state.pdfPath)
        } else {
            toast.error("Choose a PDF file from your computer first!");
        }
    }

    handleUploadStart = () => {this.setState({ isUploading: true, progress: 0 });} 
    handlePdfUploadStart = () => {this.setState({ isUploadingPdf: true, pdfProgress: 0 });}

    handleProgress = progress => this.setState({ progress });
    handlePdfProgress = pdfProgress => this.setState({ pdfProgress });

    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error("Error handling upload: " + error);
        toast.error("Error handling upload: " + error);
    };
    handlePdfUploadError = error => {
        this.setState({ isUploadingPdf: false });
        console.error("Error handling upload: " + error);
        toast.error("Error handling upload: " + error);
    };

    deletePicPath(){
        this.setState(() => ({ picPath: "" }));
    }
    deletePdfPath(){
        this.setState(() => ({ pdfPath: "" }));
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

    handlePdfUploadSuccess = filename => {
        fire.storage()
            .ref(`pdfs`)
            .child(filename)
            .getDownloadURL()
            .then((url) => {    
                firestore.collection("articles").doc(this.props.match.params.articleId).update({
                    pdfUrl: url
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
                    pdfUrl: url,
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
                pdfUrl: this.state.pdfUrl || this.state.article.pdfUrl,
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
                                                <span className="green"><i className="fa fa-check"></i> New header updated successfully!</span>
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
                                    {!this.state.pdfUrl && (
                                        <Row>
                                            <Col xs={12}>
                                                <label htmlFor="pdf">Current PDF Link: </label>
                                                &nbsp;&nbsp;
                                                <a href={this.state.article.pdfUrl} className="blue">{this.state.article.pdfUrl}</a>
                                            </Col>
                                        </Row>
                                    )} 
                                    <br/>
                                    <label htmlFor="pdf" className="display-block">PDF file: </label>
                                    &nbsp;&nbsp;
                                    { !this.state.pdfUrl && (
                                        <button type="button" className="s-btn-inv" onClick={this.handleOpenModal}>
                                            <i className="fa fa-file-upload"></i> Choose new PDF file
                                        </button>
                                    )}
                                    { this.state.pdfUrl && (
                                        <span className="green"><i className="fa fa-check"></i> PDF updated!</span>
                                    )}
                                    <br/>
                                    <Modal
                                        isOpen={this.state.showModal}
                                        contentLabel="Choose PDF File"
                                        className="modal"
                                        overlayClassName="modal-overlay"
                                        onRequestClose={this.handleCloseModal}>
                                        <div className="top-bar">
                                            <h4 className="white heading">Choose PDF File</h4>
                                            <i onClick={() => this.handleCloseModal()} className="close" />
                                        </div>
                                        <div className="modal-container">
                                            <p>
                                                Pick a PDF file from your computer to use as the main article body. 
                                            </p>
                                            <Row>
                                                <Col xs={12}>
                                                    <label className="s-btn-inv">
                                                        <i className="fa fa-file-upload"></i> Choose new PDF file
                                                        <FileUploader
                                                            name="pdf-file"
                                                            id="pdf-file"
                                                            hidden
                                                            accept="pdf/*"
                                                            storageRef={fire.storage().ref(`pdfs`)}
                                                            onChange={this.handlePdfFileChange}
                                                            ref={instance => { this.pdfUploader = instance; } }
                                                            onUploadStart={this.handlePdfUploadStart}
                                                            onUploadError={this.handlePdfUploadError}
                                                            onUploadSuccess={this.handlePdfUploadSuccess}
                                                            onProgress={this.handlePdfProgress}
                                                        />
                                                    </label>
                                                </Col>
                                                <Col xs={12}>
                                                    {this.state.isUploadingPdf && <p>Progress: {this.state.pdfProgress}%</p>}
                                                    <br/>
                                                    {this.state.pdfPath && (
                                                        <>
                                                            <p>{this.state.pdfPath.name.split('\\').pop().split('/').pop()}</p>
                                                            <button type="button" className="s-btn-inv" onClick={() => this.uploadPdfUrl()}>Upload choice</button>
                                                            &nbsp; &nbsp;
                                                            <button type="button" className="s-btn-danger-inv" onClick={() => this.deletePdfPath()}>Delete choice</button>
                                                            
                                                        </>
                                                    )}
                                                </Col>
                                            </Row>
                                        </div>
                                    </Modal>
                                    <br/>
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
                                                <span className="green"><i className="fa fa-check"></i> New header updated successfully!</span>
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