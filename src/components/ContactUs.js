import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class ContactUs extends Component {
  render() {
    return (
      <div className="m-padding">
        <h1>Contact Us</h1>
        <p>Send us a message directly or email us at <Link mailto="info@capsmd.org"><u>info@capsmd.org</u></Link></p>
        
        {/* Use formik here! */}
        {/* Repeat the donate and subscribe component here */}
        <h1>Donate</h1>
        <p>Your contribution goes directly to support bringing civics education, transparency and good sense policy to Montgomery County, MD.</p>
        <button className="s-btn">Contribute</button>
      </div>
    )
  }
}
