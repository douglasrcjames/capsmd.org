import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
            <div className="f-container">
                <p className="center s-text grey m-width">
                    Council for Advocacy and Policy Solutions (CAPS) operates as a 501(c)(4) under IRS Form 8976, Notice of Intent to Operate Under
                    Section 501(c)(4). Organizations operating as 501(c)(4) organizations may also choose to file&nbsp;
                    <a href="https://www.irs.gov/forms-pubs/about-form-1024-a" target="_blank" rel="noopener noreferrer">Form 1024-A</a>, Application for
                    Recognition of Exemption Under Section 501(c)(4) of the Internal Revenue Code, to request recognition of tax-exempt status. CAPS
                    is in process for submission of Form 1024-A.
                </p> 
                <br/>
                Council for Advocacy and Policy Solutions
                &nbsp;
                &copy;
                {this.state.year}  
            </div>
        </footer>
        )
    }
}
