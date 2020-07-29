import React, { Component } from 'react'

export default class AboutFoundation extends Component {
    render() {
        return (
            <div className="wrapper-top">
                <div className="background-light-grey m-padding-r-l">
                    <div className="l-container">
                        <h1>About CAPS Foundation</h1>
                        <p>The CAPS Foundation was founded in April 2020 and  is a sister 501(c)(3) organization that designs and implements pilot programs to solve community needs through various nonprofit and community partnerships.</p>
                    </div>
                </div>

                <div className="m-padding-r-l">
                    <div className="l-container">
                        <h2>Mission</h2>
                        <p>To build our community through meaningful partnerships, strategic policies and generous resource sharing.</p>
                    </div>
                </div>
                   
                
                <div className="background-blue m-padding-r-l">
                    <div className="l-container white">
                        <h2 className="white">Vision</h2>
                        <p>To amplify the voices of impacted communities in Montgomery County and invest in systemic change. </p>
                    </div>
                </div>
                
            </div>
        )
    }
}
