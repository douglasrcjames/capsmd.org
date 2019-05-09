import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class NewsArticlePreview extends Component {
    render() {
        return (
            <div className="l-container background-light-grey clearfix">
                <Grid fluid>
                    <Row>
                        <Col xs={12} sm={4} md={2}> 
                            <img
                                className="medium"
                                alt="article-img"
                                src={this.props.picPath}
                                />
                        </Col>
                        <Col xs={12} sm={8} md={10} className="s-padding"> 
                            <span className="grey">{this.props.date}</span>
                            <p className="l-text">{this.props.title}</p>
                            <a 
                                className="blue" 
                                href={this.props.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                >
                                Read now
                            </a>
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

export default NewsArticlePreview;