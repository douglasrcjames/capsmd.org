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
          title={'An Examination of Resource Allocation, Demographics and Capacity Utilization in Montgomery County Public Schools'}
          picPath={require('../../../assets/images/carousel/library-curved.jpg')}
          link={'/issues/education/stories-opinions/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools'}
          date={''}
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
