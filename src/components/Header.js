import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";
import MediaQuery from "react-responsive";

class Header extends Component {
  render() {
      return (
        <header>
          <div className="top-nav">
            <MediaQuery minWidth={751}>
              <div className="nav-container">
                <Link to="/">
                  <img
                    className="responsive nav-logo"
                    alt="minutetech-logo"
                    src={require("../assets/images/logo/caps-logo.png")}
                  />
                </Link>
                <div className="right">
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
                                to="/issues/transportation" 
                                className="nav-link dropdown"
                                activeClassName="nav-select">
                                Transportation
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
                    <NavLink to="/about-us" className="nav-link" activeClassName="nav-select">
                        About Us
                    </NavLink>
                    &nbsp;
                    <NavLink to="/contact-us" className="nav-link" activeClassName="nav-select">
                        Contact Us
                    </NavLink> 
                </div>
              </div>
            </MediaQuery>

            {/* Mobile */}
            <MediaQuery maxWidth={750}>
              <Link to="/">
                <img
                  className="responsive nav-logo"
                  alt="minutetech-logo"
                  src={require("../assets/images/logo/caps-logo.png")}
                />
              </Link>
              <Menu
                customBurgerIcon={<FaBars color="#0a1a3a" />}
                right
                noOverlay
                width="50%"
              >
                <div className="side-dropdown">
                  <a className="menu-item">Issues &nbsp;<i className="fas fa-chevron-down fa-xs" /></a>
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
                        id="transportation"
                        to="/issues/transportation" 
                        className="menu-item">
                        Transportation
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
                <NavLink id="contact-us" className="menu-item" to="/contact-us">
                    Contact Us
                </NavLink>
                <NavLink id="about-us" className="menu-item" to="/about-us">
                    About Us
                </NavLink>
              </Menu>
            </MediaQuery>
          </div>
        </header>
      );
    }
}

export default Header;
