import React, { Component } from 'react'
import ArticlePreview from '../../issues/ArticlePreview'

export default class PressReleases extends Component {
    render() {
        return (
            <div className="l-container">
                <h1>Press Releases</h1>
                <p>Learn about issues concerning our public schools and more</p>

                <br/>
                <hr className="m-width"/>
                <br/>

                <ArticlePreview 
                    title={"Event Advisory: CAPS, local advocacy organizations, hold successful community forum with large attendance"}
                    picPath={require('../../../assets/images/icons/Handshake.png')}
                    link={'/caps-foundation/press-releases/kirwan-join-moco-school-funding'}
                    date={'November 6, 2019'}
                    />
                <br/>
                <ArticlePreview 
                    title={"Event Advisory: CAPS, local advocacy organizations, to hold community forum with Dr. Brit Kirwan on Kirwan Recommendations"}
                    picPath={require('../../../assets/images/icons/Growth.png')}
                    link={'/caps-foundation/press-releases/blueprint-for-marylands-future'}
                    date={'October 6, 2019'}
                    />
                <br/>
            </div>
        )
    }
}
