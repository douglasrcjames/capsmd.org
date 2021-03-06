import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'
import { CATEGORIES, ISSUES } from '../../../utilities/constants';
import { Col, Grid, Row } from 'react-flexbox-grid';

export default class More extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: "",
            ready: false,
        }
    }

    componentDidMount() {
      this.unsubscribeArticles = firestore.collection("articles").where("status", "==", "live").where("issue", "==", ISSUES.MORE).orderBy("date", "desc").onSnapshot(snapshot => {
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
      this.unsubscribeArticles()
    }


    render() {
      if(!this.state.ready){
          return(
              <h2 className="wrapper">Loading...</h2>
          )
      } else {
        return(
          <>
          <div className="wrapper">
            <h1>
              <img
                className="m-em"
                alt="plus"
                src={require("../../../assets/images/icons/more-no-padding.png")}
                />&nbsp;More  
            </h1>

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
                        title={'Maryland Newspapers are Disappearing'}
                        picPath={require('../../../assets/images/icons/Growth.png')}
                        link={'/issues/more/facts/newspapers-disappearing'}
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
                        title={'Imagine Montgomery County in Five Years: Part Two'}
                        picPath={require('../../../assets/images/icons/Handshake.png')}
                        link={'/issues/more/stories-opinions/county-in-five-years-part-two'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'Imagine Montgomery County in Five Years: Part One'}
                        picPath={require('../../../assets/images/icons/Handshake.png')}
                        link={'/issues/more/stories-opinions/county-in-five-years-part-one'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'The Complexities of Child Care in a Nutshell'}
                        picPath={require('../../../assets/images/icons/Pencil.png')}
                        link={'/issues/more/stories-opinions/complexities-child-care-nutshell'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'MoCo’s Life Threatening Project Bust'}
                        picPath={require('../../../assets/images/icons/Growth.png')}
                        link={'/issues/more/legislation/life-threatening-project-bust'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'Testifying with My Conscience: SB0489 Ballot Access, Voter Registration, Affiliating with a Party'}
                        picPath={require('../../../assets/images/icons/Pencil.png')}
                        link={'/issues/more/stories-opinions/testifying-my-conscience'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'A Beginner’s Guide to the Montgomery County Budget'}
                        picPath={require('../../../assets/images/icons/Math.png')}
                        link={'/issues/more/stories-opinions/beginners-guide-to-budget'}
                        />
                        <br/>
                        <ArticlePreview 
                        title={'Let’s Try Again on Three Good Voting Bills'}
                        picPath={require('../../../assets/images/icons/Handshake.png')}
                        link={'/issues/more/legislation/voting-bills'}
                        />
                        <br/>
                        <hr className="m-width"/>
                        <br/>
                    </Col>
                </Row>
            </Grid>
          </div>
        </>
      )
    }
  }
}
