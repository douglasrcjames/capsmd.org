import React, { Component } from 'react'
import { Link } from "react-router-dom";

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const data1 = [
  
  {
    name: 'Enviro. Protection',  "Increased %": 172,
  },
  {
    name: 'Debt Service',  "Increased %": 81,
  },
  {
    name: 'Technology Services',  "Increased %": 52,
  },
  {
    name: 'County Cable TV',  "Increased %": 49,
  },
  {
    name: 'Recreation',  "Increased %": 43,
  },
  {
    name: 'MCPS (Non-Local Money)',  "Increased %": 37,
  },
  {
    name: 'All Agencies',  "Increased %": 29,
  },
  {
    name: 'MoCollege',  "Increased %": 28,
  },
  {
    name: 'County Council',  "Increased %": 28,
  },
  {
    name: 'HHS',  "Increased %": 24,
  },
  {
    name: 'Park and Planning',  "Increased %": 24,
  },
  {
    name: 'Libraries',  "Increased %": 21,
  },
  {
    name: 'Police',  "Increased %": 21,
  },
  {
    name: 'MCPS (Total Money)',  "Increased %": 18,
  },
  {
    name: 'Solid Waste',  "Increased %": 13,
  },
  {
    name: 'Sheriff',  "Increased %": 12,
  },
  {
    name: 'Fire and Rescue',  "Increased %": 11,
  },
  {
    name: 'MCPS (Local Money)',  "Increased %": 10,
  },
  {
    name: 'Correction',  "Increased %": 1,
  },
  {
    name: 'Housing',  "Increased %": -1,
  },
  {
    name: 'Transportation',  "Increased %": -8,
  },
];


export default class NotInvestingInSchools extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County is Not Investing Enough in Schools and Transportation</h1>
        <p>Since Fiscal Year 2003, the county has implemented nine major tax hikes. 
            However, despite the claims of elected officials, the county has not invested in public schools or transportation at the same rate as other functions of government.  
            The graph below shows the operating budget increase by major department and agency between FY2010 (the peak budget year before the Great Recession) and FY2019.</p>
        <Link to="/issues/economic-development/facts/slow-growth-budget" className="blue">Read article: 'Slow Growth Has Hit the County’s Budget'</Link>
        <h4 className="center-text">Operating Budget Increase, FY10-19</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center l-width">
          <BarChart
            data={data1}
            width={900}
            margin={{
              top: 5, right: 5, left: 5, bottom: 5,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis type="number"/>
            <YAxis width={175} type="category" interval={0} dataKey="name" tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Increased %" fill="#82ca9d" />
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
