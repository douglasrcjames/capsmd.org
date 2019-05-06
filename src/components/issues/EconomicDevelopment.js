import React, { Component } from 'react'
import ArticlePreview from './ArticlePreview'

export default class EconomicDevelopment extends Component {
  render() {
    return (
    <div className="wrapper">
      <h1>Economic Development</h1>
      <p>Learn about jobs, business growth and other issues connected to growing the economy.</p>

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Facts</h2>
      <p>Information about where the county stands</p>
      <ArticlePreview 
        title={'Montgomery County Trails Most of the Region in New Housing'}
        picPath={require('../../assets/images/icons/Housing.png')}
        link={'/'}
        date={'April, 31st 2019'}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Business Growth'}
        picPath={require('../../assets/images/icons/Growth.png')}
        link={'/'}
        date={'April, 1st 2019'}
        />

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Stories &amp; Opinions</h2>
      <p>How the county decisions affect real life people</p>
      <ArticlePreview 
        title={'Montgomery County Trails Most of the Region in New Housing'}
        picPath={require('../../assets/images/icons/Math.png')}
        link={'/'}
        date={'April, 31st 2019'}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Business Growth'}
        picPath={require('../../assets/images/icons/Car.png')}
        link={'/'}
        date={'April, 1st 2019'}
        />

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Legislation</h2>
      <p>What's before the county council and how will it affect you</p>
      <ArticlePreview 
        title={'Montgomery County Trails Most of the Region in New Housing'}
        picPath={require('../../assets/images/icons/Budget.png')}
        link={'/'}
        date={'April, 31st 2019'}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Business Growth'}
        picPath={require('../../assets/images/icons/Housing Development.png')}
        link={'/'}
        date={'April, 1st 2019'}
        />

      <br/>
      <hr className="m-width"/>
      <br/>

      <h2 className="inline">Ideas</h2>
      <p>The county's challenges and some ideas to address them</p>
      <ArticlePreview 
        title={'Montgomery County Trails Most of the Region in New Housing'}
        picPath={require('../../assets/images/icons/Experiment.png')}
        link={'/'}
        date={'April, 31st 2019'}
        />
      <br/>
      <ArticlePreview 
        title={'Montgomery County Lags the Region in Business Growth'}
        picPath={require('../../assets/images/icons/Rail.png')}
        link={'/'}
        date={'April, 1st 2019'}
        />
    </div>
    )
  }
}
