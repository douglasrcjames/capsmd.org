import React, { Component } from 'react'

export default class PopulationGrowth extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1ZVViVycjEuiHW5wO3TPoNFSRZQxWL7Dl/preview" 
                    title="Population Growth, 2007-2017"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1ZVViVycjEuiHW5wO3TPoNFSRZQxWL7Dl/">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
