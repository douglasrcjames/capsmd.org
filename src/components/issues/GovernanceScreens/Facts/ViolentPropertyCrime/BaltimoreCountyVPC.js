import React, { Component } from 'react'

export default class BaltimoreCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/146CvyVCHkFf3FLwI4pJHDThkHh6N50B0/preview" 
                    title="BaltimoreCountyVPC"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/146CvyVCHkFf3FLwI4pJHDThkHh6N50B0">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
