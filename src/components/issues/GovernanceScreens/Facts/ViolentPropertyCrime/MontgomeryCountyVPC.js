import React, { Component } from 'react'

export default class MontgomeryCountyVPC extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1bzK7UJCiY3yiGSv47W8dqreuoLfxGUgb/preview" 
                    title="MontgomeryCountyVPC"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1bzK7UJCiY3yiGSv47W8dqreuoLfxGUgb">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
