import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '1993', "Miles Traveled": 1025723,
  },
  {
    name: '1994', "Miles Traveled": 1011748,
  },
  {
    name: '1995', "Miles Traveled": 1013495,
  },
  {
    name: '1996', "Miles Traveled": 1011644,
  },
  {
    name: '1997', "Miles Traveled": 1007475,
  },
  {
    name: '1998', "Miles Traveled": 1028981,
  },
  {
    name: '1999', "Miles Traveled": 1023670,
  },
  {
    name: '2000', "Miles Traveled": 1013320,
  },
  {
    name: '2001', "Miles Traveled": 1037043,
  },
  {
    name: '2002', "Miles Traveled": 1069189,
  },
  {
    name: '2003', "Miles Traveled": 1090266,
  },
  {
    name: '2004', "Miles Traveled": 1078581,
  },
  {
    name: '2005', "Miles Traveled": 1090343,
  },
  {
    name: '2006', "Miles Traveled": 1085782,
  },
  {
    name: '2007', "Miles Traveled": 1076952,
  },
  {
    name: '2008', "Miles Traveled": 1070560,
  },
  {
    name: '2009', "Miles Traveled": 1058167,
  },
  {
    name: '2010', "Miles Traveled": 1054538,
  },
  {
    name: '2011', "Miles Traveled": 1044973,
  },
  {
    name: '2012', "Miles Traveled": 1032329,
  },
  {
    name: '2013', "Miles Traveled": 1038394,
  },
  {
    name: '2014', "Miles Traveled": 1037942,
  },
  {
    name: '2015', "Miles Traveled": 1052037,
  },
  {
    name: '2016', "Miles Traveled": 1075631,
  },
  {
    name: '2017', "Miles Traveled": 1102453,
  },
];


export default class RoadsClogged extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County’s Roads are More Clogged Than Ever Before</h1>
        <p>Montgomery County has suffered from traffic congestion for a long time, just like the rest of the Washington region.  
            But the county’s problems are exacerbated by the fact that it does not complete transportation projects on time. [Link to Montgomery County Does Not Complete Transportation Projects on Time page]  
            Between 2012 and 2017, the county’s road lane mileage increased by 0.9%.  
            But over the same period, vehicle miles traveled on the county’s roads increased by 7.7%.  The result is that the county’s roads are more clogged with cars than ever.</p>

        <h4 className="center-text">Vehicle Miles Traveled per Lane Mile, Montgomery County</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <BarChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 2" />
            <XAxis dataKey="name" />
            <YAxis type="number"/>
            <Tooltip />
            <Legend />
            <Bar  dataKey="Miles Traveled" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>

       
        <h3>Our Take</h3>
        <p>The county has mostly stopped building road projects, even additional capacity on existing roads like new through lanes and turning lanes, 
            because of collapsing revenue for its capital budget.  The result is unbearable congestion for county residents and employers.
        </p>
        {/* <Link className="blue">Read our ideas for Short Term, Intermediate and Long Term Transportation SOlutions.</Link> */}
        <br/>
        <br/>
        <i>Source: Maryland Department of Transportation.</i>
        
      </div>
    )
  }
}
