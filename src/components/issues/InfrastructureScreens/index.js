import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'

export default class Tranportation extends Component {
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
          firestore.collection("articles").where("status", "==", "live").where("issue", "==", "infrastructure").orderBy("date", "desc").onSnapshot(snapshot => {
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
                alt="building"
                src={require("../../../assets/images/icons/building-no-padding.png")}
                />&nbsp;Infrastructure  
            </h1>
          <p>Learn about Infrastructure including transportation, affordable housing and more</p>

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
            link={'/issues/infrastructure/solutions/proposals-worth-considering'}
            date={''}
            />
          <br/>
        </div>
      )
    }
  }
}