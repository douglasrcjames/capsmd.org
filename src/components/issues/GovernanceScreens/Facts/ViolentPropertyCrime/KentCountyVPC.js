import React, { Component } from 'react'

export default class KentCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1wpBI4ZK9cCxTSMk3UHWEs7_Mkrp29lo-/preview" 
                    title="KentCountyVPC"
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1wpBI4ZK9cCxTSMk3UHWEs7_Mkrp29lo-">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
