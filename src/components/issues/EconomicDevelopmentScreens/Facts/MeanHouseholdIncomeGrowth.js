import React, { Component } from 'react'

export default class MeanHouseholdIncomeGrowth extends Component {
    render() {
        return (
            <div className="pdf-container">
                <iframe 
                    src="https://drive.google.com/file/d/1UbKQlafgL93jZ5WFt4trtQheUCCSSsdQ/preview" 
                    title="Growth in Mean Household Income, 2005-09 vs 2013-17"
                    frameborder="0" 
                    height="800px" 
                    width="100%">
                    <p>
                        This PDF could not be displayed, please download or view it 
                        <a href="https://drive.google.com/file/d/1UbKQlafgL93jZ5WFt4trtQheUCCSSsdQ/">
                            here.
                        </a>
                    </p>
                </iframe>
            </div>
        )
    }
}
