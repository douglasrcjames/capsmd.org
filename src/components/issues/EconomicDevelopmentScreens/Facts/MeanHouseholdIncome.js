import React, { Component } from 'react'

export default class MeanHouseholdIncome extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1oOu9UrVzleQQta9vQiFBUA1NLJmIdwCj/preview" 
                    title="Mean Household Income, 2013-17"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1oOu9UrVzleQQta9vQiFBUA1NLJmIdwCj/">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
