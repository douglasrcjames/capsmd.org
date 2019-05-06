import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Contact Us</h1>
        <p>Send us a message directly or email us at <Link mailto="info@capsmd.org"><u>info@capsmd.org</u></Link></p>
        
        {/* Use formik here! */}
        {/* Repeat the donate and subscribe component here */}
        <h1>Donate</h1>
        <p>Your contribution goes directly to support bringing civics education, transparency and good sense policy to Montgomery County, MD.</p>
        <div className="center-text"><button className="s-btn">Contribute</button></div>
        <br/>
        <p className="s-text grey">
          Council for Advocacy and Policy Solutions (CAPS) operates as a 501(c)(4) under IRS Form 8976, Notice of Intent to Operate Under
          Section 501(c)(4). Organizations operating as 501(c)(4) organizations may also choose to file Form 1024-A, Application for
          Recognition of Exemption Under Section 501(c)(4) of the Internal Revenue Code, to request recognition of tax-exempt status. CAPS
          is in process for submission of Form 1024-A.
        </p>
      </div>
    )
  }
}
