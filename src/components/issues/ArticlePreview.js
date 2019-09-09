import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";

class ArticlePreview extends Component {
    render() {
        return (
            <div className="preview-container">
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={4} md={2} className="s-padding-t"> 
                            <img
                                className="medium"
                                alt="article-img"
                                src={this.props.picPath}
                                />
                        </Col>
                        <Col xs={12} sm={8} md={10}> 
                            { this.props.date && (<span className="grey preview-text">{this.props.date}</span>) }
                            <h4 className="l-text preview-text">{this.props.title}</h4>
                            {/* { this.props.author && (<p className="grey preview-text">by {this.props.author}</p>) }
                            { !this.props.author && (<br/>) } */}
                            { !this.props.external && (
                                <Link to={this.props.link} className="blue read-now-text">Read now</Link>
                            )}
                            { this.props.external && (
                                <a 
                                className="blue read-now-text" 
                                href={this.props.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                    Read now
                                </a>
                            )}
                            
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

export default ArticlePreview;