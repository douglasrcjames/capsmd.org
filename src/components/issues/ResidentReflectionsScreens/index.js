import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'
import { firestore } from "../../../Fire.js";
import { readableTimestamp } from '../../../utilities/dateTime'

export default class ResidentReflections extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            articles: ""
        }
    }
    
    componentWillMount() {
        this._isMounted = true;
        if(this._isMounted){
            firestore.collection("articles").where("status", "==", "live").where("issue", "==", "resident-reflections").orderBy("date", "desc").onSnapshot(snapshot => {
                const articles = []
                snapshot.forEach(doc => {
                    var docWithId = Object.assign({}, doc.data());
                    docWithId.id = doc.id;
                    articles.push(docWithId)
                })
                this.setState({
                    articles: articles
                })
            }, () => {
                console.log("No articles!")
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    
    render() {
        if(!this.state.articles){
            return(
                <h2 className="wrapper">Loading...</h2>
            )
        } else {
            return (
                <div className="wrapper">
                    <h1>
                    <img
                        className="m-em"
                        alt="bulb"
                        src={require("../../../assets/images/icons/bulb-no-padding.png")}
                        />&nbsp;Resident Reflections  
                    </h1>
                    <p>
                        Resident Reflections is an op-ed space dedicated to the empowerment of 
                        Montgomery County voices--giving residents a platform to share challenges and solutions 
                        that support community improvement. 
                    </p>
                    <p>For submission consideration, please email: <u>info@capsmd.org</u>.</p>
                    <br/>
                    <hr className="m-width"/>
                    <br/>

                    { 
                        this.state.articles.map((article, i) => {
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
                        title={"Should MoCo Make Teardowns Pay Impact Taxes?"}
                        picPath={require('../../../assets/images/articles/taxes-coins.jpg')}
                        link={'/issues/resident-reflections/should-moco-make-teardowns-pay-impact-taxes'}
                        date={'February 10, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Health Care Reform … Good Luck"}
                        picPath={require('../../../assets/images/carousel/stethoscope.jpg')}
                        link={'/issues/resident-reflections/health-care-form-good-luck'}
                        date={'November 22, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"CAPS X Badlands"}
                        picPath={require('../../../assets/images/carousel/badlands.jpg')}
                        link={'/issues/resident-reflections/caps-x-badlands'}
                        date={'October 30, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Starting a Small Business in Montgomery County"}
                        picPath={require('../../../assets/images/carousel/dressing.jpg')}
                        link={'/issues/resident-reflections/starting-small-business-in-montgomery-county'}
                        date={'October 28, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Wait, I'm Undocumented?"}
                        picPath={require('../../../assets/images/carousel/dreamer-jacket.jpg')}
                        link={'/issues/resident-reflections/wait-im-undocumented'}
                        date={'September 10, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={'Local Government Holds Key to Gun Reform'}
                        picPath={require('../../../assets/images/carousel/group-protest.jpg')}
                        link={'/issues/resident-reflections/local-government-holds-key-gun-reform'}
                        date={'September 8, 2019'}
                        />
                    <br/>

                    <ArticlePreview 
                        title={'MCPS: The Numbers and Beyond'}
                        picPath={require('../../../assets/images/carousel/green-chalk-board.jpg')}
                        link={'/issues/resident-reflections/mcps-the-numbers-beyond'}
                        date={'September 8, 2019'}
                        />
                    <br/>

                    <ArticlePreview 
                        title={'Demand for Mental Health Services Exceed Supply in MoCo Schools'}
                        picPath={require('../../../assets/images/carousel/fence-signs.jpg')}
                        link={'/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools'}
                        date={'September 8, 2019'}
                        />
                    <br/>

                    <ArticlePreview 
                        title={"Montgomery County Overlooks Development's Impact on Education"}
                        picPath={require('../../../assets/images/carousel/woman-sign.jpg')}
                        link={'/issues/resident-reflections/moco-overlooks-developments-impact-education'}
                        date={'September 8, 2019'}
                        />
                    <br/>


                </div>
            )
        }
    }
}
