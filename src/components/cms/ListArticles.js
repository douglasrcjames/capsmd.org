import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'

import { firestore } from '../../Fire'
import { timestamp_to_date_time } from '../../utilities/dateTime'

export default class ListArticles extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
    
        this.state = {
            articles: []
        }
    }
    
    componentWillMount() {
        this._isMounted = true;
        if(this._isMounted){
            firestore.collection("articles").orderBy("created", "desc").onSnapshot(snapshot => {
                const pastArticles = []
                snapshot.forEach(doc => {
                    var docWithId = Object.assign({}, doc.data());
                    docWithId.id = doc.id;
                    pastArticles.push(docWithId)
                })
                this.setState({
                    articles: pastArticles
                })
            }, () => {
                console.log("No articles!")
            });
        }
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <div className="wrapper">
                <h1>List Articles</h1>
                <p>
                    Below are all the articles added to the system via the CMS. Some articles might not be visible, such as those hard coded by developers.
                </p>
                <Link to="/cms/home"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to CMS home</button></Link>
                <br/>
                <h4>{this.state.articles.length} total articles</h4>
                <hr/>
                <br/>
                { 
                    this.state.articles.map((article, i) => {
                        const dateAndTime = timestamp_to_date_time(article.created)
                        return (
                            <Grid fluid key={i}>
                                <Row>
                                    <Col xs={12}>
                                        <label>Title: </label>
                                        {article.title}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <label>Date: </label>
                                        {article.date}
                                    </Col>
                                    { article.body && (
                                        <Col xs={12} sm={6}>
                                            <label>Author: </label>
                                            {article.author}
                                        </Col>
                                    )}
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <label>Category: </label>
                                        {article.category}
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <label>Issue: </label>
                                        {article.issue}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <label>Local URL: </label>
                                        <Link to={article.localUrl}>
                                            {article.localUrl}
                                        </Link>
                                    </Col>
                                </Row>
                                { article.pdfUrl && (
                                    <Row>
                                        <Col xs={12}>
                                            <label>PDF URL: </label>
                                            {article.pdfUrl}
                                        </Col>
                                    </Row>
                                )}
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <label>Status: </label>
                                        {article.status}
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <label>Created: </label>
                                        {dateAndTime.fullDate} @ {dateAndTime.fullTime}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6} className="s-padding-t">
                                        <Link to={`/cms/edit-article/${article.id}`}>
                                            <button className="s-btn-inv"> <i className="fas fa-edit" />&nbsp;Edit article</button>
                                        </Link>
                                    </Col>
                                </Row>
                                <br/>
                                <hr/>
                                <br/>
                            </Grid>
                        )
                    }) 
                } 
            </div>
        )
    }
}
