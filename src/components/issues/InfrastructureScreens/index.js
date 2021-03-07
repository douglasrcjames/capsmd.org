import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'
import { CATEGORIES, ISSUES } from '../../../utilities/constants';
import { Col, Grid, Row } from 'react-flexbox-grid';

export default class Tranportation extends Component {
    constructor(props) {
      super(props)

      this.state = {
          articles: "",
          ready: false,
      }
  }

  componentDidMount() {
    this.unsubscribeArticles =firestore.collection("articles").where("status", "==", "live").where("issue", "==", ISSUES.INFRASTRUCTURE).orderBy("date", "desc").onSnapshot(snapshot => {
        const articles = [];
        
        snapshot.forEach(doc => {
            // Grab each article for issue tag
            var docWithId = Object.assign({}, doc.data());
            docWithId.id = doc.id;
            articles.push(docWithId)
        })

        this.setState({
            articles: articles,
            ready: true,
        })

    }, () => {
        console.log("No articles!")
        this.setState({
          ready: true
        })
    });
  }

  componentWillUnmount() {
    this.unsubscribeArticles()
  }

  render() {
    if(!this.state.ready){
        return(
            <h2 className="wrapper">Loading...</h2>
        )
    } else {
      return(
        <div className="wrapper">
            <h1>
                <img
                    className="m-em"
                    alt="building"
                    src={require("../../../assets/images/icons/building-no-padding.png")}
                    />&nbsp;Infrastructure  
                </h1>
            <p>Learn about Infrastructure including transportation, affordable housing and more</p>

            <br/>
            <hr className="m-width"/>
            <br/>
            

            <Grid fluid>
                <Row>
                    <Col md={12} lg={6}>
                        <h2 className="inline">Facts</h2>
                        <p>Information about where the county stands</p>
                        { 
                            this.state.articles && this.state.articles.filter(article => article.category === CATEGORIES.FACTS).map((article, i) => {
                                const dateDT = readableTimestamp(article.date)
                                return (
                                    <span key={i}>
                                        <ArticlePreview 
                                            title={article.title}
                                            picPath={article.headerUrl}
                                            link={article.localUrl}
                                            date={dateDT}
                                            />
                                        <br/>
                                    </span>
                                )
                            })
                        }
                        <ArticlePreview 
                            title={"Montgomery County's Housing Construction Has Dropped Since the Recession"}
                            picPath={require('../../../assets/images/icons/Housing Development.png')}
                            link={'/issues/infrastructure/facts/housing-construction'}
                            date={''}
                            />
                        <br/>
                        <ArticlePreview 
                            title={'Montgomery County Trails Most of the Region in New Housing'}
                            picPath={require('../../../assets/images/icons/Housing.png')}
                            link={'/issues/infrastructure/facts/trails-in-new-housing'}
                            date={''}
                            />
                        <br/>
                        <ArticlePreview 
                            title={"Montgomery County's Roads are More Clogged Than Ever Before"}
                            picPath={require('../../../assets/images/icons/Car.png')}
                            link={'/issues/infrastructure/facts/roads-clogged'}
                            date={''}
                            />
                        <br/>
                        <ArticlePreview 
                            title={"Montgomery County Does Not Complete Transportation Projects on Time"}
                            picPath={require('../../../assets/images/icons/Rail.png')}
                            link={'/issues/infrastructure/facts/transportation-projects'}
                            date={''}
                            />
                        <br/>
                        

                        <br/>
                        <hr className="m-width"/>
                        <br/>
                    </Col>
                    <Col md={12} lg={6}>
                        <h2 className="inline">Stories &amp; Opinions</h2>
                        <p>How the county decisions affect real life people</p>
                        { 
                            this.state.articles && this.state.articles.filter(article => article.category === CATEGORIES.STORIES_OPINIONS).map((article, i) => {
                                const dateDT = readableTimestamp(article.date)
                                return (
                                    <span key={i}>
                                        <ArticlePreview 
                                            title={article.title}
                                            picPath={article.headerUrl}
                                            link={article.localUrl}
                                            date={dateDT}
                                            />
                                        <br/>
                                    </span>
                                )
                            })
                        }
                        <ArticlePreview 
                            title={'I-270 Expansion in Western Maryland'}
                            picPath={require('../../../assets/images/icons/Car.png')}
                            link={'/issues/infrastructure/stories-opinions/I-270-Expansion-in-Western-Maryland'}
                            />
                        <br/>
                        <ArticlePreview 
                            title={'Pothole Pathos'}
                            picPath={require('../../../assets/images/icons/Car.png')}
                            link={'/issues/infrastructure/stories-opinions/pothole-pathos'}
                            />
                        <br/>
                        <ArticlePreview 
                            title={'How to Do BRT Properly'}
                            picPath={require('../../../assets/images/icons/Rail.png')}
                            link={'/issues/infrastructure/stories-opinions/how-to-do-brt-properly'}
                            date={''}
                            />
                        <br/>
                        <ArticlePreview 
                            title={'Did Silver Spring build enough housing to stay affordable? Sort of.'}
                            picPath={require('../../../assets/images/icons/Housing.png')}
                            link={'/issues/infrastructure/stories-opinions/silver-spring-housing'}
                            date={''}
                            />

                        <br/>
                        <hr className="m-width"/>
                        <br/>
                    </Col>
                </Row>
            </Grid>
        </div>
      )
    }
  }
}