import React, { Component } from 'react'
import ArticlePreview from '../issues/ArticlePreview'
export default class News extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>CAPS Press Releases</h1>
        <br/>
        <hr className="m-width"/>
        <br/>
        <ArticlePreview 
          title={'Letter from the CAPS Chairman'}
          picPath={require('../../assets/images/icons/Pencil.png')}
          link={'/news/letter-from-chairman'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={'CAPS Announces: Business Incubator and Student Entrepreneur Cultivation Program'}
          picPath={require('../../assets/images/icons/Growth.png')}
          link={'/news/business-incubator'}
          date={'May 16, 2019'}
          />
        <br/>
        <ArticlePreview 
          title={'CAPS Launches Inaugural Study: Identifying Best Practices for Recruiting and Retaining Teachers of Color Within Public Schools'}
          picPath={require('../../assets/images/icons/Handshake.png')}
          link={'/news/inaugural-study'}
          date={'May 16, 2019'}
          />
        <br/>

        <br/>
        <h1>External News</h1>
        <br/>
        <hr className="m-width"/>
        <br/>
        <ArticlePreview 
          title={'Podcast: A Miner Detail Podcast - David Blair on launching Council for Advocacy and Policy Solutions'}
          picPath={require('../../assets/images/icons/Handshake.png')}
          link={'https://podcasts.apple.com/us/podcast/david-blair-on-launching-council-for-advocacy-policy/id966333929?i=1000438975657'}
          date={'May 17, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'Former Montgomery Executive Candidate Launches Think Tank'}
          picPath={require('../../assets/images/icons/Handshake.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/government/former-montgomery-executive-candidate-launches-think-tank/?mode=grid'}
          date={'May 16, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'Ex-Montgomery Co. Exec Candidate Blair Launches Think Tank'}
          picPath={require('../../assets/images/icons/Handshake.png')}
          link={'https://www.marylandmatters.org/blog/ex-montgomery-co-exec-candidate-blair-launches-think-tank/'}
          date={'May 16, 2019'}
          external={true}
          />
        <br/>
        
        <ArticlePreview 
          title={'Oversight Office Finds Gaps in After-School Programs'}
          picPath={require('../../assets/images/icons/Pencil.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/schools/oversight-office-finds-gaps-in-after-school-programs/'}
          date={'March 21, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'‘Congestion emergency’ costs DC-area drivers around $2,000 a year'}
          picPath={require('../../assets/images/icons/Car.png')}
          link={'https://wtop.com/dc-transit/2019/03/congestion-emergency-costs-dc-area-drivers-thousands-a-year/'}
          date={'March 21, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'Scrutiny of Economic Development Efforts Ramped Up Amid Lackluster Jobs Report'}
          picPath={require('../../assets/images/icons/Briefcase.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/business/scrutiny-of-economic-development-efforts-ramped-up-amid-lackluster-jobs-report-2/'}
          date={'March 20, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'Gov. Hogan to Amazon: ‘We are still here, and we are still interested’'}
          picPath={require('../../assets/images/icons/Handshake.png')}
          link={'https://www.washingtonpost.com/local/md-politics/gov-hogan-to-amazon-we-are-still-here-and-we-are-still-interested/2019/03/19/7fdee338-4a5f-11e9-93d0-64dbcf38ba41_story.html?noredirect=on&utm_term=.5b452eb41466'}
          date={'March 19, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'County’s Proposed Budget Holds Property Tax Rate, Slightly Increases School Funding'}
          picPath={require('../../assets/images/icons/Budget.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/government/countys-proposed-budget-holds-property-tax-rate-slightly-increases-school-funding-2/'}
          date={'March 15, 2019'}
          external={true}
          />
        <br/>
        <ArticlePreview 
          title={'Montgomery’s Job Growth Trails Northern Virginia, D.C.'}
          picPath={require('../../assets/images/icons/Growth.png')}
          link={'https://bethesdamagazine.com/bethesda-beat/news/montgomerys-job-growth-trails-northern-virginia-d-c/'}
          date={'March 13, 2019'}
          external={true}
          />
        <br/>
      </div>
    )
  }
}
