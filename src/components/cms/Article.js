import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src={`${this.props.pdfUrl}/preview`} 
                    title={this.props.title}
                    frameBorder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href={`${this.props.pdfUrl}`} >
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
