import React, { Component } from 'react'
import { readableTimestamp } from '../../utilities/dateTime'
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Article extends Component {
    state = {
        numPages: null,
        pageNumber: 1
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
            pageNumber: 1,
        });
    };

    changePage = offset => this.setState(prevState => ({
        pageNumber: prevState.pageNumber + offset,
    }));

    previousPage = () => this.changePage(-1);

    nextPage = () => this.changePage(1);
    
    render() {
        const { numPages, pageNumber } = this.state;
        if(this.props.article.status === "draft" && !this.props.user){
            return(
                <div className="wrapper">
                    <h2>This article is not live yet</h2>
                    <p>Please sign in as an administrator to view or wait until the article is posted.</p>
                </div>
            )
        }else if(this.props.article.pdfUrl){
            return (
                <React.Fragment>
                    <div className="pdf-container">
                        <Document
                            file={this.props.article.pdfUrl}
                            onLoadSuccess={this.onDocumentLoadSuccess}
                        >
                            <Page pageNumber={pageNumber} />
                        </Document>
                        <Grid fluid className="s-padding-t">
                            <Row center="xs">
                                <Col xs={12} sm={4} className="s-padding-b">
                                    <button
                                        type="button"
                                        className="s-btn"
                                        disabled={pageNumber <= 1}
                                        onClick={this.previousPage}
                                        >
                                        <i className="fa fa-chevron-left"></i> Previous
                                    </button>
                                </Col>
                                <Col xs={12} sm={4} className="s-padding-b">
                                    <span>Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}</span>
                                </Col>
                                <Col xs={12} sm={4} className="s-padding-b">
                                    <button
                                        type="button"
                                        className="s-btn"
                                        disabled={pageNumber >= numPages}
                                        onClick={this.nextPage}
                                        >
                                        Next <i className="fa fa-chevron-right"></i>
                                    </button>
                                </Col>
                            </Row>
                        </Grid>
                    </div>
                </React.Fragment>
            )
        } else if(this.props.article.body) {
            var topBgImageStyle = {
                width: "100%",
                height: "200px",
                backgroundImage: `url(${this.props.article.headerUrl})`,
                backgroundPosition: "50% 60%", // change me around to move up and down!
                backgroundSize: "cover"
              };
            const dateDT = readableTimestamp(this.props.article.date)
            return (
                <>
                <div style ={ topBgImageStyle }></div>
                <div className="wrapper-w-img">
                    <h1>{this.props.article.title}</h1>
                    { this.props.article.date && (
                        <span className="grey">{dateDT}</span>
                    )}

                    <br/>
                    <br/>
                    
                    <div className="bye-br" dangerouslySetInnerHTML={{__html: this.props.article.body}}></div>

                    <br/>
                    <br/>

                    { this.props.article.author && (
                        <u className="blue">Written by {this.props.article.author}</u>
                    )}
                    
                </div>
                </>
            )
        } else {
            return (
                <div>Loading article...</div>
            )
        }
        
    }
}
