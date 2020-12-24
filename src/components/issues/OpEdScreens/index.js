import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'
import { ISSUES } from '../../../utilities/constants';

export default class More extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: "",
            ready: false,
        }
    }

    componentDidMount() {
      this.unsubscribeArticles = firestore.collection("articles").where("status", "==", "live").where("issue", "==", ISSUES.OP_EDS).orderBy("date", "desc").onSnapshot(snapshot => {
          const articles = []

          snapshot.forEach(doc => {
              // Grab each article for issue tag
              var docWithId = Object.assign({}, doc.data());
              docWithId.id = doc.id;
              articles.push(docWithId)
          })

          this.setState({
              articles: articles,
              ready: true
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
              Op-Eds  
            </h1>

            <br/>
            <hr className="m-width"/>
            <br/>

            { 
              this.state.articles && this.state.articles.map((article, i) => {
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

            { 
              this.state.articles.length === 0 && (
                <div>
                  Articles coming soon, stay tuned!
                </div>
              )
            }

          </div>
        </>
      )
    }
  }
}
