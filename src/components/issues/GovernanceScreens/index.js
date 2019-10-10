import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class Governance extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
            <img
              className="m-em"
              alt="Governance"
              src={require("../../../assets/images/icons/bus-no-padding.png")}
              />&nbsp;Governance  
          </h1>
        <p>Learn about Governance</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        <ArticlePreview 
          title={"Crime in Maryland"}
          picPath={require('../../../assets/images/icons/Growth.png')}
          link={'/issues/governance/facts/crime-in-maryland'}
          date={''}
          />
        <br/>

        {/* <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        {/* <h2 className="inline">Legislation</h2>
        <p>What's before the county council and how will it affect you</p>
        <div className="blue">No articles yet, stay tuned!</div>

        <br/>
        <hr className="m-width"/>
        <br/> */}
        {/*  
        <h2 className="inline">Solutions</h2>
        <p>The county's challenges and some ideas to address them</p>
        */}
      </div>
    )
  }
}
