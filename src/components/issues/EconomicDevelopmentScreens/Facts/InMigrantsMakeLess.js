import React, { Component } from 'react'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '1994', "In-Migrant": 60500, "Out-Migrant": 64800,
  },
  {
    name: '1995', "In-Migrant": 58500, "Out-Migrant": 65000,
  },
  {
    name: '1996', "In-Migrant": 57500, "Out-Migrant": 64600,
  },
  {
    name: '1997', "In-Migrant": 60000, "Out-Migrant": 70500,
  },
  {
    name: '1998', "In-Migrant": 60500, "Out-Migrant": 71500,
  },
  {
    name: '1999', "In-Migrant": 65000, "Out-Migrant": 74250,
  },
  {
    name: '2000', "In-Migrant": 72100, "Out-Migrant": 79250,
  },
  {
    name: '2001', "In-Migrant": 75000, "Out-Migrant": 84250,
  },
  {
    name: '2002', "In-Migrant": 76800, "Out-Migrant": 85500,
  },
  {
    name: '2003', "In-Migrant": 71000, "Out-Migrant": 79250,
  },
  {
    name: '2004', "In-Migrant": 66500, "Out-Migrant": 75400,
  },
  {
    name: '2005', "In-Migrant": 65000, "Out-Migrant": 77000,
  },
  {
    name: '2006', "In-Migrant": 64500, "Out-Migrant": 77200,
  },
  {
    name: '2007', "In-Migrant": 65000, "Out-Migrant": 76200,
  },
  {
    name: '2008', "In-Migrant": 66200, "Out-Migrant": 75000,
  },
  {
    name: '2009', "In-Migrant": 64000, "Out-Migrant": 74200,
  },
  {
    name: '2010', "In-Migrant": 63900, "Out-Migrant": 74000,
  },
  {
    name: '2011', "In-Migrant": 64500, "Out-Migrant": 65050,
  },
  {
    name: '2012', "In-Migrant": 64000, "Out-Migrant": 68600,
  },
  {
    name: '2013', "In-Migrant": 68000, "Out-Migrant": 77400,
  },
  {
    name: '2014', "In-Migrant": 74900, "Out-Migrant": 90000,
  },
  {
    name: '2015', "In-Migrant": 67000, "Out-Migrant": 81400,
  },
  {
    name: '2016', "In-Migrant": 70500, "Out-Migrant": 80500,
  },
];


export default class InMigrantsMakeLess extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>People Moving Into Montgomery County Make Less than People Moving Out</h1>
        <p>In 2016, the average adjusted gross income of households moving into Montgomery County was $77,823.  
            The average adjusted gross income of households moving out of the county was $87,043.  
            In every year since 1993, the average income of people moving in has been less than the incomes of people moving out.  
            The graph below compares the incomes of in-migrants and out-migrants adjusted for inflation in 2016 dollars.</p>

        <h4 className="center-text">Avg. Adjusted Gross Income: In vs Out</h4>
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
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="In-Migrant" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Out-Migrant" stroke="#82ca9d" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

       
        <h3>Our Take</h3>
        <p>The county should and does welcome everyone who wants to live here.  
            But if new residents earn less income than those who move out, the county should prioritize creating high paying jobs 
            or we will have problems paying for education, transportation and other services important to our quality of life.</p>
        <br/>
        <br/>
        <i>Source: U.S. Internal Revenue Service.</i>
        
      </div>
    )
  }
}
