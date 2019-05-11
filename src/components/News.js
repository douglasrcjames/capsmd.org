import React, { Component } from 'react'
import NewsArticlePreview from './NewsArticlePreview'
export default class News extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>News</h1>
        <br/>
        <hr className="m-width"/>
        <br/>

        <NewsArticlePreview 
          title={'Oversight Office Finds Gaps in After-School Programs'}
          picPath={require('../assets/images/icons/Pencil.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/schools/oversight-office-finds-gaps-in-after-school-programs/'}
          date={'March 21, 2019'}
          />
        <br/>
        <NewsArticlePreview 
          title={'‘Congestion emergency’ costs DC-area drivers around $2,000 a year'}
          picPath={require('../assets/images/icons/Car.png')}
          link={'https://wtop.com/dc-transit/2019/03/congestion-emergency-costs-dc-area-drivers-thousands-a-year/'}
          date={'March 21, 2019'}
          />
        <br/>
        <NewsArticlePreview 
          title={'Scrutiny of Economic Development Efforts Ramped Up Amid Lackluster Jobs Report'}
          picPath={require('../assets/images/icons/Briefcase.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/business/scrutiny-of-economic-development-efforts-ramped-up-amid-lackluster-jobs-report-2/'}
          date={'March 20, 2019'}
          />
        <br/>
        <NewsArticlePreview 
          title={'Gov. Hogan to Amazon: ‘We are still here, and we are still interested’'}
          picPath={require('../assets/images/icons/Handshake.png')}
          link={'https://www.washingtonpost.com/local/md-politics/gov-hogan-to-amazon-we-are-still-here-and-we-are-still-interested/2019/03/19/7fdee338-4a5f-11e9-93d0-64dbcf38ba41_story.html?noredirect=on&utm_term=.5b452eb41466'}
          date={'March 19, 2019'}
          />
        <br/>
        <NewsArticlePreview 
          title={'County’s Proposed Budget Holds Property Tax Rate, Slightly Increases School Funding'}
          picPath={require('../assets/images/icons/Budget.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/government/countys-proposed-budget-holds-property-tax-rate-slightly-increases-school-funding-2/'}
          date={'March 15, 2019'}
          />
        <br/>
        <NewsArticlePreview 
          title={'Montgomery’s Job Growth Trails Northern Virginia, D.C.'}
          picPath={require('../assets/images/icons/Growth.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/news/montgomerys-job-growth-trails-northern-virginia-d-c/'}
          date={'March 13, 2019'}
          />
        <br/>
      </div>
    )
  }
}
