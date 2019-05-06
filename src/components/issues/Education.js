import React, { Component } from 'react'
import ArticlePreview from './ArticlePreview'

export default class Education extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Education</h1>
        <p>Learn about issues concerning our public schools and more</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Articles</h2>
        <p>A mix of articles with facts, opinions, stories, legislation and ideas from the CAPS team. </p>
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
