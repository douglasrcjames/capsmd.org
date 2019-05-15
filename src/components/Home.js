import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from 'react-animated-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';

import Subscribe from './Subscribe';
import NewsArticlePreview from './news/NewsArticlePreview'


const sliderContent = [
    {
		title: `Letter from the  Chairman`,
        button: 'Read Now',
        link: '/news/letter-from-chairman',
        image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fman-writing.jpg?alt=media&token=8fca31c4-a9ff-4a03-a375-783ac6554eec`
    },
	{
		title: `Beginners Guide to the Budget`,
        button: 'Read Now',
        link: '/issues/more/stories-opinions/beginners-guide-to-budget',
        image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fbudget-table.jpg?alt=media&token=ce36b62e-96ea-4ef6-9645-e4c697021e33`
    },
	{
		title: 'CAPS Launches Student Incubator',
        button: 'Read Now',
        link: '/news/business-incubator',
		image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fchairs-classroom.jpg?alt=media&token=0096eb45-7b26-4c38-a94d-b150e68fc70a`,
    },
    {
		title: 'CAPS Launches Inaugural Study',
        button: 'Read Now',
        link: '/news/inaugural-study',
		image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fpeople-brainstorming.jpg?alt=media&token=a1d69df7-3e6c-4dc5-9a0e-7e316772b1d8`,
	},
	{
        title: 'Did Silver Spring build enough housing to stay affordable? Sort of.',
        button: 'Read Now',
        link: '/issues/infrastructure/stories-opinions/silver-spring-housing',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fside-view-car.jpg?alt=media&token=010359c9-33fb-40db-b838-114b89851fd5',
    },
    {
        title: 'David Blair Testifies in Annapolis',
        button: 'Read Now',
        link: '/issues/more/stories-opinions/testifying-my-conscience',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fgavel-court.jpg?alt=media&token=4ca6ba54-0fa5-46d2-82d4-6237f7fc40c3',
    },
];

export default class Home extends Component {
  render() {
    return (
    <div className="wrapper-top">
        <Slider className="slider-wrapper p-container" autoplay={3000} touchDisabled={true}>
            {sliderContent.map((item, index) => (
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
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="dollar"
                            src={require("../assets/images/icons/dollar.png")}
                            />
                        <h4>Economic Development</h4>
                        <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>
                        <Link to="/issues/economic-development"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="book"
                            src={require("../assets/images/icons/book.png")}
                            />
                        <h4>Education</h4>
                        <p>Learn about issues concerning our public schools and more.</p>
                        <Link to="/issues/education"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="building"
                            src={require("../assets/images/icons/building.png")}
                            />
                        <h4>Infrastructure</h4>
                        <p>Learn about our infrastructure network, including roads, transit and more.</p>
                        <Link to="/issues/infrastructure"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="books"
                            src={require("../assets/images/icons/bulb.png")}
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
            <NewsArticlePreview 
                title={'Letter from the Chairman'}
                picPath={require('../assets/images/icons/Pencil.png')}
                link={'https://www.capsmd.org/news/letter-from-chairman'}
                />
            <br/>

            <NewsArticlePreview 
                title={'CAPS Announces: Business Incubator and Student Entrepreneur Cultivation Program'}
                picPath={require('../assets/images/icons/Growth.png')}
                link={'https://www.capsmd.org/news/business-incubator'}
                date={'May 16, 2019'}
                />
            <br/>

            <NewsArticlePreview 
                title={'CAPS Launches Inaugural Study: Identifying Best Practices for Recruiting and Retaining Teachers of Color Within Public Schools'}
                picPath={require('../assets/images/icons/Handshake.png')}
                link={'https://www.capsmd.org/news/inaugural-study'}
                date={'May 16, 2019'}
                />
            <br/>
            
        </div>
    </div>
    )
  }
}
