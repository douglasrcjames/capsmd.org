import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from "react-router-dom";

class ArticlePreview extends Component {
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
                            { this.props.date && (<span className="grey">{this.props.date}</span>) }
                            <h4 className="l-text preview-text">{this.props.title}</h4>
                            { this.props.author && (<p className="grey preview-text">by {this.props.author}</p>) }
                            { !this.props.author && (<br/>) }
                            <Link to={this.props.link} className="blue">Read now</Link>
                        </Col>
                    </Row>
                </Grid>
                
            </div>
        );
    }
}

export default ArticlePreview;