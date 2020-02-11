import React, { Component } from 'react'

export default class FrederickCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1bgUQxNAvB6BKGDr44O9TQ0_YekeMkgTM/preview" 
                    title="FrederickCountyVPC"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1bgUQxNAvB6BKGDr44O9TQ0_YekeMkgTM">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
