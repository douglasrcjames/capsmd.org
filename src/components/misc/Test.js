import React, { Component } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Test extends Component {
    state = {
      numPages: null,
      pageNumber: 1,
      pdfLink: "https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/pdfs%2FDoes_County_Need_More_Revenue.pdf?alt=media&token=18f739e2-c707-4176-b728-d3d6a2e877cf"
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
  
      return (
        <React.Fragment>
            <div className="pdf-container responsive">
                <Document
                    file={this.state.pdfLink}
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
      );
    }
  }
