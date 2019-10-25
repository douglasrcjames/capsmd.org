import React, { Component } from 'react'

export default class TalbotCountyViolentandPropertyCrime extends Component {
    render() {
        return (
            // Make pdf wrapper with padding on top for mobile and a different height as well
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1evwZmo5_8x-J2Lfsirs_rIPhTAL2a8f_/preview" 
                    title="Talbot County: Violent and Property Crime"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1evwZmo5_8x-J2Lfsirs_rIPhTAL2a8f_">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
