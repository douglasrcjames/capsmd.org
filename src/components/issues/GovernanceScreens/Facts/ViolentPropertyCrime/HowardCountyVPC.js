import React, { Component } from 'react'

export default class HowardCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1A_sDa8nIFzfVkxQ3_j8R9HUlnd3EvV9A/preview" 
                    title="HowardCountyVPC"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1A_sDa8nIFzfVkxQ3_j8R9HUlnd3EvV9A">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
