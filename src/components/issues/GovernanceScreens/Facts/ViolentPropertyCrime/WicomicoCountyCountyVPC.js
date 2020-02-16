import React, { Component } from 'react'

export default class WicomicoCountyCountyVPC extends Component {
    render() {
        return (
            // Make pdf wrapper with padding on top for mobile and a different height as well
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/17cbYjQZXrjLbaj3pthAC0IBkQtF8IvB3/preview" 
                    title="Wicomico County: Violent and Property Crime"
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/17cbYjQZXrjLbaj3pthAC0IBkQtF8IvB3">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
