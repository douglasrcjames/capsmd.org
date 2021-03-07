import React, { Component } from 'react'
import ArticlePreview from '../issues/ArticlePreview'
import { firestore } from "../../Fire.js";
import { readableTimestamp } from '../../utilities/dateTime'
import { NEWS } from '../../utilities/constants';
import { Col, Grid, Row } from 'react-flexbox-grid';
import Subscribe from '../Subscribe';

export default class News extends Component {
    constructor(props) {
      super(props)

      this.state = {
        prArticles: [],
        numPRArticlesLoaded: 0,
        enArticles: [],
        numENArticlesLoaded: 0,
        ebArticles: [],
        numEBArticlesLoaded: 0,
        loading: {
            pr: true,
            en: true,
            eb: true
        }
      }
  }

  componentDidMount() {
    this.loadMorePRArticles();
    this.loadMoreENArticles();
    // this.loadMoreEBArticles();

    this.unsubscribeEBArticles = firestore.collection("articles").where("status", "==", "live").where("news", "==", NEWS.EMAIL_BLASTS).orderBy("date", "desc").onSnapshot(snapshot => {
        const ebArticles = []
        snapshot.forEach(doc => {
            var docWithId = Object.assign({}, doc.data());
            docWithId.id = doc.id;
            ebArticles.push(docWithId)    
        })

        this.setState({
            ebArticles: ebArticles,
            loading: {
                eb: false
            }
        })

    }, () => {
        console.log("No eb articles!")
        this.setState({
          loading: {
              eb: false
          }
        })
    });
  }

  componentWillUnmount() {
      if(this.unsubscribeLoadPRArticles){
        this.unsubscribeLoadPRArticles()
      }
      if(this.unsubscribeLoadENArticles){
        this.unsubscribeLoadENArticles()
      }
      if(this.unsubscribeLoadEBArticles){
        this.unsubscribeEBArticles()
      }
    
    
  }

  loadMorePRArticles = () => {
    var newNumToLoad = this.state.numPRArticlesLoaded;
    newNumToLoad = newNumToLoad+5

    this.setState({
        numPRArticlesLoaded: newNumToLoad
    })

    this.unsubscribeLoadPRArticles = firestore.collection("articles").where("status", "==", "live").where("news", "==", NEWS.PRESS_RELEASES).orderBy("date", "desc").limit(newNumToLoad).onSnapshot(snapshot => {
        const prArticles = []
        snapshot.forEach(doc => {
            var docWithId = Object.assign({}, doc.data());
            docWithId.id = doc.id;
            prArticles.push(docWithId)    
        })

        this.setState({
            prArticles: prArticles,
            loading: {
                pr: false
            }
        })

    }, () => {
        console.log("No pr articles!")
        this.setState({
          loading: {
              pr: false
          }
        })
    });

    // TODO: why was this unsub in goprestigepower repo??
    // if(this.unsubscribeLoadPRArticles){
    //     this.unsubscribeLoadPRArticles()
    // }
  }

  loadMoreENArticles = () => {
    var newNumToLoad = this.state.numENArticlesLoaded;
    newNumToLoad = newNumToLoad+5

    this.setState({
        numENArticlesLoaded: newNumToLoad
    })

    this.unsubscribeLoadENArticles = firestore.collection("articles").where("status", "==", "live").where("news", "==", NEWS.EXTERNAL_NEWS).orderBy("date", "desc").limit(newNumToLoad).onSnapshot(snapshot => {
        const enArticles = []
        snapshot.forEach(doc => {
            var docWithId = Object.assign({}, doc.data());
            docWithId.id = doc.id;
            enArticles.push(docWithId)    
        })

        this.setState({
            enArticles: enArticles,
            loading: {
                en: false
            }
        })

    }, () => {
        console.log("No en articles!")
        this.setState({
          loading: {
              en: false
          }
        })
    });

  }

  render() {
    if(this.state.loading.pr || this.state.loading.en || this.state.loading.eb){
        return(
            <h2 className="wrapper">Loading...</h2>
        )
    } else {
      return(
        <div className="wrapper">
            <h1>News</h1>
           
            <hr className="m-width"/>
            <br/>
            <Grid fluid>
                <Row>
                    <Col md={12} lg={6}>
                        <h2 className="inline">CAPS Press Releases</h2>
                        { 
                            this.state.prArticles.map((article, i) => {
                                let dateDt = readableTimestamp(article.date)
                                return (
                                    <span key={i}>
                                        <ArticlePreview 
                                            title={article.title}
                                            picPath={article.headerUrl}
                                            link={article.localUrl}
                                            news={article.news}
                                            date={dateDt}
                                            />
                                        <br/>
                                    </span>
                                )
                            })
                        }
                        {((this.state.prArticles.length+1)%5 !== 0) && !(this.state.prArticles.length < this.state.numPRArticlesLoaded) && (
                            <div className="center-text">
                                <span className="blue text-hover-green underline-hover cursor-pointer" onClick={()=>this.loadMorePRArticles()}>load more...</span>
                            </div>
                        )}
                        <br/>
                        <hr className="s-width"/>
                        <br/>
                    </Col>
                    <Col md={12} lg={6}>
                        <h2 className="inline">External News</h2>
                        { 
                            this.state.enArticles.map((article, i) => {
                                let dateDt = readableTimestamp(article.date)
                                return (
                                    <span key={i}>
                                        <ArticlePreview 
                                            title={article.title}
                                            picPath={article.headerUrl}
                                            link={article.link}
                                            news={article.news}
                                            date={dateDt}
                                            />
                                        <br/>
                                    </span>
                                )
                            })
                        }
                        {((this.state.enArticles.length+1)%5 !== 0) && !(this.state.enArticles.length < this.state.numENArticlesLoaded) && (
                            <div className="center-text">
                                <span className="blue text-hover-green underline-hover cursor-pointer" onClick={()=>this.loadMoreENArticles()}>load more...</span>
                            </div>
                        )}
                        <br/>
                        <hr className="s-width"/>
                        <br/>
                        
                    </Col>
                    <Col md={12} lg={6}>
                        {this.state.ebArticles.length !== 0 && (
                            <div>
                                <h2 className="inline">Email Blasts</h2>
                                { 
                                    this.state.ebArticles.map((article, i) => {
                                        let dateDt = readableTimestamp(article.date)
                                        return (
                                            <span key={i}>
                                                <ArticlePreview 
                                                    title={article.title}
                                                    picPath={article.headerUrl}
                                                    link={article.localUrl}
                                                    news={article.news}
                                                    date={dateDt}
                                                    />
                                                <br/>
                                            </span>
                                        )
                                    })
                                }
                                <br/>
                                <hr className="s-width"/>
                                <br/>
                            </div>
                        )}
                       
                    </Col>
                </Row>
            </Grid>
          
            <br/>
            <div className="horiz-rule-blue"/>
            <br/>
            <div className="center-text">
                <h3 className="no-margin">Join Our Mailing List</h3>
                <span>Keep up with the latest information about the county.</span>
                <Subscribe />
            </div>
            <br/>
            <div className="horiz-rule-blue"/>
        </div>
      )
    }
  }
}
