import React, { Component } from 'react'
import {
    BarChart, LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, ResponsiveContainer
  } from 'recharts';
  
  const data1 = [
    {
        name: 'Alex.', '2018': -2, 'Avg. 2010-2017': -0.6,
    },
    {
        name: 'P.G.', '2018': 0.4, 'Avg. 2010-2017': 0.6,
    },
    {
        name: 'MoCo', '2018': 0.5, 'Avg. 2010-2017': 0.7,
    },
    {
        name: 'Arl.', '2018': 0.9, 'Avg. 2010-2017': 1.4,
    },
    {
        name: 'Region', '2018': 1, 'Avg. 2010-2017': 1.1,
    },
    {
        name: 'D.C.', '2018': 1, 'Avg. 2010-2017': 1.4,
    },
    {
        name: 'Fred.', '2018': 1.5, 'Avg. 2010-2017': 1.2,
    },
    {
        name: 'Fairfax', '2018': 1.8, 'Avg. 2010-2017': 0.7,
    },
    {
        name: 'P.W.', '2018': 1.9, 'Avg. 2010-2017': 2.9,
    },
    {
        name: 'Loudoun', '2018': 2.8, 'Avg. 2010-2017': 3.0,
    },
    
  ];

  const data2 = [
    {
        name: 'Alex.', '2018': -1.2, 'Avg. 2010-2017': 0.6,
    },
    {
        name: 'D.C.', '2018': -0.4, 'Avg. 2010-2017': 2.0,
    },
    {
        name: 'MoCo', '2018': -0.3, 'Avg. 2010-2017': 0.1,
    },
    {
        name: 'Arl.', '2018': -0.1, 'Avg. 2010-2017': 2.0,
    },
    {
        name: 'Fairfax', '2018': 0.3, 'Avg. 2010-2017': 1.2,
    },
    {
        name: 'Region', '2018': 0.4, 'Avg. 2010-2017': 1.3,
    },
    {
        name: 'P.G.', '2018': 0.5, 'Avg. 2010-2017': 0.2,
    },
    {
        name: 'Fred.', '2018': 0.6, 'Avg. 2010-2017': 1.0,
    },
    {
        name: 'P.W.', '2018': 1.7, 'Avg. 2010-2017': 3.1,
    },
    {
        name: 'Loudoun', '2018': 2.8, 'Avg. 2010-2017': 3.8,
    },
    
  ];

  const data3 = [
    {
        year: '2001', '% of Jobs': 16.76, '% of Establishments': 20.45,
    },
    {
        year: '2002', '% of Jobs': 16.82, '% of Establishments': 20.58,
    },
    {
        year: '2003', '% of Jobs': 16.53, '% of Establishments': 20.34,
    },
    {
        year: '2004', '% of Jobs': 16.12, '% of Establishments': 20.32,
    },
    {
        year: '2005', '% of Jobs': 16.12, '% of Establishments': 20.06,
    },
    {
        year: '2006', '% of Jobs': 16.10, '% of Establishments': 19.81,
    },
    {
        year: '2007', '% of Jobs': 15.79, '% of Establishments': 19.43,
    },
    {
        year: '2008', '% of Jobs': 15.70, '% of Establishments': 19.03,
    },
    {
        year: '2009', '% of Jobs': 15.51, '% of Establishments': 18.75,
    },
    {
        year: '2010', '% of Jobs': 15.39, '% of Establishments': 18.60,
    },
    {
        year: '2011', '% of Jobs': 15.35, '% of Establishments': 18.48,
    },
    {
        year: '2012', '% of Jobs': 15.29, '% of Establishments': 18.50,
    },
    {
        year: '2013', '% of Jobs': 15.25, '% of Establishments': 18.59,
    },
    {
        year: '2014', '% of Jobs': 15.31, '% of Establishments': 18.14,
    },
    {
        year: '2015', '% of Jobs': 15.17, '% of Establishments': 17.42,
    },
    {
        year: '2016', '% of Jobs': 15.07, '% of Establishments': 17.14,
    },
    {
        year: '2017', '% of Jobs': 15.06, '% of Establishments': 17.07,
    },
    {
        year: '2018', '% of Jobs': 14.98, '% of Establishments': 16.96,
    },
    
    
    
  ];

