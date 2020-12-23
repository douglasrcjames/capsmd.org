import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import Slider from 'react-animated-slider';
import { HashLink } from 'react-router-hash-link';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';
import Subscribe from './Subscribe';
// import { firestore } from "../Fire.js";

// import ArticlePreview from './issues/ArticlePreview'
// import { readableTimestamp } from '../utilities/dateTime'

class Home extends Component {
    // constructor(props) {
    //     super(props)
    //     // this.state = {
    //     //     carouselArticles: [],
    //     //     recentArticles: []
    //     // }
    // }

    // TODO: make constants for stuff like issue titles, carousel, etc and replace strings through app with constants
    // componentDidMount() {
    //     this.unsubscribeCarousel = firestore.collection("articles").where("carousel", "==", true).where("status", "==", "live").orderBy("date", "asc").limit(10).onSnapshot(snapshot => {
    //         const carouselArticles = [];
    //         snapshot.forEach(doc => {
    //             var articleContents = {
    //                 title: doc.data().title,
    //                 headerUrl: doc.data().headerUrl,
    //                 localUrl: doc.data().localUrl,
    //             }
    //             carouselArticles.unshift(articleContents)
    //         })

    //         this.setState({
    //             carouselArticles: carouselArticles
    //         })
    //     }, () => {
    //         console.log("No carouselArticles!")
    //     });

    //     this.unsubscribeRecents = firestore.collection("articles").where("status", "==", "live").orderBy("date", "desc").limit(10).onSnapshot(snapshot => {
    //         const recentArticles = []
    //         snapshot.forEach(doc => {
    //             var articleContents = {
    //                 title: doc.data().title,
    //                 localUrl: doc.data().localUrl,
    //                 headerUrl: doc.data().headerUrl,
    //                 date: doc.data().date
    //             }
    //             recentArticles.unshift(articleContents)
    //         })
    //         recentArticles.sort((a, b) =>
    //             a.date < b.date ? 1 : -1
    //         )
    //         this.setState({
    //             recentArticles: recentArticles
    //         })
    //     }, () => {
    //         console.log("No recentArticles!")
    //     });
    // }

    // componentWillUnmount() {
    //     this.unsubscribeRecents()
    //     this.unsubscribeCarousel()
    // }

  render() {
    //   if(!this.state.recentArticles || !this.state.carouselArticles){
    //       return(
    //           <h2 className="wrapper">Loading...</h2>
    //       )
    //   } else {
        return (
            <div className="wrapper-top">
                {/* <div className={this.state.showModal ? "hide" : "background-red center-text"}>
                    <div className="s-padding-t-b white"><i className="fa fa-wrench">&nbsp;</i> Site maintenance underway, some features might be down temporarily.</div>
                </div> */}


                {/* <Slider className="slider-wrapper p-container" autoplay={3000} touchDisabled={true}>
                    {this.state.carouselArticles.map((article, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${article.headerUrl}') no-repeat center center` }}
                        >
                            <div className="blur-modal inner">
                                <h1 className="blue">{article.title}</h1>
                                <Link to={article.localUrl}><button className="s-btn">Read Now</button></Link>
                            </div>
                        </div>
                    ))}
                </Slider> */}
                <div className="m-padding background-light-grey center-text">
                    <h1>Who are we?</h1>
                    <p className="l-text">The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization based in Montgomery County, Maryland.</p>
                    <div className="center-text">
                        <HashLink to="/about-us#Contact"><button className="m-btn">Contact Us</button></HashLink>
                    </div>
                    <br/>
                    <hr className="m-width" />
                    <br/>
        
                    <h3 className="no-margin">Join Our Mailing List</h3>
                    <span>Keep up with the latest information about the county.</span>
                    <Subscribe />
                </div>

                <div className="m-padding">
                    <div className="l-container">
                    <h1>We're on a Mission</h1>
                        <p>
                        Our mission is to educate and activate the local community by accurate and 
                        clear data, information, and resident expert opinions about policy implications. ‍ The 
                        Council for Advocacy and Policy Solutions partners with other nonprofits and charitable 
                        organizations to pilot real-change solutions to challenges facing our community.
                        </p>
                    </div>
                </div>

                <div className="m-padding background-light-grey">
                    <div className="l-container">
                    <h1>Our Principles</h1>
                    <p>
                        Home-grown information channels—newspapers—are disappearing. 
                        CAPS works to fill that void, and maintains a commitment to educating and 
                        supporting our community and elected officials through:
                    </p>
                    <Grid fluid className="l-padding-r-l">
                        <Row>
                            <Col xs={12} sm={6} md={4}>
                                <img
                                    className="center xsmall"
                                    alt="check"
                                    src={require("../assets/images/icons/check.png")}
                                    />
                                <p className="s-text l-padding-r-l center-text">Truth and accuracy in research and reporting of information and data</p>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <img
                                    className="center xsmall"
                                    alt="scale"
                                    src={require("../assets/images/icons/scale.png")}
                                    />
                                <p className="s-text l-padding-r-l center-text">Transparency in distinguishing facts and opinions</p>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <img
                                    className="center xsmall"
                                    alt="court"
                                    src={require("../assets/images/icons/court.png")}
                                    />
                                <p className="s-text l-padding-r-l center-text">Advocacy for sensible legislation and policy</p>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <img
                                    className="center xsmall"
                                    alt="medal"
                                    src={require("../assets/images/icons/medal.png")}
                                    />
                                <p className="s-text l-padding-r-l center-text"> Continuous pursuit of best practices</p>
                            </Col>
                            <Col xs={12} sm={6} md={4}>
                                <img
                                    className="center xsmall"
                                    alt="thumbs"
                                    src={require("../assets/images/icons/thumbs.png")}
                                    />
                                <p className="s-text l-padding-r-l">Dedication to piloting real-change programs</p>
                            </Col>
                        </Row>
                    </Grid>         
                    </div>
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
                {/* <div className="m-padding">
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

                    
                </div> */}
            </div>
        )
    //   }
  }
}

export default Home;
