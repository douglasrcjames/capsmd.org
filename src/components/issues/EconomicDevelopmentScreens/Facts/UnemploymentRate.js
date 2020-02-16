import React, { Component } from 'react'

export default class UnemploymentRate extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1F3XYAOQ_EuW22dDHsNltc0zE6egfuj-9/preview" 
                    title="Unemployment Rate, 2018"
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1F3XYAOQ_EuW22dDHsNltc0zE6egfuj-9/">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
