import React, { Component } from 'react'

export default class WashingtonCountyViolentandPropertyCrime extends Component {
    render() {
        return (
            // Make pdf wrapper with padding on top for mobile and a different height as well
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1xH88EL46LCVf9OC77DeXoW9BwEd4tizC/preview" 
                    title="Washington County: Violent and Property Crime"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1xH88EL46LCVf9OC77DeXoW9BwEd4tizC">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
