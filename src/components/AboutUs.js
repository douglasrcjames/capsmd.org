import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="m-padding-t">
      {/* Section 1 */}
      <div className="m-padding background-light-grey">
        <h1>Who We Are</h1>
        <p>
        The Council for Advocacy and Policy Solutions (CAPS) is a non-profit public policy organization based in Montgomery County, Maryland, USA.
        CAPS is the locus of discussion and information dissemination about good sense policies for Montgomery County.
        </p>
        <Link to="/contact-us"><button className="s-btn">Contact Us</button></Link>
      </div>

      {/* Section 2 */}
      <div className="m-padding">
          <h1>We're on a Mission</h1>
          <p>
          Our mission is to educate and activate the local community by providing the municipal with accurate and clear data, information, 
          and resident expert opinions about policy implications. 
‍
          The Council for Advocacy and Policy Solutions partners with other nonprofits and charitable organizations to pilot 
          real-change solutions to challenges facing our community.
          </p>
          <Link to="/contact-us"><button className="s-btn">Contact Us</button></Link>
      </div>

      {/* Section 3 */}
      <div className="m-padding background-light-grey">
        <h1>Our Principles</h1>
        <p>
          Home-grown information channels—newspapers—are disappearing. 
          CAPS works to fill that void, and maintains a commitment to educating and 
          supporting our community and elected officials through:
        </p>
        <Grid fluid className="l-padding-r-l">
            <Row>
                <Col xs={12} s={6} md={3}>
                    <img
                        className="center xsmall"
                        alt="dollar"
                        src={require("../assets/images/icons/dollar.png")}
                        />
                    <br/>
                    <p>Truth and accuracy in research and reporting of information and data</p>
                </Col>
                <Col xs={12} s={6} md={3}>
                    <img
                        className="center xsmall"
                        alt="book"
                        src={require("../assets/images/icons/book.png")}
                        />
                    <br/>
                    <p>Transparency in distinguishing facts and opinions</p>
                </Col>
                <Col xs={12} s={6} md={3}>
                    <img
                        className="center xsmall"
                        alt="book"
                        src={require("../assets/images/icons/book.png")}
                        />
                    <br/>
                    <p>Advocacy for sensible legislation and policy</p>
                </Col>
                <Col xs={12} s={6} md={3}>
                    <img
                        className="center xsmall"
                        alt="bus"
                        src={require("../assets/images/icons/bus.png")}
                        />
                    <br/>
                    <p>Continuous pursuit of best practices</p>
                </Col>
                <Col xs={12} s={6} md={3}>
                    <img
                        className="center xsmall"
                        alt="bus"
                        src={require("../assets/images/icons/bus.png")}
                        />
                    <br/>
                    <p>Dedication to piloting real-change programs</p>
                </Col>
            </Row>
        </Grid>         
      </div>

      {/* Section 4 */}
      <div className="m-padding-t-r-l" >
        <h1>CAPS Advisory Board</h1>
        <Grid fluid>
          {/* Row 1 */}
          <Row>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Charlie.png")}
                  />
              <br/>
              <h3 className="center-text">Charlie Atwell</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/David.png")}
                  />
              <br/>
              <h3 className="center-text">David Blair</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Mikel.png")}
                  />
              <br/>
              <h3 className="center-text">Mikel Blair</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Jane.png")}
                  />
              <br/>
              <h3 className="center-text">Jane Fairweather</h3>
            </Col>
          </Row>
          {/* Row 2 */}
          <Row>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Lisa.png")}
                  />
              <br/>
              <h3 className="center-text">Lisa Fuller</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Jason.png")}
                  />
              <br/>
              <h3 className="center-text">Jason Green</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Mimi.png")}
                  />
              <br/>
              <h3 className="center-text">Mimi Hassinein</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Barbara.png")}
                  />
              <br/>
              <h3 className="center-text">Barbara Henry</h3>
            </Col>
          </Row>
          {/* Row 3 */}
          <Row>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Kelly.png")}
                  />
              <br/>
              <h3 className="center-text">Kelly Taylor Leonard</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Rose.png")}
                  />
              <br/>
              <h3 className="center-text">Rose Li</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Adam.png")}
                  />
              <br/>
              <h3 className="center-text">Adam Pagnucco</h3>
            </Col>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Chung.png")}
                  />
              <br/>
              <h3 className="center-text">Chung Pak</h3>
            </Col>
          </Row>
          {/* Row 4 */}
          <Row>
            <Col s={12} md={6} lg={3} className="m-padding-b">
              <img
                  className="center large"
                  alt="headshot"
                  src={require("../assets/images/headshots/Nancy.png")}
                  />
              <br/>
              <h3 className="center-text">Nancy Roman</h3>
            </Col>
          </Row>
        </Grid>     
      </div>
    </div>
    )
  }
}
