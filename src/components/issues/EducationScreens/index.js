import React, { Component } from 'react'
import ArticlePreview from '../ArticlePreview'

export default class Education extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>
          <img
            className="m-em"
            alt="book"
            src={require("../../../assets/images/icons/book-no-padding.png")}
            />&nbsp;Education  
        </h1>
        <p>Learn about issues concerning our public schools and more</p>

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Facts</h2>
        <p>Information about where the county stands</p>
        <ArticlePreview 
                title={'Finding 1: MCPS Distributes Staff Resources to Fight the Achievement Gap'}
                picPath={require('../../../assets/images/carousel/pencils-yellow.jpg')}
                link={'/issues/education/facts/finding-1-mcps-distributes-staff-resources-fight-achievement-gap'}
                date={'September 8, 2019'}
                />
        <br/>
        <ArticlePreview 
                title={'Finding 2: The Fiscal 2017 Property Tax Hike Did Not Bring Substantially More Resources to the Classroom'}
                picPath={require('../../../assets/images/carousel/money-bg.jpg')}
                link={'/issues/education/facts/finding-2-fiscal-2017-property-tax-hike-did-not-bring-substantially-more-resources-classroom'}
                date={'September 8, 2019'}
                />
        <br/>
        <ArticlePreview 
                title={'Finding 3: There Are Gigantic Demographic Gaps Between Students and Professional Staff'}
                picPath={require('../../../assets/images/carousel/classroom-teacher.jpg')}
                link={'/issues/education/facts/finding-3-there-are-gigantic-demographic-gaps-between-students-professional-staff'}
                date={'September 8, 2019'}
                />
        <br/>
        <ArticlePreview 
                title={'Finding 4: Boundary Shifts Can Play a Role in Solving Capacity Issues'}
                picPath={require('../../../assets/images/carousel/fence-grass-sky.jpg')}
                link={'/issues/education/facts/finding-4-boundary-shifts-can-play-role-solving-capacity-issues'}
                date={'September 8, 2019'}
                />
        <br/>
        <ArticlePreview 
          title={'An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools'}
          picPath={require('../../../assets/images/carousel/library-curved.jpg')}
          link={'/issues/education/facts/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools'}
          date={'September 8, 2019'}
          />
        <br/>
        <ArticlePreview 
          title={'County Per Pupil Funding for Schools is Trailing Inflation'}
          picPath={require('../../../assets/images/icons/Math.png')}
          link={'/issues/education/facts/per-pupil-funding'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={'The Needs in Montgomery County Public Schools are Growing but Classroom Support is Not'}
          picPath={require('../../../assets/images/icons/Briefcase.png')}
          link={'/issues/education/facts/public-school-needs'}
          date={''}
          />
        <br/>
        

        <br/>
        <hr className="m-width"/>
        <br/>

        <h2 className="inline">Stories &amp; Opinions</h2>
        <p>How the county decisions affect real life people</p>
        <ArticlePreview 
          title={'Is MoCo Getting its Fair Share from Kirwan?'}
          picPath={require('../../../assets/images/icons/Handshake.png')}
          link={'/issues/education/stories-opinions/getting-fair-share-from-kirwan'}
          date={''}
          />
        <br/>
        <ArticlePreview 
          title={'How MoCo Can Do Better on Kirwan Funding'}
          picPath={require('../../../assets/images/icons/Budget.png')}
          link={'/issues/education/stories-opinions/do-better-kirwan-funding'}
          date={''}
          />
        <br/>

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
          title={'How Kirwan Benefits Montgomery County'}
          picPath={require('../../../assets/images/carousel/strong-schools-maryland.jpg')}
          link={'/issues/education/solutions/how-kirwan-benefits-montgomery-county'}
          date={'September 8, 2019'}
          />
        <br/>
        <ArticlePreview 
          title={'Proposals Worth Considering'}
          picPath={require('../../../assets/images/icons/Pencil.png')}
          link={'/issues/education/solutions/proposals-worth-considering'}
          date={''}
          />
        <br/>
      </div>
    )
  }
}
