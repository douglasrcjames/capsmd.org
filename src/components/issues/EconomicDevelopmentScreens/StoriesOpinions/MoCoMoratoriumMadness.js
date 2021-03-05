import React, { Component } from 'react'
import Background from '../../../../assets/images/carousel/stop-sign.jpg';
import {
    LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from 'recharts';

  const data1 = [
    {
      name: '1994', "Units Permitted": 3590, "MCPS Enrollment": 113429,
    },
    {
      name: '1995', "Units Permitted": 3682, "MCPS Enrollment": 117082,
    },
    {
      name: '1996', "Units Permitted": 3062, "MCPS Enrollment": 120291,
    },
    {
      name: '1997', "Units Permitted": 3681, "MCPS Enrollment": 122505,
    },
    {
      name: '1998', "Units Permitted": 5315, "MCPS Enrollment": 125035,
    },
    {
      name: '1999', "Units Permitted": 4253, "MCPS Enrollment": 127852,
    },
    {
      name: '2000', "Units Permitted": 4950, "MCPS Enrollment": 130689,
    },
    {
      name: '2001', "Units Permitted": 5249, "MCPS Enrollment": 134180,
    },
    {
      name: '2002', "Units Permitted": 5013, "MCPS Enrollment": 136832,
    },
    {
      name: '2003', "Units Permitted": 4428, "MCPS Enrollment": 138891,
    },
    {
      name: '2004', "Units Permitted": 3821, "MCPS Enrollment": 139203,
    },
    {
      name: '2005', "Units Permitted": 3591, "MCPS Enrollment": 139337,
    },
    {
      name: '2006', "Units Permitted": 3031, "MCPS Enrollment": 139387,
    },
    {
      name: '2007', "Units Permitted": 3459, "MCPS Enrollment": 137798,
    },
    {
      name: '2008', "Units Permitted": 1476, "MCPS Enrollment": 137745,
    },
    {
      name: '2009', "Units Permitted": 862, "MCPS Enrollment": 137763,
    },
    {
      name: '2010', "Units Permitted": 1899, "MCPS Enrollment": 140500,
    },
    {
      name: '2011', "Units Permitted": 2512, "MCPS Enrollment": 143309,
    },
    {
      name: '2012', "Units Permitted": 3981, "MCPS Enrollment": 146497,
    },
    {
      name: '2013', "Units Permitted": 3514, "MCPS Enrollment": 149018,
    },
    {
      name: '2014', "Units Permitted": 3839, "MCPS Enrollment": 151289,
    },
    {
      name: '2015', "Units Permitted": 2087, "MCPS Enrollment": 153852,
    },
    {
      name: '2016', "Units Permitted": 2170, "MCPS Enrollment": 156447,
    },
    {
        name: '2017', "Units Permitted": 1637, "MCPS Enrollment": 159016,
    },
    {
        name: '2018', "Units Permitted": 1947, "MCPS Enrollment": 161470,
    },
  ];

export default class MoCoMoratoriumMadness extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 30%", // change me around to move up and down!
            backgroundSize: "cover",
            marginTop: "-20px",
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                <h1>MoCo’s Moratorium Madness</h1>
                <span className="grey">February 10, 2020</span>

                <p>
                    The Montgomery County government is currently plagued by a 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/government/montgomery-county-faces-possible-budget-shortfall/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;$100 million operating budget shortfall&nbsp;
                    </a>  
                    and 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/government/montgomery-county-faces-possible-budget-shortfall/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;a shrinking capital budget.&nbsp;
                    </a> 
                    So what is the county doing to revitalize its economy and earn more
                    revenue?
                </p>

                <p>Potentially, imposing more moratoriums on housing construction!</p>

                <p> 
                    <a 
                        href="https://montgomeryplanning.org/planning/functional-planning/subdivision-staging-policy/2016-subdivision-staging-policy/subdivision-staging-policy-faqs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;County development rules&nbsp;
                    </a>  
                    require moratoriums on housing construction inside school clusters or
                    individual school service areas when projected public school enrollment accounts for 120% or more of
                    capacity five years into the future. Additionally, elementary schools must be 110 students over capacity
                    and middle schools must be 180 students over capacity to trigger moratoriums. Projects that are
                    already approved are not halted by moratoriums but new project approvals are not granted.
                </p>

                <p>
                    Last year, the county 
                    <a 
                        href="https://montgomeryplanningboard.org/wp-content/uploads/2019/06/FY2020-Annual-Test-Staff-Report-FINAL_06-13-19_aj.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;imposed moratoriums on four high school clusters and 13 individual elementary school service areas.&nbsp;
                    </a>  
                    Those areas 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/development/residential-building-freeze-covers-12-of-county/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;accounted for roughly 12% of the county&nbsp;
                    </a>  
                    and included high-profile markets in Downtown Silver Spring and North Bethesda, thereby directly thwarting the county’s transit-
                    oriented development strategy.
                </p>

                <p>
                    The problem with stopping residential development is that school impact taxes collected from new units
                    can be a major source of revenue for school construction. As recently as the FY15-20 amended capital
                    budget, 
                    <a 
                        href="https://www.montgomerycountymd.gov/OMB/Resources/Files/omb/pdfs/fy16/cip_pdf/cip260.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;school impact taxes&nbsp;
                    </a>  
                    accounted for 15% of 
                    <a 
                        href="https://www.montgomerycountymd.gov/OMB/Resources/Files/omb/pdfs/fy16/cip_pdf/cip230.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;MCPS’s school construction budget.&nbsp;
                    </a>  
                    Unfortunately, that is no longer the case.
                </p>

                <p>
                    In a       
                    <a 
                        href="https://montgomeryplanningboard.org/wp-content/uploads/2020/01/CIP-FY21-comments-on-Execs-Recommended-20200206-final_JS_Signed_01-30-20.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;memo to the Montgomery County Planning Board,&nbsp;
                    </a> 
                    planning staff noted that the county executive’s
                    new recommended FY21-26 capital budget underfunds MCPS’s construction request by $61 million in
                    FY21, $93 million in FY22, $93 million in FY23 and $57 million in FY24. One of the biggest reasons for the
                    underfunding is that 
                    <a 
                        href="https://www.montgomerycountymd.gov/council/Resources/Files/agenda/cm/2020/20200130/20200130_GO1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;school impact tax receipts have fallen by more than half since FY14.&nbsp;
                    </a> 
                    The planning staff indicates that if the underfunding results in delayed projects, nine elementary school service areas
                    (Bethesda, Clarksburg, JoAnn Leleck, Rachel Carson, Strawberry Knoll, Summit Hall, McNair, Page and
                    Burnt Mills), one middle school service area (Parkland) and seven high school clusters (Quince Orchard,
                    Richard Montgomery, Albert Einstein, Montgomery Blair, Blake, Northwood, Walter Johnson) may be at
                    risk of moratoriums. For the Blake, Blair, Einstein and Walter Johnson clusters, this would be the second
                    straight year of moratorium, threatening projects in North Bethesda and Downtown Silver Spring.
                </p>

                <p>
                    The cruel fact here is that reducing residential construction has historically had little if any impact on
                    MCPS enrollment increases. The chart below shows MCPS enrollment (red line and left axis) and
                    residential units permitted in Montgomery County (blue line and right axis) from 1994 through 2018.
                    MCPS enrollment comes from the 
                    <a 
                        href="https://www.montgomerycountymd.gov/OMB/Resources/Files/omb/pdfs/FY20/psprec/10-MontgomeryCountyPublicSchools-FY2020-REC-Publication-Report.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;county executive’s recommended budget&nbsp;
                    </a> 
                    while permitted units comes from the   
                    <a 
                        href="https://www.census.gov/construction/bps/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;U.S. Census Bureau.&nbsp;
                    </a> 
                    Over this 24 year period, housing construction has been falling
                    while MCPS enrollment has been rising. The contrast between the two trends has been most
                    pronounced in recent years. Housing units permitted has fallen from 3,981 in 2012 to 1,947 in 2018
                    while MCPS enrollment has grown from 146,497 to 161,470. It defies logic to blame school crowding on
                    housing construction when homebuilding is in an era of decline.
                </p>

                <h4 className="center-text">MCPS Enrollment vs Residential Units Permitted, 1994-2018</h4>
                <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
                    <LineChart
                        data={data1}
                        margin={{
                          top: 5, right: 20, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="2 2" />
                        <XAxis dataKey="name" tick={{fontSize: '12px'}}/>
                        <YAxis yAxisId="left" offset={10} height={50} tick={{fontSize: '10px'}}>
                          <Label
                            value="MCPS Enrollment"
                            position="insideLeft"
                            angle={-90}
                            style={{ textAnchor: 'middle' }}
                            />
                        </YAxis>
                        <YAxis yAxisId="right" orientation="right" tick={{fontSize: '10px'}}>
                          <Label
                              value="Units Permitted"
                              position="insideRight"
                              angle={-90}
                              style={{ textAnchor: 'middle' }}
                              />
                        </YAxis>
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" yAxisId="left" dataKey="MCPS Enrollment" stroke="#82ca9d" activeDot={{ r: 8 }} />
                        <Line type="monotone" yAxisId="right" dataKey="Units Permitted" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>

                <p>
                    And so here is the effect of MoCo’s moratorium policy. Housing construction drops, 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/opinion-slow-housing-growth-clobbers-mocos-capital-budget/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;causing school impact tax payments to plummet&nbsp;
                    </a> 
                    and depriving school construction of needed funding. The county
                    reacts by delaying school projects, triggering moratoriums. That causes housing construction to decline
                    further and the cycle continues. None of this helps more schools get built but it definitely constrains
                    housing supply, thereby driving up home prices and making the county even more unaffordable to live
                    in than it already is. Another effect is that it makes the county radioactive to the real estate and
                    investment communities, thereby pushing them into competing jurisdictions. It’s no wonder that Prince
                    George’s County Executive Angela Alsobrooks is  
                    <a 
                        href="http://www.theseventhstate.com/?p=12254"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;celebrating&nbsp;
                    </a> 
                    her county’s passing of Montgomery County in job creation.
                </p>

                <p>
                    Using residential moratoriums to prevent school crowding is like treating lung cancer by amputating the
                    patient’s legs. The treatment does nothing to solve the original problem but it definitely causes new
                    problems to arise!
                </p>

                <p>
                    If you wanted to stop economic growth and make it harder for people to live here, it would be difficult
                    to devise something more attuned to such goals than MoCo’s insane moratorium policy. The county
                    must bring it to an end.
                </p>

                <span className="blue">
                    Written by Adam Pagnucco.
                </span>
            </div>
            </>
        )
    }
}