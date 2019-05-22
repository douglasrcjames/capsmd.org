import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";
import MediaQuery from "react-responsive";

class Header extends Component {
  render() {
      return (
        <header className="header-padding">
          <div className="top-nav">
            <MediaQuery minWidth={751}>
              <div className="nav-container">
                <Link to="/">
                  <img
                    className="responsive nav-logo"
                    alt="caps-logo"
                    src={require("../assets/images/logo/caps-logo-v3.png")}
                  />
                </Link>
                <div className="right">
                <NavLink to="/" exact={true} className="nav-link" activeClassName="nav-select">
                    Home
                </NavLink>
                &nbsp;
                  <div className="top-dropdown">
                    <Link className="nav-link">Issues &nbsp;<i className="fas fa-chevron-down fa-xs" /> </Link>
                    &nbsp;
                    <div className="top-dropdown-content">
                      <NavLink 
                          to="/issues/economic-development" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          Economic Development
                      </NavLink>
                      <NavLink 
                          to="/issues/education" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          Education
                      </NavLink>
                      <NavLink 
                          to="/issues/infrastructure" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          Infrastructure
                      </NavLink>
                      <NavLink 
                          to="/issues/more" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          More
                      </NavLink>
                    </div>  
                  </div>
                  &nbsp;
                  <NavLink to="/news" className="nav-link" activeClassName="nav-select">
                      News
                  </NavLink>
                  &nbsp;
                  <div className="top-dropdown">
                    <Link className="nav-link">Get Involved &nbsp;<i className="fas fa-chevron-down fa-xs" /> </Link>
                    &nbsp;
                    <div className="top-dropdown-content">
                        <NavLink 
                            to="/contact-us" 
                            className="nav-link dropdown"
                            activeClassName="nav-select">
                            Contact Us
                        </NavLink>
                        <NavLink 
                            to="/contact-us#donate" 
                            className="nav-link dropdown"
                            href="#example"
                            >
                            Donate
                        </NavLink>
                        <NavLink 
                            to="/find-legislators" 
                            className="nav-link dropdown"
                            activeClassName="nav-select">
                            Find Your Legislators
                        </NavLink>                     
                    </div>  
                  </div>
                  &nbsp;
                  <NavLink to="/about-us" className="nav-link" activeClassName="nav-select">
                      About Us
                  </NavLink>
                  &nbsp;
                </div>
              </div>
            </MediaQuery>

            {/* Mobile */}
            <MediaQuery maxWidth={750}>
            <Menu
                customBurgerIcon={<FaBars color="#003da5" />}
                right
                width="50%"
                // Why is the slider yellow button a higher z value than this??
              >
                <NavLink id="home" className="menu-item" to="/">
                    Home
                </NavLink>
                <div className="side-dropdown">
                  <span className="menu-item" >Issues &nbsp;<i className="fas fa-chevron-down fa-xs" /></span>
                  &nbsp;
                  <div className="side-dropdown-content">
                    <NavLink 
                        id="economic-development"
                        to="/issues/economic-development" 
                        className="menu-item">
                        Economic Development
                    </NavLink>
                    <NavLink 
                        id="education"
                        to="/issues/education" 
                        className="menu-item">
                        Education
                    </NavLink>
                    <NavLink 
                        id="infrastructure"
                        to="/issues/infrastructure" 
                        className="menu-item">
                        Infrastructure
                    </NavLink>
                    <NavLink 
                        id="more"
                        to="/issues/more" 
                        className="menu-item">
                        More
                    </NavLink>
                  </div>
                </div>
                <NavLink id="news" className="menu-item" to="/news">
                    News
                </NavLink>
                <NavLink id="about-us" className="menu-item" to="/about-us">
                    About Us
                </NavLink>
                <NavLink id="contact-us" className="menu-item" to="/contact-us">
                    Contact Us
                </NavLink>
              </Menu>
              {/* had to rearrange this order so the menu appear in the upper right corner */}
              <Link to="/">
                <img
                  className="responsive nav-logo"
                  alt="caps-logo"
                  src={require("../assets/images/logo/caps-logo-v3.png")}
                />
              </Link>
              
            </MediaQuery>
          </div>
        </header>
      );
    }
}

export default Header;
