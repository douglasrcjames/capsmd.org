import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from 'react-animated-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';
import { firestore } from "../Fire.js";
import Subscribe from './Subscribe';
import ArticlePreview from './issues/ArticlePreview'
import { readableTimestamp } from '../utilities/dateTime'

export default class Home extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        this.state = {
            carouselArticles: [],
            recentArticles: []
        }
    }

    // TODO: make constants for stuff like issue titles, carousel, etc and replace strings through app with constants
    
    componentWillMount() {
        this._isMounted = true;
        if(this._isMounted){
            firestore.collection("articles").where("carousel", "==", true).orderBy("date", "desc").onSnapshot(snapshot => {
                // TODO: manually input these past 10 articles
                const oldArticles = [
                    {
                        title: "MoCo’s Moratorium Madness",
                        button: 'Read Now',
                        link: '/issues/economic-development/stories-opinions/moco-moratorium-madness',
                        image: require("../assets/images/carousel/stop-sign.jpg"),
                    },
                    {
                        title: "Does the County Government Need More Revenue?",
                        button: 'Read Now',
                        link: '/issues/economic-development/stories-opinions/does-county-need-more-revenue',
                        image: require("../assets/images/carousel/revenue.jpg"),
                    },
                    {
                        title: "The Next 10 Years Will Determine the Fate of Affordable Housing in Montgomery County",
                        button: 'Read Now',
                        link: '/issues/infrastructure/stories-opinions/ten-years-affordable-housing',
                        image: require("../assets/images/carousel/apartment-building.jpg"),
                    },
                    {
                        title: "A Golden Opportunity: Promoting Lifelong Health by Investing in Infant & Early Childhood Mental Health",
                        button: 'Read Now',
                        link: '/issues/education/facts/promoting-lifelong-health-by-investing-in-infant-and-early-childhood-mental-health',
                        image: require("../assets/images/carousel/hero-kid.jpg"),
                    },
                    {
                        title: "Health Care Reform … Good Luck",
                        button: 'Read Now',
                        link: '/issues/resident-reflections/health-care-form-good-luck',
                        image: require("../assets/images/carousel/stethoscope.jpg"),
                    },
                    {
                        title: "Will MoCo Need a Tax Hike to Pay for Kirwan?",
                        button: 'Read Now',
                        link: '/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan',
                        image: require("../assets/images/carousel/school-bus.jpg"),
                    },
                    {
                        title: "The Potomac Divide",
                        button: 'Read Now',
                        link: '/issues/economic-development/facts/potomac-divide',
                        image: require("../assets/images/carousel/brown-green-field.jpg"),
                    },
                    {
                        title: "CAPS X Badlands",
                        button: 'Read Now',
                        link: '/issues/resident-reflections/caps-x-badlands',
                        image: require("../assets/images/carousel/badlands.jpg"),
                    },
                    {
                        title: "Starting a Small Business in Montgomery County",
                        button: 'Read Now',
                        link: '/issues/resident-reflections/starting-small-business-in-montgomery-county',
                        image: require("../assets/images/carousel/dressing.jpg"),
                    },
                ];

                const carouselArticles = [];
                snapshot.forEach(doc => {
                    var articleContents = {
                        title: doc.data().title,
                        button: "Read Now",
                        link: doc.data().localUrl,
                        image: doc.data().headerUrl,
                    }
                    carouselArticles.push(articleContents)
                })
                
                this.setState({
                    carouselArticles: carouselArticles
                })
            }, () => {
                console.log("No carouselArticles!")
            });

            firestore.collection("articles").where("status", "==", "live").orderBy("date", "desc").limit(10).onSnapshot(snapshot => {
                const recentArticles = []
                snapshot.forEach(doc => {
                    var docWithId = Object.assign({}, doc.data());
                    docWithId.id = doc.id;
                    recentArticles.push(docWithId)
                })
                this.setState({
                    recentArticles: recentArticles
                })
            }, () => {
                console.log("No recentArticles!")
            });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    
  render() {
      if(!this.state.recentArticles || !this.state.carouselArticles){
          return(
              <h2 className="wrapper">Loading...</h2>
          )
      } else {
        return (
            <div className="wrapper-top">
                <Slider className="slider-wrapper p-container" autoplay={3000} touchDisabled={true}>
                    {this.state.carouselArticles.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="blur-modal inner">
                                <h1 className="blue">{item.title}</h1>
                                { item.author && (<h5 className="black no-padding">by: {item.author}</h5>) }
                                { item.description && (<p className="black">{item.description}</p>) }
                                <Link to={item.link}><button className="s-btn">{item.button}</button></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="m-padding background-light-grey center-text">
                    <h1>Who are we?</h1>
                    <p className="l-text">The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization based in Montgomery County, Maryland.</p>
        
                    <br/>
                    <hr className="m-width" />
                    <br/>
        
                    <h3>Join Our Mailing List</h3>
                    <span>Keep up with the latest information about the county.</span>
                    <Subscribe />
                </div>
                <div className="m-padding">
                    <h1>Explore the Issues</h1>
                    <Grid fluid>
                        <Row>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="dollar"
                                    src={require("../assets/images/icons/dollar.png")}
                                    />
                                <h4>Economic Development</h4>
                                <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>
                                <Link to="/issues/economic-development"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="book"
                                    src={require("../assets/images/icons/book.png")}
                                    />
                                <h4>Education</h4>
                                <p>Learn about issues concerning our public schools and more.</p>
                                <Link to="/issues/education"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="building"
                                    src={require("../assets/images/icons/building.png")}
                                    />
                                <h4>Infrastructure</h4>
                                <p>Learn about our infrastructure network, including roads, transit and more.</p>
                                <Link to="/issues/infrastructure"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="building"
                                    src={require("../assets/images/icons/bus.png")}
                                    />
                                <h4>Governance</h4>
                                <p>Learn about governance.</p>
                                <Link to="/issues/governance"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="books"
                                    src={require("../assets/images/icons/bulb.png")}
                                    />
                                <h4>Resident Reflections</h4>
                                <p>Giving residents a platform to share challenges and solutions 
                                that support community improvement</p>
                                <Link to="/issues/resident-reflections"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col lg className="center-text">
                                <img
                                    className="center small"
                                    alt="books"
                                    src={require("../assets/images/icons/more.png")}
                                    />
                                <h4>More</h4>
                                <p>Learn about other issues important to Montgomery County.</p>
                                <Link to="/issues/more"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                        </Row>
                    </Grid>         
                </div>
                <div className="m-padding">
                    <h1>Recent CAPS Updates</h1>
                    { 
                        this.state.recentArticles.map((article, i) => {
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
                        picPath={require('../assets/images/carousel/stop-sign.jpg')}
                        link={'/issues/economic-development/stories-opinions/moco-moratorium-madness'}
                        date={'February 10, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Should MoCo Make Teardowns Pay Impact Taxes?"}
                        picPath={require('../assets/images/articles/taxes-coins.jpg')}
                        link={'/issues/resident-reflections/should-moco-make-teardowns-pay-impact-taxes'}
                        date={'February 10, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Does the County Government Need More Revenue?"}
                        picPath={require('../assets/images/carousel/revenue.jpg')}
                        link={'/issues/economic-development/stories-opinions/does-county-need-more-revenue'}
                        date={'January 29, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"The Next 10 Years Will Determine the Fate of Affordable Housing in Montgomery County"}
                        picPath={require('../assets/images/carousel/apartment-building.jpg')}
                        link={'/issues/infrastructure/stories-opinions/ten-years-affordable-housing'}
                        date={'January 6, 2020'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"A Golden Opportunity: Promoting Lifelong Health by Investing in Infant & Early Childhood Mental Health"}
                        picPath={require('../assets/images/carousel/hero-kid.jpg')}
                        link={'/issues/education/facts/promoting-lifelong-health-by-investing-in-infant-and-early-childhood-mental-health'}
                        date={'December 6, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Health Care Reform … Good Luck"}
                        picPath={require('../assets/images/carousel/stethoscope.jpg')}
                        link={'/issues/resident-reflections/health-care-form-good-luck'}
                        date={'November 22, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Will MoCo Need a Tax Hike to Pay for Kirwan?"}
                        picPath={require('../assets/images/carousel/school-bus.jpg')}
                        link={'/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan'}
                        date={'November 5, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"The Potomac Divide"}
                        picPath={require('../assets/images/carousel/brown-green-field.jpg')}
                        link={'/issues/economic-development/facts/potomac-divide'}
                        date={'November 4, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"CAPS X Badlands"}
                        picPath={require('../assets/images/carousel/badlands.jpg')}
                        link={'/issues/resident-reflections/caps-x-badlands'}
                        date={'October 30, 2019'}
                        />
                    <br/>
                    <ArticlePreview 
                        title={"Starting a Small Business in Montgomery County"}
                        picPath={require('../assets/images/carousel/dressing.jpg')}
                        link={'/issues/resident-reflections/starting-small-business-in-montgomery-county'}
                        date={'October 28, 2019'}
                        />
                    <br/>
                    
                </div>
            </div>
        )
      }
  }
}
