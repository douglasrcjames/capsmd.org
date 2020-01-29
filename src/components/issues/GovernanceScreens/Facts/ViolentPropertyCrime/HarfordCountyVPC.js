import React, { Component } from 'react'

export default class HarfordCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
            <iframe 
                src="https://drive.google.com/file/d/1yqL7GG76rOd88rCudvqtg5YnwJUuj2GA/preview" 
                title="HarfordCountyVPC"
                frameborder="0" 
                height="800px" 
                width="100%">
                <p>
                    This PDF could not be displayed, please download or view it 
                    <a href="https://drive.google.com/file/d/1yqL7GG76rOd88rCudvqtg5YnwJUuj2GA">
                        here.
                    </a>
                </p>
            </iframe>
        </div>
        )
    }
}
