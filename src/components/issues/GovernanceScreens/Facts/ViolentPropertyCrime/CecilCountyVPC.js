import React, { Component } from 'react'

export default class CecilCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1r1lrW8ZNKXviw1pl1vOaLwieYQlubiQK/preview" 
                    title="CecilCountyVPC"
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1r1lrW8ZNKXviw1pl1vOaLwieYQlubiQK">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
