import React, { Component } from 'react'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine,
} from 'recharts';

const data1 = [
  
  {
    name: 'Enviro. Protection',  "percentIncrease": 172,
  },
  {
    name: 'Debt Service',  "percentIncrease": 81,
  },
  {
    name: 'Technology Services',  "percentIncrease": 52,
  },
  {
    name: 'County Cable TV',  "percentIncrease": 49,
  },
  {
    name: 'Recreation',  "percentIncrease": 43,
  },
  {
    name: 'MCPS (Non-Local Money)',  "percentIncrease": 37,
  },
  {
    name: 'All Agencies',  "percentIncrease": 29,
  },
  {
    name: 'MoCollege',  "percentIncrease": 28,
  },
  {
    name: 'County Council',  "percentIncrease": 28,
  },
  {
    name: 'HHS',  "percentIncrease": 24,
  },
  {
    name: 'Park and Planning',  "percentIncrease": 24,
  },
  {
    name: 'Libraries',  "percentIncrease": 21,
  },
  {
    name: 'Police',  "percentIncrease": 21,
  },
  {
    name: 'MCPS (Total Money)',  "percentIncrease": 18,
  },
  {
    name: 'Solid Waste',  "percentIncrease": 13,
  },
  {
    name: 'Sheriff',  "percentIncrease": 12,
  },
  {
    name: 'Fire and Rescue',  "percentIncrease": 11,
  },
  {
    name: 'MCPS (Local Money)',  "percentIncrease": 10,
  },
  {
    name: 'Correction',  "percentIncrease": 1,
  },
  {
    name: 'Housing',  "percentIncrease": -1,
  },
  {
    name: 'Transportation',  "percentIncrease": -8,
  },
];


export default class NotInvestingInSchools extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County is Not Investing Enough in Schools and Transportation</h1>
        <p>Since Fiscal Year 2003, the county has implemented nine major tax hikes.  [LINK to Slow Growth Has Hit the County’s Budget page]  
            However, despite the claims of elected officials, the county has not invested in public schools or transportation at the same rate as other functions of government.  
            The graph below shows the operating budget increase by major department and agency between FY2010 (the peak budget year before the Great Recession) and FY2019.</p>

        <h4 className="center-text">Operating Budget Increase, FY10-19</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
            <BarChart
             width={500}
             height={300}
             data={data1}
             margin={{
              top: 5, right: 30, left: 20, bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis type="category" dataKey="name" />
                <YAxis type="number"/>
                <Tooltip />
                
                <Legend />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="percentIncrease" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>

        <p>Between FY2010 and 2019, the county’s entire operating budget grew by 29%.  
            The components receiving the largest increases were environmental protection (up 172%), debt service (81%) and technology services (52%).  
            MCPS received an 18% increase, but that was because non-local aid (mostly from the state) went up by 37% while local dollars went up by just 10%.  
            Transportation actually fell by 8% but that was partially driven by variations in snow removal costs.</p>
        <br/>
        <h3>Our Take</h3>
        <p>Education and transportation are two hugely important determinants of quality of life and economic competitiveness.  
            When the county invests in its human capital and physical infrastructure, it is laying the groundwork for future growth.  
            But Montgomery County has not been doing this and we are now paying the price.</p>
        <br/>
        <br/>
        <i>Source: Montgomery County Office of Management and Budget.</i>
        
      </div>
    )
  }
}
