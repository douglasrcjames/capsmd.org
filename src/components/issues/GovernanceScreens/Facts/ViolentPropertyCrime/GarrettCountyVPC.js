import React, { Component } from 'react'

export default class GarrettCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1jCz8fAxSWOVqDPgCcQ9FyAEd8KV7_Hwh/preview" 
                    title="GarrettCountyVPC"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1jCz8fAxSWOVqDPgCcQ9FyAEd8KV7_Hwh">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
