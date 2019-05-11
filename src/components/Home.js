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
		title: `Beginners Guide to the Budget`,
        author: `Adam Pagnucco`,
        description: `An organization’s budget is an indicator of what the organization values and what’s important to it. The County’s budget is no different.`,
        button: 'Read Now',
        link: '/issues/more/stories-opinions/beginners-guide-to-budget',
        image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fbudget-table.jpg?alt=media&token=ce36b62e-96ea-4ef6-9645-e4c697021e33`
    },
	{
		title: 'CAPS launches student incubator',
        button: 'Read Now',
        link: '/news/business-incubator',
		image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fpeople-brainstorming.jpg?alt=media&token=a1d69df7-3e6c-4dc5-9a0e-7e316772b1d8`,
	},
	{
        title: 'Did Silver Spring build enough housing to stay affordable? Sort of.',
        author:`Dan Reed`,
        button: 'Read Now',
        link: '/issues/infrastructure/stories-opinions/silver-spring-housing',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fside-view-car.jpg?alt=media&token=010359c9-33fb-40db-b838-114b89851fd5',
    },
    {
        title: 'Let’s Try Again on Three Good Voting Bills',
        author: 'Adam Pagnucco',
        button: 'Read Now',
        link: '/issues/more/legislation/voting-bills',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fballot-stickers.jpg?alt=media&token=5cc68a5c-25b3-4ebf-85d7-65abc63e810d',
    },
    {
		title: 'Proposals Worth Considering ',
        button: 'Read Now',
        link: '/issues/more/solutions/proposals-worth-considering', 
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fvoting-box.png?alt=media&token=bded4d83-fb48-442a-bfe4-f1fb9898c8c3',
	}
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
                title={'David Blair Announces Business Incubator and Student Entrepreneur Cultivation Program'}
                picPath={require('../assets/images/icons/Growth.png')}
                link={'https://www.capsmd.org/news/business-incubator'}
                date={'May 14, 2019'}
                />
            <br/>
            
        </div>
    </div>
    )
  }
}
