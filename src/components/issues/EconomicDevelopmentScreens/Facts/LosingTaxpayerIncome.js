import React, { Component } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: 'Loudoun', "Percent Change": 2.4,
  },
  {
    name: 'Prince William', "Percent Change": 0.3,
  },
  {
    name: 'Frederick', "Percent Change": 0.0,
  },
  {
    name: 'Howard', "Percent Change": -0.1,
  },
  {
    name: 'Alexandria', "Percent Change": -0.7,
  },
  {
    name: "Prince George's", "Percent Change": -1.8,
  },
  {
    name: 'Arlington', "Percent Change": -2.2,
  },
  {
    name: 'D.C.', "Percent Change": -2.6,
  },
  {
    name: 'Montgomery', "Percent Change": -4.0,
  },
  {
    name: 'Fairfax', "Percent Change": -5.9,
  },
];

export default class LosingTaxpayerIncome extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County is Losing More Taxpayer Income Than Most of the Rest of the Region</h1>
        <p>From 2006 through 2016, taxpayers earning a combined $17.5 billion (in inflation-adjusted 2016 dollars) moved into Montgomery County.  
            During the same period, taxpayers earning a combined $21.6 billion moved out.  
            That net loss of $4 billion of taxpayer income is the largest in the region except for Fairfax County, which lost $5.9 billion.  
            Here’s how Montgomery County compares to the rest of the region.
</p>

        <h4 className="center-text">Net Change in Taxpayer Income from Migration, 2006-2016</h4>
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
            <Bar dataKey="Percent Change" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       
        <h3>Our Take</h3>
        <p>Montgomery County is not alone in losing taxpayer income from net migration.  
            But the county needs to do better in creating high-paying jobs and retaining those employees to turn this around.</p>
        <br/>
        <br/>
        <i>Source: U.S. Internal Revenue Service.</i>
        
      </div>
    )
  }
}
