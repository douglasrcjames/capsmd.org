import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import Slider from 'react-animated-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';
import { firestore } from "../Fire.js";
import Subscribe from './Subscribe';
import ArticlePreview from './issues/ArticlePreview'
import { readableTimestamp } from '../utilities/dateTime'
import { HashLink } from 'react-router-hash-link';

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
        this.unsubscribeCarousel = firestore.collection("articles").where("carousel", "==", true).where("status", "==", "live").orderBy("date", "asc").limit(5).onSnapshot(snapshot => {
            const carouselArticles = [];
            snapshot.forEach(doc => {
                var articleContents = {
                    title: doc.data().title,
                    headerUrl: doc.data().headerUrl,
                    localUrl: doc.data().localUrl,
                    date: doc.data().date
                }
                carouselArticles.unshift(articleContents)
            })

            this.setState({
                carouselArticles: carouselArticles
            })
        }, () => {
            console.log("No carouselArticles!")
        });

        this.unsubscribeRecents = firestore.collection("articles").where("status", "==", "live").orderBy("date", "desc").limit(10).onSnapshot(snapshot => {
            const recentArticles = []
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
                 <div className="hero-container">
                    <div className="hero-content">
                        <h1 className="no-margin">We are stronger together.</h1>
                        <p className="xl-text">At CAPS, we believe in equality for all and strive to bring that to Montgomery County, Maryland.</p>
                        <HashLink to="/about-us#Contact"><button className="m-btn">Contact Us</button></HashLink>
                    </div>
                </div>
                <div className="slant-block background-blue edge--top edge--bottom">
                    <div className="l-container white">
                        <h1 className="white no-margin">Who are we?</h1>
                        <p>
                            The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization based in Montgomery County, Maryland. 
                            Commodo pariatur qui consequat anim ut nulla id eu et consequat. 
                            Aliqua sunt nulla Lorem Lorem. Nisi quis sint adipisicing elit duis consectetur sit. 
                            Ut ullamco consectetur commodo laborum laborum laboris eu duis aute ex ad sunt minim cillum. 
                            Deserunt reprehenderit enim pariatur ea.
                        </p>
                        <br/>
                        <div className="horiz-rule-white"/>
                        <br/>
                        <div className="center-text">
                            <h3 className="no-margin white">Join Our Mailing List</h3>
                            <span>Keep up with the latest information about the county.</span>
                            <Subscribe />
                        </div>
                        
                    </div>
                </div>
                
                <div className="l-container">
                    <h1>Explore the Issues</h1>
                    <Grid fluid>
                        <Row center={"xs"}>
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
                                <img
                                    className="center small"
                                    alt="dollar"
                                    src={require("../assets/images/icons/dollar.png")}
                                    />
                                <h4>Economic Development</h4>
                                <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>
                                <Link to="/issues/economic-development"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
                                <img
                                    className="center small"
                                    alt="book"
                                    src={require("../assets/images/icons/book.png")}
                                    />
                                <h4>Education</h4>
                                <p>Learn about issues concerning our public schools and more.</p>
                                <Link to="/issues/education"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
                                <img
                                    className="center small"
                                    alt="building"
                                    src={require("../assets/images/icons/building.png")}
                                    />
                                <h4>Infrastructure</h4>
                                <p>Learn about our infrastructure network, including roads, transit and more.</p>
                                <Link to="/issues/infrastructure"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
                                <img
                                    className="center small"
                                    alt="building"
                                    src={require("../assets/images/icons/bus.png")}
                                    />
                                <h4>Governance</h4>
                                <p>Learn about governance.</p>
                                <Link to="/issues/governance"><span className="m-text blue">Learn more</span></Link>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
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
                            <Col xs={12} sm={6} md={4} lg={3} className="center-text">
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
                <div className="l-container">
                    <h1>Featured Articles</h1>
                    { 
                        this.state.carouselArticles.map((article, i) => {
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
