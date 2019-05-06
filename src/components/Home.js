import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from 'react-animated-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';


const sliderContent = [
	{
		title: `A BEGINNER'S GUIDE TO THE MONTGOMERY COUNTY BUDGET`,
		description:
        `An organization’s budget is an indicator of what the organization values and what’s important to it. The County’s budget is no different.`,
		button: 'Read Now',
        image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fbudget-table.jpg?alt=media&token=2520e91c-88bd-4463-a933-56468c50bb54`
    },
	{
		title: 'CAPS LAUNCHES INAUGURAL STUDY',
		description:
        `Racial gaps within MCPS and the impact of disparities on student communities`,
		button: 'Read Now',
		image: `https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fpeople-brainstorming.jpg?alt=media&token=04723190-f548-48c5-8697-fceaf36a5c42`,
	},
	{
		title: 'MONTGOMERY COUNTY’S ROADS ARE MORE CLOGGED THAN EVER BEFORE',
		button: 'Read Now',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fside-view-car.jpg?alt=media&token=19321f8a-e80d-4706-bd61-d413d837b869',
    },
    {
		title: 'LET’S TRY AGAIN ON THREE GOOD VOTING BILLS',
		description:
        `The three General Assembly bills below would have made improvements to voting
         in Maryland. None of them passed in the 2019 session but hopefully they 
        will pass next time.`,
		button: 'Read Now',
		image: 'https://firebasestorage.googleapis.com/v0/b/capsmd-site.appspot.com/o/slider%2Fvoting-box.png?alt=media&token=aeea3b37-64b8-4313-81b6-3c61fa5c8be8',
	}
];

export default class Home extends Component {
  render() {
    return (
    <div className="wrapper-top">
        <Slider className="slider-wrapper" autoplay={3000} minSwipeOffset={100}>
            {sliderContent.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner">
                        <h1 className="blue">{item.title}</h1>
                        <h5 className="black m-text">{item.description}</h5>
                        <button className="s-btn">{item.button}</button>
                    </div>
                </div>
            ))}
        </Slider>
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
                        <Link to="/issues/economic-development"><span className="s-text grey">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="book"
                            src={require("../assets/images/icons/book.png")}
                            />
                        <h4>Education</h4>
                        <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>
                        <Link to="/issues/education"><span className="s-text grey">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center small"
                            alt="bus"
                            src={require("../assets/images/icons/bus.png")}
                            />
                        <h4>Infrastructure</h4>
                        <p>Learn about our infrastructure network, including roads, transit and more.</p>
                        <Link to="/issues/infrastructure"><span className="s-text grey">Learn more</span></Link>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="center-text">
                        <img
                            className="center medium"
                            alt="books"
                            src={require("../assets/images/icons/books.png")}
                            />
                        <h4>More</h4>
                        <p>Learn about other issues important to Montgomery County.</p>
                        <Link to="/issues/more"><span className="s-text grey">Learn more</span></Link>
                    </Col>
                </Row>
            </Grid>         
        </div>
        <div className="m-padding">
        <h1>Recent CAPS Updates</h1>
        <p>No updates yet, stay tuned!</p>
        </div>
    </div>
    )
  }
}
