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
import Modal from "react-modal";

export default class Home extends Component {
    _isMounted = false
    constructor(props) {
        super(props)
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.state = {
            carouselArticles: [],
            recentArticles: [],
            showModal: true
        }
    }

    // TODO: make constants for stuff like issue titles, carousel, etc and replace strings through app with constants
    
    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted){
            // TODO: when these 10 articles are pasted, reimplement .orderBy("date", "desc") in query instead of sort (for both recents and carousel)
            firestore.collection("articles").where("carousel", "==", true).where("status", "==", "live").onSnapshot(snapshot => {
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

            firestore.collection("articles").where("status", "==", "live").limit(10).onSnapshot(snapshot => {
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
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
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

                    
                </div>

                <Modal
                        isOpen={this.state.showModal}
                        contentLabel="David Blair's Written Testimony"
                        className="modal"
                        overlayClassName="modal-overlay"
                        onRequestClose={this.handleCloseModal}
                    >
                    <div className="top-bar"><h4 className="white heading">David Blair's Written Testimony</h4><i onClick={() => this.handleCloseModal()} className="close"/></div>
                    <div className="modal-pdf-container">
                         <div className="l-container center-text">
                            <b>
                            Join me in reaching out to your local legislator to fully fund and pass 
                            The Blueprint for Maryland's Future Bill (House Bill 1300 and Senate Bill 1000): 
                            <br/>
                            <a href="https://msa.maryland.gov/msa/mdmanual/07leg/html/gacomo.html" target="_blank" rel="noopener noreferrer">
                                <button  className="s-btn s-margin-t-b" type="button" >Join me!</button>
                            </a>
                            </b>
                        </div>
                        <iframe 
                            src="https://drive.google.com/file/d/1-AtOMkAalpkLrflPD9UPpdQ4XAHReGRz/preview" 
                            title="David Blair's Written Testimony"
                            frameBorder="0" 
                            height="650px" 
                            width="100%">
                            <p>
                                This PDF could not be displayed, please download or view it 
                                <a href="https://drive.google.com/file/d/1-AtOMkAalpkLrflPD9UPpdQ4XAHReGRz">
                                    here.
                                </a>
                            </p>
                        </iframe>
                        
                        
                    </div>
                </Modal>
            </div>
        )
      }
  }
}
