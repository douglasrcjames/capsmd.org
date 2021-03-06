import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'
import { CATEGORIES, ISSUES } from '../../../utilities/constants';
import { Col, Grid, Row } from 'react-flexbox-grid';

export default class EconomicDevelopment extends Component {
      constructor(props) {
          super(props)

          this.state = {
              articles: "",
              ready: false,
          }
      }

      componentDidMount() {
        this.unsubscribeArticles = firestore.collection("articles").where("status", "==", "live").where("issue", "==", ISSUES.ECONOMIC_DEVELOPMENT).orderBy("date", "desc").onSnapshot(snapshot => {
            const articles = []

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
        this.unsubscribeArticles();
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
            alt="cash"
            src={require("../../../assets/images/icons/dollar-no-padding.png")}
            />&nbsp;Economic Development  
        </h1>
        <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>

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
                        title={"The Potomac Divide"}
                        picPath={require('../../../assets/images/carousel/brown-green-field.jpg')}
                        link={'/issues/economic-development/facts/potomac-divide'}
                        date={'November 4, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={'Montgomery County’s Job Market is Stagnant'}
                        picPath={require('../../../assets/images/icons/Briefcase.png')}
                        link={'/issues/economic-development/facts/job-market-stagnant'}
                        date={''}
                    />
                    <br/>
                    <ArticlePreview 
                        title={'Montgomery County Lags the Region in Job Creation'}
                        picPath={require('../../../assets/images/icons/Growth.png')}
                        link={'/issues/economic-development/facts/lags-region-in-job-creation'}
                        date={''}
                    />
                    <br/>
                    <ArticlePreview 
                        title={'Montgomery County Lags the Region in Business Growth'}
                        picPath={require('../../../assets/images/icons/Handshake.png')}
                        link={'/issues/economic-development/facts/lags-region-in-business'}
                        date={''}
                        />
                    <br/>
                    <ArticlePreview 
                        title={'People Moving Into Montgomery County Make Less than People Moving Out'}
                        picPath={require('../../../assets/images/icons/Car.png')}
                        link={'/issues/economic-development/facts/in-migrants-make-less'}
                        date={''}
                    />
                    <br/>
                    <ArticlePreview 
                        title={'Montgomery County is Losing More Taxpayer Income Than Most of the Rest of the Region'}
                        picPath={require('../../../assets/images/icons/Budget.png')}
                        link={'/issues/economic-development/facts/losing-taxpayer-income'}
                        date={''}
                    />
                    <br/>
                    <ArticlePreview 
                        title={"Slow Growth Has Hit the County's Budget"}
                        picPath={require('../../../assets/images/icons/Math.png')}
                        link={'/issues/economic-development/facts/slow-growth-budget'}
                        date={''}
                    />
                    <br/>
                    <ArticlePreview 
                        title={"Montgomery County is Not Investing Enough in Schools and Transportation"}
                        picPath={require('../../../assets/images/icons/Rail.png')}
                        link={'/issues/economic-development/facts/not-investing-in-schools'}
                        date={''}
                    />
                    <br/>
                    <hr/>
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
                        title={"MoCo’s Moratorium Madness"}
                        picPath={require('../../../assets/images/carousel/stop-sign.jpg')}
                        link={'/issues/economic-development/stories-opinions/moco-moratorium-madness'}
                        date={'February 10, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Does the County Government Need More Revenue?"}
                        picPath={require('../../../assets/images/carousel/revenue.jpg')}
                        link={'/issues/economic-development/stories-opinions/does-county-need-more-revenue'}
                        date={'January 29, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"CAPS x Freddy's"}
                        picPath={require('../../../assets/images/carousel/lobster.jpg')}
                        link={'/issues/economic-development/stories-opinions/caps-x-lisa-payne'}
                        date={'October 9, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"CAPS x LIA's"}
                        picPath={require('../../../assets/images/carousel/geoffs.jpg')}
                        link={'/issues/economic-development/stories-opinions/caps-x-lias'}
                        date={'October 9, 2019'}
                    />
                    <br/>
                    <ArticlePreview 
                        title={'How Did the County Spend Your Money This Year?'}
                        picPath={require('../../../assets/images/icons/Budget.png')}
                        link={'/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year'}
                        date={'August 18, 2019'}
                    />
                    <br/>
                    <ArticlePreview 
                        title={'How is MoCo Doing? Preliminary Jobs Data for 2018'}
                        picPath={require('../../../assets/images/icons/Briefcase.png')}
                        link={'/issues/economic-development/stories-opinions/how-is-moco-doing-jobs-data-2018'}
                        date={''}
                    />
                    <br/>
                    <hr/>
                    <br/>
                </Col>
            </Row>
        </Grid>
      </div>
      )
    }
  }
}
