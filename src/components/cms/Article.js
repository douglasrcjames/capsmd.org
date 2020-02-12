import React, { Component } from 'react'

export default class Article extends Component {
    render() {
        if(this.props.article.pdfUrl){
            return (
                <div className="pdf-container">
                    <iframe 
                        src={`${this.props.article.pdfUrl}/preview`} 
                        title={this.props.article.title}
                        frameBorder="0" 
                        height="800px" 
                        width="100%">
                        <p>
                            This PDF could not be displayed, please download or view it 
                            <a href={`${this.props.article.pdfUrl}`} >
                                here.
                            </a>
                        </p>
                    </iframe>
                </div>
            )
        } else if(this.props.article.body) {
            // var topBgImageStyle = {
            //     width: "100%",
            //     height: "200px",
            //     backgroundImage: `url(${this.props.article.picUrl})`,
            //     backgroundPosition: "50% 60%", // change me around to move up and down!
            //     backgroundSize: "cover"
            //   };
              
            return (
                <>
                {/* <div style ={ topBgImageStyle }></div> */}
                <div className="wrapper-w-img">
                    <h1>{this.props.article.title}</h1>
                    { this.props.article.date && (
                        <span className="grey">{this.props.article.date}</span>
                    )}

                    <br/>
                    <br/>
                    
                    <div dangerouslySetInnerHTML={{__html: this.props.article.body}}></div>

                    <br/>
                    <br/>

                    { this.props.article.author && (
                        <u className="blue">Written by {this.props.article.author}</u>
                    )}
                    
                </div>
                </>
            )
        } else {
            return (
                <div>Loading article...</div>
            )
        }
        
    }
}
