import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class Tranportation extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Tranportation</h1>
        <p>This will contain items for Tranportation related stuffs and is currently under construction.</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        {/* <ArticlePreview 
          title={'Montgomery County Trails Most of the Region in New Housing'}
          picPath={require('../../../assets/images/icons/Housing.png')}
          link={'/'}
          date={'April, 31st 2019'}
          />
        <br/> */}
        <div className="blue">No articles yet, stay tuned!</div>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>
        <div className="blue">No articles yet, stay tuned!</div>

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
        <div className="blue">No articles yet, stay tuned!</div>
      </div>
    )
  }
}
