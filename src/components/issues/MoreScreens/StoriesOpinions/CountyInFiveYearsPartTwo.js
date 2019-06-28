import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CountyInFiveYearsPartTwo extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Imagine Montgomery County in Five Years: Part Two</h1>
          <p>
            <Link to="/issues/more/stories-opinions/county-in-five-years-part-one">Part One</Link> posits a gloomy scenario of the condition of Montgomery County in five years.  
            But our future doesn’t have to be that way.  Here’s an alternate future in which the county turns around 
            its fortunes and begins ascending to greatness.
          </p>

          <p>
            The county’s improvement begins with a crisis: a recession that first hits in 2020 and begins to impact the budget hard in 2021.  
            Tens of thousands of jobs and hundreds of business establishments are wiped out and the county faces a $700 million deficit.  
            The county executive proposes a 12% property tax hike, a doubling of the energy tax, a $300 million raid on the county’s retiree health care 
            fund and a wage freeze to fill the gap.  But the council realizes that those measures would make the economy worse and risk losing the county’s AAA bond rating.  
            So the council responds by cutting back the size of the tax hikes and imposing a series of tough budget reforms, including:
          </p>

          <ul>
            <li>The county workforce is cut by 11% in two years through attrition and funding lapses.</li>
            <li>Benefit fund raids are prohibited unless nine council votes approve them.</li>
            <li>Additions of ongoing spending to the budget by the council are prohibited unless they are offset by equal reductions in ongoing spending.  
              Budget gimmicks and band-aids end.</li>
            <li>The operating and capital budgets are realigned around education and transportation.  Those two priorities are protected while other 
              functions are slashed to pay for them.</li>
            <li>Most importantly, a policy is established that raises for county employees must not be more than 50% above raises for private sector residents in any one year.  
              The three major county employee unions howl in rage but the council sticks to its guns.</li>
          </ul>

          <p>
            Budget reforms are just the beginning.  The county puts in place a series of economic development initiatives including:
          </p>

          <ul>
            <li>An aggressive Buy Local campaign is targeted at county consumers.</li>
            <li>The liquor monopoly ends as private sector wholesalers are allowed to compete with the Department of Liquor Control (DLC).  
              The DLC holds up surprisingly well as its ability to carry all products is not matched by private sector competitors who are limited to particular manufacturers by state law.  
              Consumers and businesses benefit from competition as the county suffers minimal losses in liquor revenues.</li>
            <li>A new student loan authority is implemented, finally giving the county an edge in attracting young entrepreneurs.</li>
            <li>A big expansion of the county’s community banking program is passed, pouring tens of millions of dollars into 
              local small businesses.</li>
            <li>Impact taxes near Metro stations are abolished, making transit-oriented development cheaper.  
              Impact taxes are raised in areas far from Metro to make up the lost revenue, discouraging sprawl and subsidizing smart growth.</li>
            <li>The Montgomery County Airpark is upgraded to encourage business flights.</li>
            <li>Duplicative procedures between Park and Planning and the Department of Permitting Services (DPS), such as the requirement that 
              both agencies approve record plats, are eliminated. 
               DPS fees are lowered to area averages in cases where they exceed them.</li>
            <li>A new entrepreneur scholarship program is established in coordination with Montgomery College and the Universities of Shady Grove.  
              The program is modeled on the county’s community grants program and taps into private funds to help pay its costs.</li>
            <li>Most importantly, the council establishes a moratorium on new regulations and legislation that create new costs for county employers until th
               county exceeds area employment growth averages for three consecutive years.  The county hits that mark five years after the moratorium is started 
               and county leaders decide to keep it in place.</li>
          </ul>

          <p>
            The new combination of economic development and budget policies don’t yield benefits immediately.  
            The recession begins to lift in 2023 and key stakeholders continue to protest the tough budget reforms for years.  
            But what distinguishes Montgomery County from the rest of the region is that it’s not simply trying to triage during 
            the recession: it’s acting strategically over the long term.  Difficult choices and high-minded vision finally change 
            the perception of the county as a bad place to do business.  In fact, the county’s job creation and business formation 
            statistics begin to smoke its competitors in D.C. and Virginia, a fact aggressively promoted by the county’s marketers.  
            By the end of the 2020s, the rest of the region begins to look at Montgomery County for the answers on how to revive their 
            own competitiveness.
          </p>

          <p>
            Yes, this could happen.  But will it?
          </p>

        <u className="blue">Written by Adam Pagnucco.</u>
       
      </div>
    )
  }
}
