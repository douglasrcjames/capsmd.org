import React, { Component } from 'react'

export default class AnneArundelCountyVPC extends Component {
    render() {
        return (
        <div className="pdf-container">
            <iframe 
                src="https://drive.google.com/file/d/1uIprnehejftJsoexEc3Kg8V7rlVKopze/preview" 
                title="Crime in Maryland"
                frameBorder="0" 
                height="800px" 
                width="100%">
                <p>
                    This PDF could not be displayed, please download or view it 
                    <a href="https://drive.google.com/file/d/1uIprnehejftJsoexEc3Kg8V7rlVKopze">
                        here.
                    </a>
                </p>
            </iframe>
        </div>
        )
    }
}
