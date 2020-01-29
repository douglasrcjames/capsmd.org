import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Slider from 'react-animated-slider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/SliderAnimations.css';
import '../assets/css/Slider.css';

import Subscribe from './Subscribe';
import ArticlePreview from './issues/ArticlePreview'

const sliderContent = [
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
    {
        title: "CAPS x Freddy's",
        button: 'Read Now',
        link: '/issues/economic-development/stories-opinions/caps-x-lisa-payne',
		image: require("../assets/images/carousel/lobster.jpg"),
    },
    {
        title: "CAPS x LIA's",
        button: 'Read Now',
        link: '/issues/economic-development/stories-opinions/caps-x-lias',
		image: require("../assets/images/carousel/geoffs.jpg"),
    },
    {
        title: "Wait, I'm Undocumented?",
        button: 'Read Now',
        link: '/issues/resident-reflections/wait-im-undocumented',
		image: require("../assets/images/carousel/dreamer-jacket.jpg"),
    },
    {
        title: 'Finding 1: MCPS Distributes Staff Resources to Fight the Achievement Gap',
        button: 'Read Now',
        link: '/issues/education/facts/finding-1-mcps-distributes-staff-resources-fight-achievement-gap',
		image: require("../assets/images/carousel/pencils-yellow.jpg"),
    },
    {
        title: 'Finding 2: The Fiscal 2017 Property Tax Hike Did Not Bring Substantially More Resources to the Classroom',
        button: 'Read Now',
        link: '/issues/education/facts/finding-2-fiscal-2017-property-tax-hike-did-not-bring-substantially-more-resources-classroom',
		image: require("../assets/images/carousel/money-bg.jpg"),
    },
    {
        title: 'Finding 3: There Are Gigantic Demographic Gaps Between Students and Professional Staff',
        button: 'Read Now',
        link: '/issues/education/facts/finding-3-there-are-gigantic-demographic-gaps-between-students-professional-staff',
		image: require("../assets/images/carousel/classroom-teacher.jpg"),
    },
    {
        title: 'Finding 4: Boundary Shifts Can Play a Role in Solving Capacity Issues',
        button: 'Read Now',
        link: '/issues/education/facts/finding-4-boundary-shifts-can-play-role-solving-capacity-issues',
		image: require("../assets/images/carousel/fence-grass-sky.jpg"),
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
                            alt="building"
                            src={require("../assets/images/icons/bus.png")}
                            />
                        <h4>Governance</h4>
                        <p>Learn about governance.</p>
                        <Link to="/issues/governance"><span className="m-text blue">Learn more</span></Link>
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
            <ArticlePreview 
                title={"CAPS x Freddy's"}
                picPath={require('../assets/images/carousel/lobster.jpg')}
                link={'/issues/economic-development/stories-opinions/caps-x-lisa-payne'}
                date={'October 9, 2019'}
                />
            <br/>
            <ArticlePreview 
                title={"CAPS x LIA's"}
                picPath={require('../assets/images/carousel/geoffs.jpg')}
                link={'/issues/economic-development/stories-opinions/caps-x-lias'}
                date={'October 9, 2019'}
                />
            <br/>
            <ArticlePreview 
                title={"Wait, I'm Undocumented?"}
                picPath={require('../assets/images/carousel/dreamer-jacket.jpg')}
                link={'/issues/resident-reflections/wait-im-undocumented'}
                date={'September 10, 2019'}
                />
            <br/>
            <ArticlePreview 
                title={'Finding 1: MCPS Distributes Staff Resources to Fight the Achievement Gap'}
                picPath={require('../assets/images/carousel/pencils-yellow.jpg')}
                link={'/issues/education/facts/finding-1-mcps-distributes-staff-resources-fight-achievement-gap'}
                date={'September 8, 2019'}
                />
            <br/>
            <ArticlePreview 
                    title={'Finding 2: The Fiscal 2017 Property Tax Hike Did Not Bring Substantially More Resources to the Classroom'}
                    picPath={require('../assets/images/carousel/money-bg.jpg')}
                    link={'/issues/education/facts/finding-2-fiscal-2017-property-tax-hike-did-not-bring-substantially-more-resources-classroom'}
                    date={'September 8, 2019'}
                    />
            <br/>
            <ArticlePreview 
                    title={'Finding 3: There Are Gigantic Demographic Gaps Between Students and Professional Staff'}
                    picPath={require('../assets/images/carousel/classroom-teacher.jpg')}
                    link={'/issues/education/facts/finding-3-there-are-gigantic-demographic-gaps-between-students-professional-staff'}
                    date={'September 8, 2019'}
                    />
            <br/>
            <ArticlePreview 
                    title={'Finding 4: Boundary Shifts Can Play a Role in Solving Capacity Issues'}
                    picPath={require('../assets/images/carousel/fence-grass-sky.jpg')}
                    link={'/issues/education/facts/finding-4-boundary-shifts-can-play-role-solving-capacity-issues'}
                    date={'September 8, 2019'}
                    />
            <br/>
            <ArticlePreview 
                title={'How Kirwan Benefits Montgomery County'}
                picPath={require('../assets/images/carousel/strong-schools-maryland.jpg')}
                link={'/issues/education/solutions/how-kirwan-benefits-montgomery-county'}
                date={'September 8, 2019'}
                />
            <br/>
            <ArticlePreview 
                title={'An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools'}
                picPath={require('../assets/images/carousel/library-curved.jpg')}
                link={'/issues/education/facts/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools'}
                date={'September 8, 2019'}
                />
            <br/>
            <ArticlePreview 
                    title={'Local Government Holds Key to Gun Reform'}
                    picPath={require('../assets/images/carousel/group-protest.jpg')}
                    link={'/issues/resident-reflections/local-government-holds-key-gun-reform'}
                    date={'September 8, 2019'}
                    />
            <br/>

            <ArticlePreview 
                title={'MCPS: The Numbers and Beyond'}
                picPath={require('../assets/images/carousel/green-chalk-board.jpg')}
                link={'/issues/resident-reflections/mcps-the-numbers-beyond'}
                date={'September 8, 2019'}
                />
            <br/>
            
        </div>
    </div>
    )
  }
}
