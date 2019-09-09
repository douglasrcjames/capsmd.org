import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class ResidentReflections extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>
                <img
                    className="m-em"
                    alt="bulb"
                    src={require("../../../assets/images/icons/bulb-no-padding.png")}
                    />&nbsp;Resident Reflections  
                </h1>
                <p>
                    Resident Reflections is an op-ed space dedicated to the empowerment of 
                    Montgomery County voices--giving residents a platform to share challenges and solutions 
                    that support community improvement. 
                </p>
                <p>For submission consideration, please email: <u>info@capsmd.org</u>.</p>
                <br/>
                <hr className="m-width"/>
                <br/>

                <ArticlePreview 
                    title={'Local Government Holds Key to Gun Reform'}
                    picPath={require('../../../assets/images/carousel/group-protest.jpg')}
                    link={'/issues/resident-reflections/local-government-holds-key-gun-reform'}
                    date={'September 8, 2019'}
                    />
                <br/>

                <ArticlePreview 
                    title={'MCPS: The Numbers and Beyond'}
                    picPath={require('../../../assets/images/carousel/green-chalk-board.jpg')}
                    link={'/issues/resident-reflections/mcps-the-numbers-beyond'}
                    date={'September 8, 2019'}
                    />
                <br/>

                <ArticlePreview 
                    title={'Demand for Mental Health Services Exceed Supply in MoCo Schools'}
                    picPath={require('../../../assets/images/carousel/fence-signs.jpg')}
                    link={'/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools'}
                    date={'September 8, 2019'}
                    />
                <br/>

                <ArticlePreview 
                    title={"Montgomery County Overlooks Development's Impact on Education"}
                    picPath={require('../../../assets/images/carousel/woman-sign.jpg')}
                    link={'/issues/resident-reflections/moco-overlooks-developments-impact-education'}
                    date={'September 8, 2019'}
                    />
                <br/>


            </div>
        )
    }
}
