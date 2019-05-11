import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class More extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
          <img
            className="m-em"
            alt="bulb"
            src={require("../../../assets/images/icons/bulb-no-padding.png")}
            />&nbsp;More  
        </h1>
        <p>This will contain items for More related stuffs and is currently under construction.</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        <ArticlePreview 
          title={'Maryland Newspapers are Disappearing'}
          picPath={require('../../../assets/images/icons/Growth.png')}
          link={'/issues/more/facts/newspapers-disappearing'}
          date={'April, 1st 2019'}
          />
        <br/>
       

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>
        <ArticlePreview 
          title={'A Beginner’s Guide to the Montgomery County Budget'}
          picPath={require('../../../assets/images/icons/Math.png')}
          link={'/issues/more/stories-opinions/beginners-guide-to-budget'}
          date={'April, 1st 2019'}
          />
        <br/>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Legislation</h2>
        <p>What's before the county council and how will it affect you</p>
        <div className="blue">No articles yet, stay tuned!</div>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Solutions</h2>
        <p>The county's challenges and some ideas to address them</p>
        <ArticlePreview 
          title={'Proposals Worth Considering'}
          picPath={require('../../../assets/images/icons/Pencil.png')}
          link={'/issues/more/solutions/proposals-worth-considering'}
          date={'April, 1st 2019'}
          />
        <br/>
      </div>
    )
  }
}
