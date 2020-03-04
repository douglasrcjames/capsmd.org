import React, { Component } from 'react'
import Subscribe from '../components/Subscribe';
import ContactForm from '../components/ContactForm';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="wrapper">
        
        <div className="m-container">
          <h1>Contact Us</h1>
          <p>Send us a message directly or email us at <a mailto="info@capsmd.org" href="# "><u>info@capsmd.org</u></a></p>
          <ContactForm />
        </div>
        
        
        <br/>
        <hr />
        <br/>

        <div className="m-container">
          <h1>Donate<a id="donate" href="/" className="hide">Donate</a></h1>
          <p>Your contribution goes directly to support bringing civics education, transparency and good sense policy to Montgomery County, MD.</p>
          {/* <div className="center-text"><button className="m-btn">Contribute</button></div> */}
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="TLCYBUWGMT2KY" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>

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
          <h3 className="no-margin">Join Our Mailing List</h3>
          <span>Keep up with the latest information about the county.</span>
          <Subscribe />
        </div>

    
      </div>
    )
  }
}