const toPercent = (percent) => {
	return `${(percent)}%`;
};
const renderTooltipContent = (o) => {
	const { payload, label } = o;
  
  return (
  	<div className="customized-tooltip-content">
        <label>{`${label}`}</label>
      <ul>
      	{
        	payload.map((entry, index) => (
          	<li key={`item-${index}`} style={{color: entry.color}}>
            	{`${entry.name}: ${toPercent(entry.value)}`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default class HowisMoCoDoingJobsData2018 extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>How is MoCo Doing? Preliminary Jobs Data for 2018</h1>
                <p>
                    As of this writing (June 2019), the U.S. Bureau of Labor Statistics (BLS) has released preliminary
                    estimates of employment growth and business establishments for calendar year 2018. If these numbers
                    hold up through upcoming revisions, they suggest a slight economic slowdown in both Montgomery
                    County and parts of the Washington region.
                </p>
                <p>
                    First, let’s look at total employment. According to BLS, MoCo’s total employment grew from 469,311 in
                    2017 to 471,432 in 2018, a growth rate of 0.5%. This is half the growth rate of the entire region, which
                    was 1.0% in 2018. It is also lower than MoCo’s average total employment gain from 2010 through 2017,
                    which was 0.7%. The table below shows how MoCo compared to its competitors in the region on 2018
                    job growth.
                </p>
                <div className="l-container">
                    <h2>Total Employment</h2>
                    <p>Source: U.S. Bureau of Labor Statistics.</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Jurisdiction</th>
                                <th>State</th>
                                <th>2017</th>
                                <th>2018 (Prelim.)</th>
                                <th>Change</th>
                                <th>'17-'18 (% Change)</th>
                                <th>'10-'17 (Avg % Change)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Loudoun</td>
                                <td>VA</td>
                                <td>164,537</td>
                                <td>169,155</td>
                                <td>4,618</td>
                                <td>2.8%</td>
                                <td>1.4%</td>
                            </tr> 
                            <tr>
                                <td>Prince William</td>
                                <td>VA</td>
                                <td>127,892</td>
                                <td>130,324</td>
                                <td>2,432</td>
                                <td>1.9%</td>
                                <td>1.2%</td>
                            </tr> 
                            <tr>
                                <td>Fairfax County</td>
                                <td>VA</td>
                                <td>601,868</td>
                                <td>612,449</td>
                                <td>10,581</td>
                                <td>1.8%</td>
                                <td className="red">0.7%</td>
                            </tr> 
                            <tr>
                                <td>Frederick</td>
                                <td>MD</td>
                                <td>100,627</td>
                                <td>102,090</td>
                                <td>1,463</td>
                                <td>1.5%</td>
                                <td>0.6%</td>
                            </tr> 
                            <tr>
                                <td>District of Columbia</td>
                                <td>DC</td>
                                <td>763,847</td>
                                <td>771,322</td>
                                <td>7,475</td>
                                <td>1.0%</td>
                                <td>-0.6%</td>
                            </tr> 
                            <tr>
                                <td>Arlington</td>
                                <td>VA</td>
                                <td>176,659</td>
                                <td>178,165</td>
                                <td>1,506</td>
                                <td>0.9%</td>
                                <td>1.4%</td>
                            </tr> 
                            <tr>
                                <td className="red">Montgomery</td>
                                <td className="red">MD</td>
                                <td className="red">469,311</td>
                                <td className="red">471,432</td>
                                <td className="red">2,121</td>
                                <td className="red">0.5%</td>
                                <td>0.7%</td>
                            </tr> 
                            <tr>
                                <td>Prince George's</td>
                                <td>MD</td>
                                <td>318,943</td>
                                <td>320,279</td>
                                <td>1,336</td>
                                <td>0.4%</td>
                                <td>3.0%</td>
                            </tr> 
                            <tr>
                                <td>Alexandria City</td>
                                <td>VA</td>
                                <td>164,537</td>
                                <td>169155</td>
                                <td>4,618</td>
                                <td>2.8%</td>
                                <td>1.4%</td>
                            </tr> 
                            <tr>
                                <td>Loudoun</td>
                                <td>VA</td>
                                <td>93,774</td>
                                <td>91,909</td>
                                <td>(1,865)</td>
                                <td>-2.0%</td>
                                <td>2.9%</td>
                            </tr> 
                            <tr>
                                <td className="red">Total D.C. Area</td>
                                <td></td>
                                <td className="red">3,115,388</td>
                                <td className="red">3,146,565</td>
                                <td className="red">31,177</td>
                                <td className="red">1.0%</td>
                                <td className="red">1.1%</td>
                            </tr> 
                            {/* <tr>
                                <td>D.C.</td>
                                <td></td>
                                <td>164,537</td>
                                <td>169,155</td>
                                <td>4,618</td>
                                <td>2.8%</td>
                                <td>1.4%</td>
                            </tr> 
                            <tr>
                                <td>Loudoun</td>
                                <td>VA</td>
                                <td>164,537</td>
                                <td>169155</td>
                                <td>4,618</td>
                                <td>2.8%</td>
                                <td>1.4%</td>
                            </tr>  */}
                        </tbody>
                    </table>
                </div>
                
                <p>
                    MoCo was not the only large jurisdiction in the region to see a slight slowdown in employment growth.
                    The chart below compares 2018 job growth to the average job growth in 2010 through 2017 for major
                    Washington area jurisdictions. Every large jurisdiction except for Frederick and Fairfax Counties saw
                    lower job growth in 2018 than its post-2010 average.
                </p>
                <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
                    <BarChart
                        width={500}
                        height={300}
                        data={data1}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={toPercent} type="number" domain={[-3, 4]} />
                        <Tooltip content={renderTooltipContent}/>
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="2018" fill="#8884d8" />
                        <Bar dataKey="Avg. 2010-2017" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
                 

                <p>
                    Now let’s look at economic establishments. According to BLS, MoCo’s establishments fell from 33,044 in
                    2017 to 32,950 in 2018, a net loss of 94 establishments. The D.C. area as a whole added 791
                    establishments in 2018. If the preliminary data holds up, 2018 will be the first year in three years that
                    MoCo has lost establishments.
                </p>
                <p>
                    MoCo was one of four major jurisdictions in the region that lost establishments in 2018. The others
                    were D.C. (which lost 165), Alexandria (down 76) and Arlington (down 10). The chart below compares
                    2018 establishment growth to the average establishment growth in 2010 through 2017 for major
                    Washington area jurisdictions. Every large jurisdiction except Prince George’s saw less establishment
                    growth in 2018 than its post-2010 average.
                </p>

                <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
                    <BarChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis tickFormatter={toPercent} type="number" domain={[-2, 4]} />
                        <Tooltip content={renderTooltipContent}/>
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="2018" fill="#8884d8" />
                        <Bar dataKey="Avg. 2010-2017" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <p>
                    Overall, the 2018 job and establishment data suggest two trends. First, MoCo’s percentage of the
                    region’s total employment and establishments is in long-term decline as it has not kept up with regional
                    growth. The 2018 data is consistent with that decline. 
                </p>
                <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
                    <LineChart
                        width={500}
                        height={300}
                        data={data3}
                        margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis tickFormatter={toPercent} type="number" domain={[14, 21]} />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="% of Jobs" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="% of Establishments" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

                <p>
                    The second trend is that while growth in jobs and establishments tapered off slightly in 2018, it declined
                    more steeply in Maryland and D.C. than Virginia. The table below shows growth in employment and
                    establishments in both 2018 and the 2010-17 average. D.C.’s job growth slowed and its number of
                    establishments fell while the Maryland jurisdictions (Calvert, Charles, Frederick, Montgomery and Prince
                    George’s Counties) were stagnant in both measures as a group.    
                </p>     
                <div className="l-container">
                <h2>Comparative Growth Rates, 2018 vs 2010-17 Avg.</h2>
                <p>Source: U.S. Bureau of Labor Statistics.</p>
                <h3>Total Employment</h3>
                <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>2018</th>
                                <th>2010-2017 (Avg.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Region</b></td>
                                <td>1.0%</td>
                                <td>1.1%</td>
                            </tr> 
                            <tr>
                                <td>D.C.</td>
                                <td>1.0%</td>
                                <td>1.4%</td>
                            </tr> 
                            <tr>
                                <td>Maryland</td>
                                <td>0.3%</td>
                                <td>0.7%</td>
                            </tr> 
                            <tr>
                                <td>Virginia</td>
                                <td>1.5%</td>
                                <td>1.2%</td>
                            </tr> 
                        </tbody>
                    </table>
                <br/>
                <h3>Establishments</h3>
                <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>2018</th>
                                <th>2010-2017 (Avg.)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Region</b></td>
                                <td>0.4%</td>
                                <td>1.3%</td>
                            </tr> 
                            <tr>
                                <td>D.C.</td>
                                <td>-0.4%</td>
                                <td>2.0%</td>
                            </tr> 
                            <tr>
                                <td>Maryland</td>
                                <td>0.0%</td>
                                <td>0.2%</td>
                            </tr> 
                            <tr>
                                <td>Virginia</td>
                                <td>1.0%</td>
                                <td>1.8%</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                
                
                <p>
                    All of this comes with an important caveat: the 2018 data is preliminary. It can be revised more than
                    once before BLS releases final numbers. But if the general trends hold up, they show slight growth
                    slowdowns in both the county and regional economies, with the latter centered east of the Potomac
                    River. That poses challenges to policy makers in Montgomery County and beyond.
                </p>
                <u className="blue">Written by Adam Pagnucco</u>
            </div>
        )
    }
}
