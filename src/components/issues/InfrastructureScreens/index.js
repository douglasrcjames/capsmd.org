import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class Tranportation extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
            <img
              className="m-em"
              alt="building"
              src={require("../../../assets/images/icons/building-no-padding.png")}
              />&nbsp;Infrastructure  
          </h1>
        <p>Learn about Infrastructure including transportation, affordable housing and more</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        <ArticlePreview 
          title={"Montgomery County's Housing Construction Has Dropped Since the Recession"}
          picPath={require('../../../assets/images/icons/Housing Development.png')}
          link={'/issues/infrastructure/facts/housing-construction'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={'Montgomery County Trails Most of the Region in New Housing'}
          picPath={require('../../../assets/images/icons/Housing.png')}
          link={'/issues/infrastructure/facts/trails-in-new-housing'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={"Montgomery County's Roads are More Clogged Than Ever Before"}
          picPath={require('../../../assets/images/icons/Car.png')}
          link={'/issues/infrastructure/facts/roads-clogged'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={"Montgomery County Does Not Complete Transportation Projects on Time"}
          picPath={require('../../../assets/images/icons/Rail.png')}
          link={'/issues/infrastructure/facts/transportation-projects'}
          date={''}
          />
        <br/>
        

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>
        <ArticlePreview 
            title={"The Next 10 Years Will Determine the Fate of Affordable Housing in Montgomery County"}
            picPath={require('../../../assets/images/carousel/apartment-building.jpg')}
            link={'/issues/infrastructure/stories-opinions/ten-years-affordable-housing'}
            date={'January 6, 2020'}
            />
        <br/>
        <ArticlePreview 
          title={'I-270 Expansion in Western Maryland'}
          picPath={require('../../../assets/images/icons/Car.png')}
          link={'/issues/infrastructure/stories-opinions/I-270-Expansion-in-Western-Maryland'}
          />
        <br/>
        <ArticlePreview 
          title={'Pothole Pathos'}
          picPath={require('../../../assets/images/icons/Car.png')}
          link={'/issues/infrastructure/stories-opinions/pothole-pathos'}
          />
        <br/>
        <ArticlePreview 
          title={'How to Do BRT Properly'}
          picPath={require('../../../assets/images/icons/Rail.png')}
          link={'/issues/infrastructure/stories-opinions/how-to-do-brt-properly'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={'Did Silver Spring build enough housing to stay affordable? Sort of.'}
          picPath={require('../../../assets/images/icons/Housing.png')}
          link={'/issues/infrastructure/stories-opinions/silver-spring-housing'}
          date={''}
          />

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
          link={'/issues/infrastructure/solutions/proposals-worth-considering'}
          date={''}
          />
        <br/>
      </div>
    )
  }
}
