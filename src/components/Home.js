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
        title: 'An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools',
        button: 'Read Now',
        link: '/issues/education/stories-opinions/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools',
		image: require("../assets/images/carousel/library-curved.jpg"),
    },
    {
        title: 'Local Government Holds Key to Gun Reform',
        button: 'Read Now',
        link: '/issues/resident-reflections/local-government-holds-key-gun-reform',
		image: require("../assets/images/carousel/group-protest.jpg"),
    },
    {
        title: 'MCPS: The Numbers and Beyond',
        button: 'Read Now',
        link: '/issues/resident-reflections/mcps-the-numbers-beyond',
		image: require("../assets/images/carousel/green-chalk-board.jpg"),
    },
    {
        title: 'MoCo Board of Education Considers Redrawing School Lines',
        button: 'Read Now',
        link: '/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools',
		image: require("../assets/images/carousel/fence-signs.jpg"),
    },
    {
        title: 'MoCo Board of Education Considers Redrawing School Lines',
        button: 'Read Now',
        link: '/issues/resident-reflections/moco-board-education-considers-redrawing-school-lines',
		image: require("../assets/images/carousel/woman-sign.jpg"),
    },
    {
        title: 'How Did the County Spend Your Money This Year?',
        button: 'Read Now',
        link: '/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year',
		image: require("../assets/images/carousel/accounting-budget.jpg"),
    },
    {
        title: 'How is MoCo Doing? Preliminary Jobs Data for 2018',
        button: 'Read Now',
        link: '/issues/economic-development/stories-opinions/how-is-moco-doing-jobs-data-2018',
		image: require("../assets/images/carousel/finger-paper-graphs.jpg"),
    },
    {
        title: 'I-270 Expansion in Western Maryland',
        button: 'Read Now',
        link: '/issues/infrastructure/stories-opinions/I-270-Expansion-in-Western-Maryland',
		image: require("../assets/images/carousel/high-way.jpg"),
    },
    {
        title: 'Imagine Montgomery County in Five Years: Part One',
        button: 'Read Now',
        link: '/issues/more/stories-opinions/county-in-five-years-part-one',
		image: require("../assets/images/carousel/street-cars.jpg"),
    },
    {
        title: 'Imagine Montgomery County in Five Years: Part Two',
        button: 'Read Now',
        link: '/issues/more/stories-opinions/county-in-five-years-part-two',
		image: require("../assets/images/carousel/street-cars.jpg"),
    },
    {
        title: 'The Complexities of Child Care in a Nutshell',
        button: 'Read Now',
        link: '/issues/more/stories-opinions/complexities-child-care-nutshell',
		image: require("../assets/images/carousel/baby-toys.jpg"),
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
                    <Col md className="center-text">
                        <img
                            className="center small"
                            alt="dollar"
                            src={require("../assets/images/icons/dollar.png")}
                            />
                        <h4>Economic Development</h4>
                        <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>
                        <Link to="/issues/economic-development"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col md className="center-text">
                        <img
                            className="center small"
                            alt="book"
                            src={require("../assets/images/icons/book.png")}
                            />
                        <h4>Education</h4>
                        <p>Learn about issues concerning our public schools and more.</p>
                        <Link to="/issues/education"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col md className="center-text">
                        <img
                            className="center small"
                            alt="building"
                            src={require("../assets/images/icons/building.png")}
                            />
                        <h4>Infrastructure</h4>
                        <p>Learn about our infrastructure network, including roads, transit and more.</p>
                        <Link to="/issues/infrastructure"><span className="m-text blue">Learn more</span></Link>
                    </Col>
                    <Col md className="center-text">
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
                    <Col md className="center-text">
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
                title={'An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools'}
                picPath={require('../assets/images/carousel/library-curved.jpg')}
                link={'/issues/education/stories-opinions/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools'}
                date={''}
                />
            <br/>
            <NewsArticlePreview 
                    title={'Local Government Holds Key to Gun Reform'}
                    picPath={require('../assets/images/carousel/group-protest.jpg')}
                    link={'/issues/resident-reflections/local-government-holds-key-gun-reform'}
                    date={'September 8, 2019'}
                    />
            <br/>

            <NewsArticlePreview 
                title={'MCPS: The Numbers and Beyond'}
                picPath={require('../assets/images/carousel/green-chalk-board.jpg')}
                link={'/issues/resident-reflections/mcps-the-numbers-beyond'}
                date={'September 8, 2019'}
                />
            <br/>

            <NewsArticlePreview 
                title={'Demand for Mental Health Services Exceed Supply in MoCo Schools'}
                picPath={require('../assets/images/carousel/fence-signs.jpg')}
                link={'/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools'}
                date={'September 8, 2019'}
                />
            <br/>
            <NewsArticlePreview 
                title={'MoCo Board of Education Considers Redrawing School Lines'}
                picPath={require('../assets/images/carousel/woman-sign.jpg')}
                link={'/issues/resident-reflections/moco-board-education-considers-redrawing-school-lines'}
                date={'September 8, 2019'}
                />
            <br/>
            <NewsArticlePreview 
                title={'How Did the County Spend Your Money This Year?'}
                picPath={require('../assets/images/icons/Budget.png')}
                link={'/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year'}
                date={'August 18, 2019'}
                />
            <br/>

            <NewsArticlePreview 
                title={'I-270 Expansion in Western Maryland'}
                picPath={require('../assets/images/icons/Car.png')}
                link={'/issues/infrastructure/stories-opinions/I-270-Expansion-in-Western-Maryland'}
                />
            <br/>

            <NewsArticlePreview 
                title={'Imagine Montgomery County in Five Years: Part Two'}
                picPath={require('../assets/images/icons/Handshake.png')}
                link={'/issues/more/stories-opinions/county-in-five-years-part-two'}
                />
            <br/>

            <NewsArticlePreview 
                title={'Imagine Montgomery County in Five Years: Part One'}
                picPath={require('../assets/images/icons/Handshake.png')}
                link={'/issues/more/stories-opinions/county-in-five-years-part-one'}
                />
            <br/>

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
