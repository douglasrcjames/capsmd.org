import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'

export default class EconomicDevelopment extends Component {
      constructor(props) {
          super(props)

          this.state = {
              articles: "",
              ready: false,
              factsCat: false,
              storiesOpinionsCat: false,
              solutionsCat: false
          }
      }

      componentDidMount() {
          this._isMounted = true;
          if(this._isMounted){
              firestore.collection("articles").where("status", "==", "live").where("issue", "==", "economic-development").orderBy("date", "desc").onSnapshot(snapshot => {
                  const articles = []
                  var factsCat = false;
                  var storiesOpinionsCat = false;
                  var solutionsCat = false;

                  snapshot.forEach(doc => {
                      // Grab each article for issue tag
                      var docWithId = Object.assign({}, doc.data());
                      docWithId.id = doc.id;
                      articles.push(docWithId)

                      // test if we should even render html for these categories
                      if(doc.data().category === "facts"){
                        factsCat = true;
                      } else if(doc.data().category === "stories-opinions"){
                        storiesOpinionsCat = true;
                      } else if(doc.data().category === "solutions"){
                        solutionsCat = true;
                      }           
                  })

                  this.setState({
                      articles: articles,
                      ready: true,
                      factsCat: factsCat,
                      storiesOpinionsCat: storiesOpinionsCat,
                      solutionsCat: solutionsCat
                  })

              }, () => {
                  console.log("No articles!")
                  this.setState({
                    ready: true
                  })
              });
          }
      }

      componentWillUnmount() {
          this._isMounted = false;
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

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        { 
          this.state.articles && this.state.articles.filter(article => article.category === "facts").map((article, i) => {
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
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>
        { 
          this.state.articles && this.state.articles.filter(article => article.category === "stories-opinions").map((article, i) => {
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

        <br/>
        <hr className="m-width"/>
        <br/>

        {/* <h2 className="inline">Legislation</h2>
        <p>What's before the county council and how will it affect you</p>
        <div className="blue">No articles yet, stay tuned!</div>

        <br/>
        <hr className="m-width"/>
        <br/> */}

        <h2 className="inline">Solutions</h2>
        <p>The county's challenges and some ideas to address them</p>
        { 
          this.state.articles && this.state.articles.filter(article => article.category === "solutions").map((article, i) => {
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
          title={'Proposals Worth Considering'}
          picPath={require('../../../assets/images/icons/Pencil.png')}
          link={'/issues/economic-development/solutions/proposals-worth-considering'}
          date={''}
          />
        <br/>
      </div>
      )
    }
  }
}
