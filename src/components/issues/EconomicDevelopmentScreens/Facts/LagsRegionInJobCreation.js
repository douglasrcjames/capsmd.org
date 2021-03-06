import React, { Component } from 'react'

import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: 'Loudoun, VA', "Growth %": 31,
  },
  {
    name: 'Prince William, VA', "Growth %": 23,
  },
  {
    name: 'District of Columbia', "Growth %": 14,
  },
  {
    name: 'Arlington, VA', "Growth %": 12,
  },
  {
    name: 'Frederick, MD', "Growth %": 9,
  },
  {
    name: 'Washington Region', "Growth %": 8,
  },
  {
    name: 'Fairfax, VA', "Growth %": 5,
  },
  {
    name: "Prince George's, MD", "Growth %": 2,
  },
  {
    name: 'Montgomery, MD', "Growth %": 1,
  },
];

export default class LagsRegionInJobCreation extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County Lags the Region in Job Creation</h1>
        <p>Between 2006 and 2017, the Washington D.C. region’s total employment grew by 229,046 jobs, or 8 percent.  
            Montgomery County’s total employment grew by 4,435 jobs, or 1 percent.  
            Here is how Montgomery County compares to other large jurisdictions in the region.</p>

        <h4 className="center-text">Employment Growth, 2006-2017</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <BarChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
            layout="vertical"
          >
            <CartesianGrid strokeDasharray="3 3" />
            
            <XAxis type="number"/>
            <YAxis type="category" dataKey="name" tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="Growth %" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       
        <h3>Our Take</h3>
        <p>We are falling behind the rest of the region in job growth.  
            If this keeps up, residents and employers will be less likely to want to move here and stay here.  
            We will pay the price in our county’s budget and our quality of life.</p>
        {/* <Link className="blue">Read our ideas for creating jobs</Link> */}
        <br/>
        <br/>
        <i>Source: U.S. Bureau of Labor Statistics.</i>
        
      </div>
    )
  }
}
