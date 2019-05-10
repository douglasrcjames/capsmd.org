import React, { Component } from 'react'
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import Subscribe from '../components/Subscribe';
import Contact from '../components/Contact';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="wrapper">
        
        <div className="m-container">
          <h1>Contact Us</h1>
          <p>Send us a message directly or email us at <Link mailto="info@capsmd.org"><u>info@capsmd.org</u></Link></p>
          <Contact />
        </div>
        
        
        <br/>
        <hr />
        <br/>

        <div className="m-container">
          <h1>Donate</h1>
          <p>Your contribution goes directly to support bringing civics education, transparency and good sense policy to Montgomery County, MD.</p>
          <div className="center-text"><button className="m-btn">Contribute</button></div>
          <br/>
          <p className="s-text grey">
            Council for Advocacy and Policy Solutions (CAPS) operates as a 501(c)(4) under IRS Form 8976, Notice of Intent to Operate Under
            Section 501(c)(4). Organizations operating as 501(c)(4) organizations may also choose to file&nbsp;
            <a href="https://www.irs.gov/forms-pubs/about-form-1024-a" target="_blank" rel="noopener noreferrer">Form 1024-A</a>, Application for
            Recognition of Exemption Under Section 501(c)(4) of the Internal Revenue Code, to request recognition of tax-exempt status. CAPS
            is in process for submission of Form 1024-A.
          </p>
        </div>
        
        <br/>
        <div className="m-padding center-text background-light-grey">
          <h3>Join Our Mailing List</h3>
          <span>Keep up with the latest information about the county.</span>
          <Subscribe />
        </div>

    
      </div>
    )
  }
}
