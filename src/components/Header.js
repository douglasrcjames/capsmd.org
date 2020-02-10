import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { FaBars } from "react-icons/fa";
import MediaQuery from "react-responsive";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }
  
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu() {
    this.setState({menuOpen: false})
  }

  toggleMenu() {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }
  render() {
      return (
        <header className="header-padding">
          <div className="top-nav">
            <MediaQuery minWidth={921}>
              <div className="nav-container">
                <Link to="/">
                  <img
                    className="responsive nav-logo"
                    alt="caps-logo"
                    src={require("../assets/images/logo/caps-logo-v4.png")}
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
                          to="/issues/governance" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          Governance
                      </NavLink>
                      <NavLink 
                          to="/issues/resident-reflections" 
                          className="nav-link dropdown"
                          activeClassName="nav-select">
                          Resident Reflections
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
                    <Link className="nav-link">CAPS Foundation &nbsp;<i className="fas fa-chevron-down fa-xs" /> </Link>
                    &nbsp;
                    <div className="top-dropdown-content">
                        <NavLink 
                            to="/caps-foundation/pilot-program" 
                            className="nav-link dropdown"
                            activeClassName="nav-select">
                            Pilot Program
                        </NavLink>
                        <NavLink 
                            to="/caps-foundation/press-releases" 
                            className="nav-link dropdown"
                            activeClassName="nav-select">
                            Press Releases
                        </NavLink>
                        <NavLink 
                            to="/caps-foundation/donate" 
                            className="nav-link dropdown"
                            activeClassName="nav-select">
                            Donate
                        </NavLink>                     
                    </div>  
                  </div>
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
                            href="#donate"
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
            <MediaQuery maxWidth={920}>
            <Menu
                customBurgerIcon={<FaBars color="#003da5" onClick={() => this.toggleMenu()} />}
                right
                width="70%"
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                // Why is the slider yellow button a higher z value than this??
              >
                <NavLink id="home" className="menu-item" to="/" onClick={() => this.closeMenu()}>
                    Home
                </NavLink>
                <div className="side-dropdown">
                  <span className="menu-item" >Issues &nbsp;<i className="fas fa-chevron-down fa-xs" /></span>
                  &nbsp;
                  <div className="side-dropdown-content">
                    <NavLink 
                        id="economic-development"
                        to="/issues/economic-development" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Economic Development
                    </NavLink>
                    <NavLink 
                        id="education"
                        to="/issues/education" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Education
                    </NavLink>
                    <NavLink 
                        id="infrastructure"
                        to="/issues/infrastructure" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Infrastructure
                    </NavLink>
                    <NavLink 
                          id="governance"
                          to="/issues/governance" 
                          className="menu-item"
                          // activeClassName="nav-select"
                          onClick={() => this.closeMenu()}>
                          Governance
                      </NavLink>
                    <NavLink 
                        id="resident-reflections"
                        to="/issues/resident-reflections" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Resident Reflections
                    </NavLink>
                    <NavLink 
                        id="more"
                        to="/issues/more" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        More
                    </NavLink>
                  </div>
                </div>
                <NavLink id="news" className="menu-item" to="/news" onClick={() => this.closeMenu()}>
                    News
                </NavLink>
                <div className="side-dropdown">
                  <span className="menu-item" >CAPS Foundation &nbsp;<i className="fas fa-chevron-down fa-xs" /></span>
                  &nbsp;
                  <div className="side-dropdown-content">
                    <NavLink 
                        id="pilot-program"
                        to="/caps-foundation/pilot-program" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Pilot Program
                    </NavLink>
                    <NavLink 
                        id="press-releases"
                        to="/caps-foundation/press-releases" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Press Releases
                    </NavLink>
                    <NavLink 
                        id="donate"
                        to="/caps-foundation/donate" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Donate
                    </NavLink>
                  </div>
                </div>
                <div className="side-dropdown">
                  <span className="menu-item" >Get Involved &nbsp;<i className="fas fa-chevron-down fa-xs" /></span>
                  &nbsp;
                  <div className="side-dropdown-content">
                    <NavLink 
                        id="about-us"
                        to="/about-us"
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        About Us
                    </NavLink>
                    <NavLink 
                        id="donate"
                        to="/contact-us#donate"
                        href="#donate" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Donate
                    </NavLink>
                    <NavLink 
                        id="infrastructure"
                        to="/find-legislators" 
                        className="menu-item"
                        onClick={() => this.closeMenu()}>
                        Find Your Legislators
                    </NavLink>
                  </div>
                </div>
                <NavLink id="contact-us" className="menu-item" to="/contact-us" onClick={() => this.closeMenu()}>
                    Contact Us
                </NavLink>
              </Menu>
              {/* had to rearrange this order so the menu appear in the upper right corner */}
              <Link to="/">
                <img
                  className="responsive nav-logo"
                  alt="caps-logo"
                  src={require("../assets/images/logo/caps-logo-v4.png")}
                />
              </Link>
              
            </MediaQuery>
          </div>
        </header>
      );
    }
}

export default Header;
