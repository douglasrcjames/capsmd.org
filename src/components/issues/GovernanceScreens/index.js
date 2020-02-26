import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'

export default class Governance extends Component {
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
              firestore.collection("articles").where("status", "==", "live").where("issue", "==", "governance").orderBy("date", "desc").onSnapshot(snapshot => {
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
                alt="Governance"
                src={require("../../../assets/images/icons/bus-no-padding.png")}
                />&nbsp;Governance  
            </h1>
          <p>Learn about Governance</p>
          <br/>
          <hr className="m-width"/>
          <br/>
          <h2 className="inline">Elections</h2>
          <p>More information about the election this November 6th, 2020 is coming soon!</p>


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
            title={"Crime in Maryland"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/crime-in-maryland'}
            date={''}
            />
          <br/>

          <ArticlePreview 
            title={"Allegany County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/allegany-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Anne Arundel County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/anne-arundel-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Baltimore City: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/baltimore-city'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Baltimore County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/baltimore-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Calvert County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/calvert-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Caroline County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/caroline-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Carroll County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/carroll-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Cecil County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/cecil-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Charles County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/charles-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Dorchester County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/dorchester-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Frederick County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/frederick-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Garrett County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/garrett-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Harford County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/harford-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Howard County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/howard-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Kent County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/kent-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Montgomery County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/montgomery-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Prince George's County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/prince-georges-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Queen Anne's County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/queen-annes-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Somerset County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/somerset-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"St. Mary's County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/st-marys-county'}
            date={''}
            />
          <br/>

          <ArticlePreview 
            title={"Worcester County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/worcester-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Wicomico County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/wicomico-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Washington County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/washington-county'}
            date={''}
            />
          <br/>
          <ArticlePreview 
            title={"Talbot County: Violent and Property Crime"}
            picPath={require('../../../assets/images/icons/Growth.png')}
            link={'/issues/governance/facts/violent-and-property-crime/talbot-county'}
            date={''}
            />
          <br/>

          
          { this.state.storiesOpinionsCat && (
            <>
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
            </>
          )}
        
          { this.state.solutionsCat && (
              <>
                <br/>
                <hr className="m-width"/>
                <br/>
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
              </>
            )}
        </div>
      )
    }
  }
}
