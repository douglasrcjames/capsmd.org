import React, { Component } from 'react'
import { Formik, Field } from 'formik';
import { Link, withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FileUploader from "react-firebase-file-uploader";
import ReactQuill from 'react-quill';
import { ReactDatez } from 'react-datez'
import Modal from "react-modal";
import { firestore, fire } from "../../Fire.js";
import { addRichTextArticleSchema, addPdfArticleSchema, addLinkArticleSchema } from '../../utilities/formSchemas'
import { checkFile } from '../../utilities/misc.js';
import { CATEGORIES, ISSUES, NEWS } from '../../utilities/constants.js';

class AddArticle extends Component {
    constructor(props) {
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            richTextShown: true,
            pdfShown: false,
            linkShown: false,
            // TODO: make types into constants
            // Types: rich-text-header, pdf-header, link-header, or pdf-file 
            // Need types to determine which file upload instance we are using (lib problem?)
            typeShown: "rich-text-header",
            headerUrl: "",
            isUploading: false,
            progress: 0,
            picPath: "",
            pdfUrl: "",
            isUploadingPdf: false,
            pdfProgress: 0,
            pdfPath: "",
            date: new Date(),
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

    // TODO: prevent too large of images from being inserted (automatically downsize them?)
    // https://firebase.google.com/products/extensions/storage-resize-images
    addRichTextArticle(values){
        if(values.news || values.issue){
            let categoryCheck = values.category
            if(values.news){
                categoryCheck = ''
            }
            var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
            var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
            var dateValue = new Date(values.date).getTime()
            var ref = firestore.collection("articles").doc(`${titleCleaned}`)
            ref.get().then(doc => {
                if(doc.exists){
                    toast.error("An article with a similar title exists");
                } else {
                    if(this.state.headerUrl){
                        var localUrl = null
                        // Resident Refl and Op-Eds dont have a category
                        if(values.issue === ISSUES.RESIDENT_REFLECTIONS){
                            localUrl = `/issues/${values.issue}/${titleCleaned}`
                        } else if(values.issue === ISSUES.OP_EDS){
                            localUrl = `/issues/op-eds/${titleCleaned}`
                        } else if(values.news === NEWS.PRESS_RELEASES){
                            localUrl = `/news/${titleCleaned}`
                        } else {
                            if(categoryCheck){
                                localUrl = `/issues/${values.issue}/${categoryCheck}/${titleCleaned}`
                            } else {
                                toast.error("If the Issue tag is not Resident Reflections or Op-Eds then the Category must be set to something!")
                            }
                        }

                        // Only proceed if test above passes
                        if(localUrl){
                            ref.set({
                                title: values.title,
                                author: values.author,
                                date: dateValue,
                                body: values.body,
                                status: values.status,
                                category: categoryCheck,
                                issue: values.issue || '',
                                news: values.news || '',
                                carousel: values.carousel || false,
                                headerUrl: this.state.headerUrl,
                                localUrl: localUrl,
                                created: Date.now(),
                                creator: this.props.user.displayName
                            }).then(() => {
                                toast.success("Rich text article added successfully!");
                                this.props.history.push("/cms/list-articles");
                            }).catch((error) => {
                                toast.error("Error writing document: ", error);
                            });
                        }
                        
                    } else {
                        toast.error("Please upload a header image!")
                    }  
                }
            })
        } else {
            toast.error("You must set either the Issues or News values to post an article.")
        }
      }

      addPdfArticle(values){
        if(values.news || values.issue){
            let categoryCheck = values.category
            if(values.news){
                categoryCheck = ''
            }
            var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
            var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
            var dateValue = new Date(values.date).getTime()
            var ref = firestore.collection("articles").doc(`${titleCleaned}`)
            ref.get().then(doc => {
                if(doc.exists){
                    toast.error("An article with a similar title exists");
                } else {
                    if(this.state.headerUrl && this.state.pdfUrl){
                        var localUrl = null
                        // Resident Refl and Op-Eds dont have a category
                        if(values.issue === ISSUES.RESIDENT_REFLECTIONS){
                            localUrl = `/issues/${values.issue}/${titleCleaned}`
                        } else if(values.issue === ISSUES.OP_EDS){
                            localUrl = `/issues/op-eds/${titleCleaned}`
                        } else if(values.news === NEWS.PRESS_RELEASES){
                            localUrl = `/news/${titleCleaned}`
                        } else {
                            if(categoryCheck){
                                localUrl = `/issues/${values.issue}/${categoryCheck}/${titleCleaned}`
                            } else {
                                toast.error("If the Issue tag is not Resident Reflections or Op-Eds then the Category must be set to something!")
                            }
                        }
    
                        // Only proceed if test above passes
                        if(localUrl){
                            ref.set({
                                title: values.title,
                                date: dateValue,
                                pdfUrl: this.state.pdfUrl,
                                status: values.status,
                                category: categoryCheck,
                                issue: values.issue || '',
                                news: values.news || '',
                                carousel: values.carousel || false,
                                localUrl: localUrl,
                                headerUrl: this.state.headerUrl,
                                created: Date.now(),
                                creator: this.props.user.displayName
                            }).then(() =>  {
                                toast.success("PDF article added successfully!");
                                this.props.history.push("/cms/list-articles");
                            }).catch((error) =>  {
                                toast.error("Error writing document: ", error);
                            });
                        }
                        
                    } else {
                        toast.error("Please upload a header image!")
                    }  
                }
            })
        } else {
            toast.error("You must set either the Issues or News values to post an article.")
        }
      }

      addLinkArticle(values){
        if(values.news){
            var titleNoSpecialChars = values.title.replace(/[^a-zA-Z ]/g, "")
            var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
            var dateValue = new Date(values.date).getTime()
            var ref = firestore.collection("articles").doc(`${titleCleaned}`)
            ref.get().then(doc => {
                if(doc.exists){
                    toast.error("An article with a similar title exists");
                } else {
                    if(this.state.headerUrl){
                        ref.set({
                            title: values.title,
                            date: dateValue,
                            status: 'live',
                            news: values.news,
                            link: values.link,
                            carousel: values.carousel || false,
                            headerUrl: this.state.headerUrl,
                            created: Date.now(),
                            creator: this.props.user.displayName
                        }).then(() => {
                            toast.success("Link article added successfully!");
                            this.props.history.push("/cms/list-articles");
                        }).catch((error) => {
                            toast.error("Error writing document: ", error);
                        });
                        
                    } else {
                        toast.error("Please upload a header image!")
                    }  
                }
            })
        } else {
            toast.error("You must set a News section to post an article!")
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

    handleUploadStart = () => {console.log("Started header upload!"); this.setState({ isUploading: true, progress: 0 });} 
    handlePdfUploadStart = () => {console.log("Started PDF upload!"); this.setState({ isUploadingPdf: true, pdfProgress: 0 });}

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
        console.log("Success with header upload!"); 
        fire.storage()
            .ref(`headers`)
            .child(filename)
            .getDownloadURL()
            .then((url) => {       
                console.log(url) 
                this.setState({  
                    headerUrl: url,
                    progress: 100, 
                    isUploading: false
                });
            });
    }
    handlePdfUploadSuccess = filename => {
        console.log("Success with PDF upload!"); 
        
        fire.storage()
            .ref(`pdfs`)
            .child(filename)
            .getDownloadURL()
            .then((url) => {      
                console.log(url) 
                this.handleCloseModal();
                this.setState({  
                    pdfUrl: url,
                    pdfProgress: 100, 
                    isUploadingPdf: false
                });
            });
    }
        
    showPdf(){
        this.setState({
            pdfShown: true,
            typeShown: "pdf-header",
            richTextShown: false,
            linkShown: false,
            author: "",
            body: ""
        })
    }

    showRichText(){
        this.setState({
            richTextShown: true,
            typeShown: "rich-text-header",
            pdfShown: false,
            linkShown: false,
            pdfUrl: ""
        })
    }

    showLink(){
        this.setState({
            linkShown: true,
            typeShown: "link-header",
            richTextShown: false,
            pdfShown: false,
            author: "",
            body: "",
            pdfUrl: ""
        })
    }

    render() {
        return (
            <div className="wrapper">
                <br/>
                <Link to="/cms/"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to CMS home</button></Link>
                <h1 className="s-margin-t-b">Add Article</h1>
                <p>
                    Please spell and capitalize everything how you would want it to be seen. 
                    Remember that the Title, Date, and Author will be shown in the final article so do not include them in the Body section!
                </p>

                <hr/>
                <Grid fluid>
                    <div className="center-text">
                        <h2 className="s-margin-t-b">Pick an article type</h2>
                    </div>
                    <Row center="xs">
                        <Col xs={12} sm={4} className="s-margin-t-b">
                            <button className={this.state.richTextShown ? "s-btn" : "s-btn-inv"} onClick={()=>this.showRichText()}> <i className="fas fa-text-height" />&nbsp; Rich Text Article</button>
                        </Col>
                        <Col xs={12} sm={4} className="s-margin-t-b">
                            <button className={this.state.pdfShown ? "s-btn" : "s-btn-inv"} onClick={()=>this.showPdf()}> <i className="fas fa-file-pdf" />&nbsp; PDF Article</button>
                        </Col>
                        <Col xs={12} sm={4} className="s-margin-t-b">
                            <button className={this.state.linkShown ? "s-btn" : "s-btn-inv"} onClick={()=>this.showLink()}> <i className="fas fa-link" />&nbsp; Link Article</button>
                        </Col>
                    </Row>
                </Grid>
                <hr/>
                <br/>

                {/* // Rich Text Article // */}
                <div className={this.state.richTextShown ? "" : "hide"}>
                <Formik
                    initialValues={{
                        title: "",
                        author: "",
                        date: "",
                        body: "",
                        status: "",
                        category: "",
                        issue: "",
                        news: "",
                        link: "",
                        carousel: false
                    }}
                    onSubmit={(values) => {
                        this.addRichTextArticle(values);
                    }}
                    validationSchema={addRichTextArticleSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                                
                            <Row>
                                {!props.values.news && (
                                    <>
                                    <Col xs={12} sm={6} md={4}>
                                        <label htmlFor="issue">Issue: </label>
                                        <Field
                                            component="select" 
                                            onChange={props.handleChange}
                                            name="issue"
                                            value={props.values.issue}
                                            >
                                            <option defaultValue value="">No issue selected</option> 
                                            <option value={ISSUES.ECONOMIC_DEVELOPMENT}>Economic Development</option>
                                            <option value={ISSUES.EDUCATION}>Education</option>
                                            <option value={ISSUES.INFRASTRUCTURE}>Infrastructure</option>
                                            <option value={ISSUES.GOVERNANCE}>Governance</option>
                                            <option value={ISSUES.RESIDENT_REFLECTIONS}>Resident Reflections</option>
                                            <option value={ISSUES.MORE}>More</option>
                                            <option value={ISSUES.OP_EDS}>Op-Eds</option>
                                        </Field>
                                        <br/>
                                        {props.errors.issue && props.touched.issue ? (
                                            <span className="red">{props.errors.issue}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                    {props.values.issue && (
                                        <Col xs={12} sm={6} md={4}>
                                            <label htmlFor="category">Category: </label>
                                            <Field
                                                component="select" 
                                                onChange={props.handleChange}
                                                name="category"
                                                value={props.values.category}
                                                >
                                                <option defaultValue value="">No category selected</option> 
                                                <option value={CATEGORIES.FACTS}>Facts</option>
                                                <option value={CATEGORIES.STORIES_OPINIONS}>Stories &amp; Opinions</option>
                                                <option value={CATEGORIES.SOLUTIONS}>Solutions</option>
                                            </Field>
                                            <br/>
                                            {props.errors.category && props.touched.category ? (
                                                <span className="red">{props.errors.category}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                    )}
                                    </>
                                )}
                               {!props.values.issue && (
                                    <Col xs={12} sm={6} md={4}>
                                        <label htmlFor="news">News: </label>
                                        <Field
                                            component="select" 
                                            onChange={props.handleChange}
                                            name="news"
                                            value={props.values.news}
                                            >
                                            <option defaultValue value="">No news section selected</option> 
                                            <option value={NEWS.PRESS_RELEASES}>Press Releases</option>
                                        </Field>
                                        <br/>
                                        {props.errors.news && props.touched.news ? (
                                            <span className="red">{props.errors.news}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                )}
                               
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
                            <Row center="xs">{props.values.issue && (<Col className="s-text s-margin-b">* Need to post a news article? Select "No Issue selected" from the "Issue" drop down for the News dropdown to reappear *</Col>)}</Row>
                            <Row>
                                <Col xs={12} sm={8}>
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
                                </Col>
                                <Col xs={12} sm={4}>
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
                                </Col>
                            </Row>
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
                                </Col>
                            </Row>
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
                            <Row>
                                <Col xs={12} className="s-margin-b">
                                    <Field type="checkbox" id="carousel1" name="carousel" value={props.values.carousel} checked={props.values.carousel} className="checkbox-input" />
                                    <label htmlFor="carousel1">&nbsp;Featured Article?</label>  
                                    <br/>
                                </Col>
                            </Row>  
                            <Row>
                                <label htmlFor="header">Header picture: </label>
                                &nbsp;&nbsp;
                                { !this.state.headerUrl && (
                                    <>
                                    <Col xs={12} sm={6}>
                                        <label className="s-btn-inv">
                                            <i className="fa fa-upload"></i> Choose a header photo
                                            <FileUploader
                                                name="rich-text-header"
                                                id="rich-text-header"
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
                                    <span className="green"><i className="fa fa-check"></i> Header uploaded!</span>
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
                    initialValues={{
                        title: "",
                        author: "",
                        date: "",
                        pdfUrl: "",
                        status: "",
                        category: "",
                        issue: "",
                        news: "",
                        carousel: false
                    }}
                    onSubmit={(values, actions) => {
                        this.addPdfArticle(values);
                    }}
                    validationSchema={addPdfArticleSchema}
                    >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                            <Row>
                                {!props.values.news && (
                                    <>
                                    <Col xs={12} sm={6} md={4}>
                                        <label htmlFor="issue">Issue: </label>
                                        <Field
                                            component="select" 
                                            onChange={props.handleChange}
                                            name="issue"
                                            value={props.values.issue}
                                            >
                                            <option defaultValue value="">No issue selected</option> 
                                            <option value={ISSUES.ECONOMIC_DEVELOPMENT}>Economic Development</option>
                                            <option value={ISSUES.EDUCATION}>Education</option>
                                            <option value={ISSUES.INFRASTRUCTURE}>Infrastructure</option>
                                            <option value={ISSUES.GOVERNANCE}>Governance</option>
                                            <option value={ISSUES.RESIDENT_REFLECTIONS}>Resident Reflections</option>
                                            <option value={ISSUES.MORE}>More</option>
                                            <option value={ISSUES.OP_EDS}>Op-Eds</option>
                                        </Field>
                                        <br/>
                                        {props.errors.issue && props.touched.issue ? (
                                            <span className="red">{props.errors.issue}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                    {props.values.issue && (
                                        <>
                                        <Col xs={12} sm={6} md={4}>
                                            <label htmlFor="category">Category: </label>
                                            <Field
                                                component="select" 
                                                onChange={props.handleChange}
                                                name="category"
                                                value={props.values.category}
                                                >
                                                <option defaultValue value="">No category selected</option> 
                                                <option value={CATEGORIES.FACTS}>Facts</option>
                                                <option value={CATEGORIES.STORIES_OPINIONS}>Stories &amp; Opinions</option>
                                                <option value={CATEGORIES.SOLUTIONS}>Solutions</option>
                                            </Field>
                                            <br/>
                                            {props.errors.category && props.touched.category ? (
                                                <span className="red">{props.errors.category}</span>
                                            ) : (
                                                ""
                                            )}
                                        </Col>
                                        </>
                                    )}
                                    </>
                                )}
                               {!props.values.issue && (
                                    <Col xs={12} sm={6} md={4}>
                                        <label htmlFor="news">News: </label>
                                        <Field
                                            component="select" 
                                            onChange={props.handleChange}
                                            name="news"
                                            value={props.values.news}
                                            >
                                            <option defaultValue value="">No news section selected</option> 
                                            <option value={NEWS.PRESS_RELEASES}>Press Releases</option>
                                        </Field>
                                        <br/>
                                        {props.errors.news && props.touched.news ? (
                                            <span className="red">{props.errors.news}</span>
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                )}
                               
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
                            <Row center="xs">{props.values.issue && (<Col className="s-text">* Need to post a news article? Select "No Issue selected" from the "Issue" drop down for the News dropdown to reappear *</Col>)}</Row>
                            <Row>
                                <Col xs={12} sm={8}>
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
                                </Col>
                                <Col xs={12} sm={4}>
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
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6} className="s-margin-t-b">
                                    <label htmlFor="pdf">PDF file: </label>
                                    &nbsp;&nbsp;
                                    { !this.state.pdfUrl && (
                                        <button type="button" className="s-btn-inv" onClick={this.handleOpenModal}>
                                            <i className="fa fa-file-upload"></i> Choose PDF file
                                        </button>
                                    )}
                                    { this.state.pdfUrl && (
                                        <span className="green"><i className="fa fa-check"></i> PDF uploaded!</span>
                                    )}
                                </Col>
                                {this.state.pdfUrl && (
                                    <Col xs={12} sm={6} className="s-margin-t-b">
                                        <label htmlFor="pdf">Uploaded PDF Link: </label>
                                        &nbsp;&nbsp;
                                        <a href={this.state.pdfUrl} className="blue" target="_blank" rel="noopener noreferrer">click here</a>
                                    </Col>
                                )}   
                            </Row>

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
                                                <i className="fa fa-file-upload"></i> Choose PDF file
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

                            <Row>
                                <Col xs={12} className="s-margin-b">
                                    <Field type="checkbox" id="carousel2" name="carousel" value={props.values.carousel} checked={props.values.carousel} className="checkbox-input" />
                                    <label htmlFor="carousel2">&nbsp;Featured Article?</label> 
                                </Col>
                            </Row>   

                            <Row>
                                <label htmlFor="header">Header picture: </label>
                                &nbsp;&nbsp;
                                { !this.state.headerUrl && (
                                    <>
                                    <Col xs={12} sm={6}>
                                        <label className="s-btn-inv">
                                            <i className="fa fa-upload"></i> Choose a header photo
                                            <FileUploader
                                                name="pdf-header"
                                                id="pdf-header"
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
                                    <span className="green"><i className="fa fa-check"></i> Header uploaded!</span>
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

                {/* // Link Article // */}
                <div className={this.state.linkShown ? "" : "hide"}>
                <Formik
                    initialValues={{
                        title: "",
                        date: "",
                        news: "",
                        link: "",
                        carousel: false
                    }}
                    onSubmit={(values) => {
                        this.addLinkArticle(values);
                    }}
                    validationSchema={addLinkArticleSchema}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <Grid fluid>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <label htmlFor="news">News: </label>
                                    <Field
                                        component="select" 
                                        onChange={props.handleChange}
                                        name="news"
                                        value={props.values.news}
                                        >
                                        <option defaultValue value="">No news section selected</option> 
                                        <option value={NEWS.EXTERNAL_NEWS}>External News</option>
                                        <option value={NEWS.EMAIL_BLASTS}>Email Blasts</option>
                                    </Field>
                                    <br/>
                                    {props.errors.news && props.touched.news ? (
                                        <span className="red">{props.errors.news}</span>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                               
                                <Col xs={12} sm={6}>
                                    <label htmlFor="status">* No "Draft" Status setting for Link based articles *</label>
                                </Col>
                            </Row>  
                            <Row>
                                <Col xs={12} sm={8}>
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
                                </Col>
                                <Col xs={12} sm={4}>
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
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} sm={6}>
                                    <label htmlFor="link">Link: </label>
                                    <Field
                                        type="text"
                                        placeholder="https://www.website.com"
                                        className="box"
                                        onChange={props.handleChange}
                                        name="link"
                                        value={props.values.link}
                                    />
                                    <br/>
                                    {props.errors.link && props.touched.link ? (
                                        <span className="red">{props.errors.link}</span>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} className="s-margin-b">
                                    <Field type="checkbox" id="carousel3" name="carousel" value={props.values.carousel} checked={props.values.carousel} className="checkbox-input" />
                                    <label htmlFor="carousel3">&nbsp;Featured Article?</label>  
                                    <br/>
                                </Col>
                            </Row>  
                            <Row>
                                <label htmlFor="header">Header picture: </label>
                                &nbsp;&nbsp;
                                { !this.state.headerUrl && (
                                    <>
                                    <Col xs={12} sm={6}>
                                        <label className="s-btn-inv">
                                            <i className="fa fa-upload"></i> Choose a header photo
                                            <FileUploader
                                                name="link-header"
                                                id="link-header"
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
                                    <span className="green"><i className="fa fa-check"></i> Header uploaded!</span>
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

export default withRouter(AddArticle);
