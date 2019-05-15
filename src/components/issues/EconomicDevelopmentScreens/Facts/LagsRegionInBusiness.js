import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: 'District of Columbia', "Growth %": 8113,
  },
  {
    name: 'Fairfax, VA', "Growth %": 5913,
  },
  {
    name: 'Loudoun, VA', "Growth %": 4791,
  },
  {
    name: 'Prince William, VA', "Growth %": 2835,
  },
  {
    name: 'Arlington, VA', "Growth %": 1977,
  },
  {
    name: 'Frederick, MD', "Growth %": 573,
  },
  {
    name: 'Alexandria, VA', "Growth %": 569,
  },
  {
    name: "Prince George's, MD", "Growth %": 459,
  },
  {
    name: 'Montgomery, MD', "Growth %": 292,
  },
];

export default class LagsRegionInBusiness extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County Lags the Region in Business Growth</h1>
        <p>Between 2006 and 2017, the Washington D.C. region’s number of business establishments grew by
        28,185, or 17 percent. Montgomery County’s total employment grew by 292, or 1 percent. Here is how
        Montgomery County compares to other large jurisdictions in the region.</p>

        <h4 className="center-text">Growth in Business Establishments, 2006-2017</h4>
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
        <p>There are two ways that state and local governments pay their bills: grow the tax base or raise taxes.
        Without new businesses creating jobs, it’s very hard to grow the tax base. That means you could pay
        the price through more tax hikes.</p>
        {/* <Link className="blue">Read our ideas for Creating Businesses through Innovation</Link> */}
        <br/>
        <br/>
        <i>Source: U.S. Bureau of Labor Statistics.</i>
        
      </div>
    )
  }
}
