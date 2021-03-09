import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom'

import { firestore } from '../../Fire'
import { timestamp_to_date_time, readableTimestamp } from '../../utilities/dateTime'

export default class ListFeaturedArticles extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            articles: []
        }
    }
    
    // Eventually want to load more option instead of grabbing all of the articles are once
    componentDidMount() {
        this.unsubscribeArticles = firestore.collection("articles").orderBy("created", "desc").where("carousel", "==", true).onSnapshot(snapshot => {
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
    
    componentWillUnmount() {
        this.unsubscribeArticles()
    }

    render() {
        return (
            <div className="wrapper">
                <h1>List Featured Articles</h1>
                <Link to="/cms/"><button className="s-btn"> <i className="fas fa-arrow-left" />&nbsp; Back to CMS home</button></Link>
                <br/>
                <h4>{this.state.articles.length} total articles</h4>
                <hr/>
                <br/>
                { 
                    this.state.articles.map((article, i) => {
                        const createdDT = timestamp_to_date_time(article.created)
                        const dateDT = readableTimestamp(article.date)
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
                                        {dateDT}
                                    </Col>
                                    { article.author && (
                                        <Col xs={12} sm={6}>
                                            <label>Author: </label>
                                            {article.author}
                                        </Col>
                                    )}
                                </Row>
                                {article.issue && (
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <label>Issue: </label>
                                            {article.issue}
                                        </Col>
                                        { article.category && (
                                            <Col xs={12} sm={6}>
                                                <label>Category: </label>
                                                {article.category}
                                            </Col>
                                        )}
                                    </Row>
                                )}
                                {article.news && (
                                    <Row>
                                        <Col xs={12} sm={6}>
                                            <label>News: </label>
                                            {article.news}
                                        </Col>
                                    </Row>
                                )}
                                {article.localUrl && (
                                     <Row>
                                        <Col xs={12}>
                                            <label>Local URL: </label>
                                            <Link to={article.localUrl}>
                                                {article.localUrl}
                                            </Link>
                                        </Col>
                                    </Row>
                                )}
                                {article.link && (
                                     <Row>
                                        <Col xs={12}>
                                            <label>Link: </label>
                                            <a href={article.link} target="_blank" rel="noopener noreferrer">
                                                {article.link}
                                            </a>
                                        </Col>
                                    </Row>
                                )}
                               
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
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <label>Creator: </label>
                                        {article.creator}
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <label>Created: </label>
                                        {createdDT.fullDate} @ {createdDT.fullTime}
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
