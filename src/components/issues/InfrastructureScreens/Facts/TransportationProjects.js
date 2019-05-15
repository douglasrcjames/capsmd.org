import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '2009', "Percent of Projects Completed": 90,
  },
  {
    name: '2010', "Percent of Projects Completed": 50,
  },
  {
    name: '2011', "Percent of Projects Completed": 75,
  },
  {
    name: '2012', "Percent of Projects Completed": 70,
  },
  {
    name: '2013', "Percent of Projects Completed": 71,
  },
  {
    name: '2014', "Percent of Projects Completed": 66,
  },
  {
    name: '2015', "Percent of Projects Completed": 75,
  },
  {
    name: '2016', "Percent of Projects Completed": 43,
  },
  {
    name: '2017', "Percent of Projects Completed": 50,
  },
  {
    name: '2018', "Percent of Projects Completed": 25,
  },
 
];


export default class TransportationProjects extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County Does Not Complete Transportation Projects on Time</h1>
        <p>Despite the county’s high rates of congestion, the county’s Department of Transportation has not been completing projects on time.  
          In Fiscal Year 2009, 90% of projects were completed within three months of their projected timelines.  By FY 18, that measure had fallen to 25%.</p>

        <h4 className="center-text">Percentage of Transportation Projects Completed within 3 Months of Projected Timeline</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <BarChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type="number"/>
            <Tooltip />
            <Legend />
            <Bar  dataKey="Percent of Projects Completed" fill="#19b844" />
          </BarChart>
        </ResponsiveContainer>

       
        <h3>Our Take</h3>
        <p>The county’s inability to complete transportation projects on time is a major impediment to dealing with traffic congestion.  
          The county must do better.</p>
        {/* <Link className="blue">Read our ideas for Short Term, Intermediate and Long Term Transportation SOlutions.</Link> */}
        <br/>
        <br/>
        <i>Source: Montgomery County CountyStat.</i>
        
      </div>
    )
  }
}
