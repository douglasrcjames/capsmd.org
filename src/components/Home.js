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

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carouselArticles: [],
            recentArticles: []
        }
    }

    // TODO: make constants for stuff like issue titles, carousel, etc and replace strings through app with constants
    
    componentDidMount() {
        // TODO: when these 10 articles are pasted, reimplement .orderBy("date", "desc") in query instead of sort (for both recents and carousel)
        this.unsubscribeCarousel = firestore.collection("articles").where("carousel", "==", true).where("status", "==", "live").onSnapshot(snapshot => {
            const carouselArticles = [
                {
                    title: "MoCo’s Moratorium Madness",
                    headerUrl: `${require("../assets/images/carousel/stop-sign.jpg")}`,
                    localUrl: "/issues/economic-development/stories-opinions/moco-moratorium-madness",
                    date: 1581337677000
                },
                {
                    title: "Does the County Government Need More Revenue?",
                    headerUrl: `${require("../assets/images/carousel/revenue.jpg")}`,
                    localUrl: "/issues/economic-development/stories-opinions/does-county-need-more-revenue",
                    date: 1580300877000
                },
                {
                    title: "A Golden Opportunity: Promoting Lifelong Health by Investing in Infant & Early Childhood Mental Health",
                    headerUrl: `${require("../assets/images/carousel/hero-kid.jpg")}`,
                    localUrl: "/issues/education/facts/promoting-lifelong-health-by-investing-in-infant-and-early-childhood-mental-health",
                    date: 1575635277000
                },
                {
                    title: "Health Care Reform … Good Luck",
                    headerUrl: `${require("../assets/images/carousel/stethoscope.jpg")}`,
                    localUrl: "/issues/resident-reflections/health-care-form-good-luck",
                    date: 1574425677000
                },
                {
                    title: "Will MoCo Need a Tax Hike to Pay for Kirwan?",
                    headerUrl: `${require("../assets/images/carousel/school-bus.jpg")}`,
                    localUrl: "/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan",
                    date: 1572956877000
                },
                {
                    title: "The Potomac Divide",
                    headerUrl: `${require("../assets/images/carousel/brown-green-field.jpg")}`,
                    localUrl: "/issues/economic-development/facts/potomac-divide",
                    date: 1572870477000
                },
                {
                    title: "CAPS X Badlands",
                    headerUrl: `${require("../assets/images/carousel/badlands.jpg")}`,
                    localUrl: "/issues/resident-reflections/caps-x-badlands",
                    date: 1572438477000
                },
                {
                    title: "Starting a Small Business in Montgomery County",
                    headerUrl: `${require("../assets/images/carousel/dressing.jpg")}`,
                    localUrl: "/issues/resident-reflections/starting-small-business-in-montgomery-county",
                    date: 1572265677000
                },          
            ];
            // TODO: grab all article like this (not grabbing everything just stuff we need)
            snapshot.forEach(doc => {
                var articleContents = {
                    title: doc.data().title,
                    headerUrl: doc.data().headerUrl,
                    localUrl: doc.data().localUrl,
                    date: doc.data().date // ** wont need this here when we remove sorting after query
                }
                carouselArticles.unshift(articleContents)
            })
            carouselArticles.sort((a, b) =>
                a.date < b.date ? 1 : -1
            )
            this.setState({
                carouselArticles: carouselArticles
            })
        }, () => {
            console.log("No carouselArticles!")
        });

        this.unsubscribeRecents = firestore.collection("articles").where("status", "==", "live").limit(10).onSnapshot(snapshot => {
            const recentArticles = [
                {
                    title: "MoCo’s Moratorium Madness",
                    headerUrl: `${require("../assets/images/carousel/stop-sign.jpg")}`,
                    localUrl: "/issues/economic-development/stories-opinions/moco-moratorium-madness",
                    date: 1581337677000
                },
                {
                    title: "Does the County Government Need More Revenue?",
                    headerUrl: `${require("../assets/images/carousel/revenue.jpg")}`,
                    localUrl: "/issues/economic-development/stories-opinions/does-county-need-more-revenue",
                    date: 1580300877000
                },
                {
                    title: "A Golden Opportunity: Promoting Lifelong Health by Investing in Infant & Early Childhood Mental Health",
                    headerUrl: `${require("../assets/images/carousel/hero-kid.jpg")}`,
                    localUrl: "/issues/education/facts/promoting-lifelong-health-by-investing-in-infant-and-early-childhood-mental-health",
                    date: 1575635277000
                },
                {
                    title: "Health Care Reform … Good Luck",
                    headerUrl: `${require("../assets/images/carousel/stethoscope.jpg")}`,
                    localUrl: "/issues/resident-reflections/health-care-form-good-luck",
                    date: 1574425677000
                },
                {
                    title: "Will MoCo Need a Tax Hike to Pay for Kirwan?",
                    headerUrl: `${require("../assets/images/carousel/school-bus.jpg")}`,
                    localUrl: "/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan",
                    date: 1572956877000
                },
                {
                    title: "The Potomac Divide",
                    headerUrl: `${require("../assets/images/carousel/brown-green-field.jpg")}`,
                    localUrl: "/issues/economic-development/facts/potomac-divide",
                    date: 1572870477000
                },
                {
                    title: "CAPS X Badlands",
                    headerUrl: `${require("../assets/images/carousel/badlands.jpg")}`,
                    localUrl: "/issues/resident-reflections/caps-x-badlands",
                    date: 1572438477000
                },
                {
                    title: "Starting a Small Business in Montgomery County",
                    headerUrl: `${require("../assets/images/carousel/dressing.jpg")}`,
                    localUrl: "/issues/resident-reflections/starting-small-business-in-montgomery-county",
                    date: 1572265677000
                },             
            ]
            snapshot.forEach(doc => {
                var articleContents = {
                    title: doc.data().title,
                    localUrl: doc.data().localUrl,
                    headerUrl: doc.data().headerUrl,
                    date: doc.data().date
                }
                recentArticles.unshift(articleContents)
            })
            recentArticles.sort((a, b) =>
                a.date < b.date ? 1 : -1
            )
            this.setState({
                recentArticles: recentArticles
            })
        }, () => {
            console.log("No recentArticles!")
        });
    }

    componentWillUnmount() {
        this.unsubscribeRecents()
        this.unsubscribeCarousel()
    }

  render() {
      if(!this.state.recentArticles || !this.state.carouselArticles){
          return(
              <h2 className="wrapper">Loading...</h2>
          )
      } else {
        return (
            <div className="wrapper-top">
                {/* <div className={this.state.showModal ? "hide" : "background-red center-text"}>
                    <div className="s-padding-t-b white"><i className="fa fa-wrench">&nbsp;</i> Site maintenance underway, some features might be down temporarily.</div>
                </div> */}


                <Slider className="slider-wrapper p-container" autoplay={3000} touchDisabled={true}>
                    {this.state.carouselArticles.map((article, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${article.headerUrl}') no-repeat center center` }}
                        >
                            <div className="blur-modal inner">
                                <h1 className="blue">{article.title}</h1>
                                {/* { article.author && (<h5 className="black no-padding">by: {article.author}</h5>) } */}
                                {/* { article.description && (<p className="black">{article.description}</p>) } */}
                                <Link to={article.localUrl}><button className="s-btn">Read Now</button></Link>
                            </div>
                        </div>
                    ))}
                </Slider>
                <div className="m-padding background-light-grey center-text">
                    <h1>Who are we?</h1>
                    <p className="l-text">The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization based in Montgomery County, Maryland.</p>
                    <div className="center-text">
                        <Link to="/contact-us"><button className="m-btn">Contact Us</button></Link>
                    </div>
                    <br/>
                    <hr className="m-width" />
                    <br/>
        
                    <h3 className="no-margin">Join Our Mailing List</h3>
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

                    
                </div>
            </div>
        )
      }
  }
}

export default Home;
