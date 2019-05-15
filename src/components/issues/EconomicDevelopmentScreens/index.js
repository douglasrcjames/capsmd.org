import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class EconomicDevelopment extends Component {
  render() {
    return (
    <div className="wrapper">
      <h1>
        <img
          className="m-em"
          alt="cash"
          src={require("../../../assets/images/icons/dollar-no-padding.png")}
          />&nbsp;Economic Development  
      </h1>
      <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Facts</h2>
      <p>Information about where the county stands</p>
      <ArticlePreview 
        title={'Montgomery County’s Job Market is Stagnant'}
        picPath={require('../../../assets/images/icons/Briefcase.png')}
        link={'/issues/economic-development/facts/job-market-stagnant'}
        date={''}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Job Creation'}
        picPath={require('../../../assets/images/icons/Growth.png')}
        link={'/issues/economic-development/facts/lags-region-in-job-creation'}
        date={''}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Business Growth'}
        picPath={require('../../../assets/images/icons/Handshake.png')}
        link={'/issues/economic-development/facts/lags-region-in-business'}
        date={''}
        />
      <br/>
      <ArticlePreview 
        title={'People Moving Into Montgomery County Make Less than People Moving Out'}
        picPath={require('../../../assets/images/icons/Car.png')}
        link={'/issues/economic-development/facts/in-migrants-make-less'}
        date={''}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County is Losing More Taxpayer Income Than Most of the Rest of the Region'}
        picPath={require('../../../assets/images/icons/Budget.png')}
        link={'/issues/economic-development/facts/losing-taxpayer-income'}
        date={''}
        />
      <br/>
      <ArticlePreview 
        title={"Slow Growth Has Hit the County's Budget"}
        picPath={require('../../../assets/images/icons/Math.png')}
        link={'/issues/economic-development/facts/slow-growth-budget'}
        date={''}
        />
        <br/>
      <ArticlePreview 
        title={"Montgomery County is Not Investing Enough in Schools and Transportation"}
        picPath={require('../../../assets/images/icons/Rail.png')}
        link={'/issues/economic-development/facts/not-investing-in-schools'}
        date={''}
        />

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Stories &amp; Opinions</h2>
      <p>How the county decisions affect real life people</p>
      <div className="blue">No articles yet, stay tuned!</div>

      <br/>
      <hr className="m-width"/>
      <br/>

      {/* <h2 className="inline">Legislation</h2>
      <p>What's before the county council and how will it affect you</p>
      <div className="blue">No articles yet, stay tuned!</div>

      <br/>
      <hr className="m-width"/>
      <br/> */}

      <h2 className="inline">Solutions</h2>
      <p>The county's challenges and some ideas to address them</p>
      <ArticlePreview 
        title={'Proposals Worth Considering'}
        picPath={require('../../../assets/images/icons/Pencil.png')}
        link={'/issues/economic-development/solutions/proposals-worth-considering'}
        date={''}
        />
      <br/>
    </div>
    )
  }
}