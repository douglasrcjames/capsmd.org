import React, { Component } from 'react'

export default class HousingUnitsPermitted extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1SFzWbGL0F75wAfwhIiMQr8V2R40jeKCM/preview" 
                    title="Housing Units Permitted per Thousand Residents, 2009-2018"
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1SFzWbGL0F75wAfwhIiMQr8V2R40jeKCM">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
