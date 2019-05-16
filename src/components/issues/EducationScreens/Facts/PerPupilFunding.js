import React, { Component } from 'react'
import { Link } from "react-router-dom";

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';

const data1 = [
  {
    name: '2007', "Local Dollar Increase": 7, "Inflation %": 4,
  },
  {
    name: '2008', "Local Dollar Increase": 6, "Inflation %": 5,
  },
  {
    name: '2009', "Local Dollar Increase": 4, "Inflation %": 0,
  },
  {
    name: '2010', "Local Dollar Increase": -5, "Inflation %": 2,
  },
  {
    name: '2011', "Local Dollar Increase": -4, "Inflation %": 3,
  },
  {
    name: '2012', "Local Dollar Increase": -5, "Inflation %": 2,
  },
  {
    name: '2013', "Local Dollar Increase": 0, "Inflation %": 2,
  },
  {
    name: '2014', "Local Dollar Increase": 0, "Inflation %": 2,
  },
  {
    name: '2015', "Local Dollar Increase": 0, "Inflation %": 0,
  },
  {
    name: '2016', "Local Dollar Increase": 0, "Inflation %": 1,
  },
  {
    name: '2017', "Local Dollar Increase": 6, "Inflation %": 1,
  },
  {
    name: '2018', "Local Dollar Increase": 1,
  },
];


export default class PerPupilFunding extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>County Per Pupil Funding for Schools is Trailing Inflation</h1>
        <p>Montgomery County’s local dollar funding for schools has increased by one-third the rate of the entire budget since Fiscal Year 2010. 
            On a per pupil basis, local dollar per pupil funding increases for MCPS have been less than the rate of inflation since FY 2010 
            with the exception of FY 2017, when the county raised property taxes by 8.7%.  
            State aid has been helpful but has not completely compensated.</p>
        <Link to="/issues/economic-development/facts/not-investing-in-schools" className="blue">Read article: 'Montgomery County is Not Investing Enough in Schools and Transportation'</Link>
        <h4 className="center-text">Local Dollar Increases per Pupil vs Inflation</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <LineChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis />
            <ReferenceLine y={0} stroke='#000' />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Local Dollar Increase" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Inflation %" stroke="#D33F42" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

       
        <h3>Our Take</h3>
        <p>When the county’s per pupil funding for schools does not keep up with the rate of inflation, it’s obvious that we are not investing enough in public education. </p>
        <p>
        Note: In 2017, the local per pupil contribution rose by 9%, but one-third of the increase was caused by an accounting change associated with teacher pension payments to the state government.
        </p>
        <br/>
        <br/>
        <i>Source: Montgomery County Office of Management and Budget, U.S Bureau of Labor Statistics.</i>
        
      </div>
    )
  }
}
