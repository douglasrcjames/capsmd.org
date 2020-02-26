import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Headshot = ({ name, picPath, title, description }) => {
  return (
    <Col xs={12} sm={6} lg={3} className="m-padding-b">
      <img
          className="center headshot rounded"
          alt="headshot"
          src={picPath}
          />
      <div className="center-text">
        <h3 className="headshot-text">{name}</h3>
        <p className="blue headshot-text">{title}</p>
        <p className="grey headshot-text">{description}</p>
      </div>
     
    </Col>
  )
} 

export default class AboutUs extends Component {
  render() {
    return (
      <div className="wrapper-top">
      {/* Section 1 */}
      <div className="m-padding background-light-grey">
        <div className="l-container">
          <h1>Who We Are</h1>
          <p>
            The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization 
            based in Montgomery County, Maryland, USA. CAPS is the locus of discussion and information 
            dissemination for responsible local policy.
          </p>
          <div className="center-text">
            <Link to="/contact-us"><button className="m-btn">Contact Us</button></Link>
          </div>
        </div>
      </div>

      {/* Section 2 */}
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

      {/* Section 3 */}
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

      {/* Section 4 */}
      <div className="m-padding-t-r-l" >
        <h1>CAPS Advisory Board</h1>
        <Grid fluid>
          {/* Row 1 */}
          <Row>
            <Headshot name={'David Blair'} title={"Chair of the Board"} description={"Founder, Council for Advocacy and Policy Solutions"} picPath={require('../assets/images/headshots/David.png')} />
            <Headshot name={'Mikel Blair'} title={"Board Member"} description={"CEO, Badlands Playspace"} picPath={require('../assets/images/headshots/Mikel.png')} />
            <Headshot name={'Claudia Canales'} title={"Board Member"} description={"Montgomery County Activist"} picPath={require('../assets/images/headshots/Claudia.png')} />
            <Headshot name={'Jane Fairweather'} title={"Board Member"} description={"Owner at The Jane Fairweather Team"} picPath={require('../assets/images/headshots/Jane.png')} />
          </Row>

          {/* Row 2 */}
          <Row>
            <Headshot name={'Lisa Fuller'} title={"Board Member"} description={"Retired MCPS"} picPath={require('../assets/images/headshots/Lisa.png')} />
            <Headshot name={'Jason Green'} title={"Board Member"} description={"Former Associate Counsel to President Obama"} picPath={require('../assets/images/headshots/Jason.png')} />
            <Headshot name={'Mimi Hassanein'} title={"Board Member"} description={"Director of Community Outreach, Kid's Villa Learning Center "} picPath={require('../assets/images/headshots/Mimi.png')} /> 
            <Headshot name={'Terry Lierman'} title={"Board Member"} description={"Executive Officer, Health Ventures LLC"} picPath={require('../assets/images/headshots/Terry.png')} /> 
          </Row>

          {/* Row 3 */}
          <Row>
            <Headshot name={'Rose Li'} title={"Board Member"} description={"CEO + President, Rose Li and Associates"} picPath={require('../assets/images/headshots/Rose.png')} />
            <Headshot name={'Kelly Leonard'} title={"Board Member"} description={"CEO + Co-Founder, Taylor-Leonard Corporation"} picPath={require('../assets/images/headshots/Kelly.png')} />
            <Headshot name={'Chung Pak'} title={"Board Member"} description={"Retired Administrative Patent Judge"} picPath={require('../assets/images/headshots/Chung.png')} />
            <Headshot name={'Nancy Roman'} title={"Board Member"} description={"CEO + President - Partnership for a Healthier America"} picPath={require('../assets/images/headshots/Nancy.png')} />
          </Row>

          {/* Row 4 */}
          <Row>
            <Headshot name={'Jordan Steffy'} title={"Board Member"} description={"CEO + Founder, Attolo"} picPath={require('../assets/images/headshots/Jordan.png')} />
          </Row>
        </Grid>     
      </div>
    </div>
    )
  }
}
