import React, { Component } from 'react'
import ArticlePreview from '../issues/ArticlePreview'
import { firestore } from "../../Fire.js";
import { readableTimestamp } from '../../utilities/dateTime'
import { CATEGORIES, ISSUES } from '../../utilities/constants';

export default class EducationSolutions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            articles: "",
            ready: false,
        }
    }

    componentDidMount() {
      this.unsubscribeArticles = firestore.collection("articles").where("status", "==", "live").where("issue", "==", ISSUES.EDUCATION).where("category", "==", CATEGORIES.SOLUTIONS).orderBy("date", "desc").onSnapshot(snapshot => {
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
            alt="book"
            src={require("../../assets/images/icons/book-no-padding.png")}
            />&nbsp;Education  
        </h1>
        <p>Learn about solutions concerning our public schools and more</p>

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Solutions</h2>
      <p>The county's challenges and some ideas to address them</p>
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
    <ArticlePreview 
        title={'How Kirwan Benefits Montgomery County'}
        picPath={require('../../assets/images/carousel/strong-schools-maryland.jpg')}
        link={'/issues/education/solutions/how-kirwan-benefits-montgomery-county'}
        date={'September 8, 2019'}
        />
    <br/>
    <ArticlePreview 
        title={'Proposals Worth Considering'}
        picPath={require('../../assets/images/icons/Pencil.png')}
        link={'/issues/education/solutions/proposals-worth-considering'}
        date={''}
        />
      <br/>
    </div>
    )
  }
}
}





