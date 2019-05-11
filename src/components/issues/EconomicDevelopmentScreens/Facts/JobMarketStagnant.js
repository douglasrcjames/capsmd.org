import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '2001', "Private": 370125, "Govt.": 79756, "Total": 449881,
  },
  {
    name: '2002', "Private": 370283, "Govt.": 82969, "Total": 453252,
  },
  {
    name: '2003', "Private": 371210, "Govt.": 78636, "Total": 449846,
  },
  {
    name: '2004', "Private": 370862, "Govt.": 77821, "Total": 448683,
  },
  {
    name: '2005', "Private": 380864, "Govt.": 77945, "Total": 458809,
  },
  {
    name: '2006', "Private": 386626, "Govt.": 78250, "Total": 464876,
  },
  {
    name: '2007', "Private": 380492, "Govt.": 78895, "Total": 459387,
  },
  {
    name: '2008', "Private": 377149, "Govt.": 80587, "Total": 457736,
  },
  {
    name: '2009', "Private": 361112, "Govt.": 82073, "Total": 443185,
  },
  {
    name: '2010', "Private": 358479, "Govt.": 83408, "Total": 441887,
  },
  {
    name: '2011', "Private": 361207, "Govt.": 86031, "Total": 447238,
  },
  {
    name: '2012', "Private": 362623, "Govt.": 87873, "Total": 450496,
  },
  {
    name: '2013', "Private": 363188, "Govt.": 88681, "Total": 451869,
  },
  {
    name: '2014', "Private": 366240, "Govt.": 89580, "Total": 455820,
  },
  {
    name: '2015', "Private": 370323, "Govt.": 89344, "Total": 459667,
  },
];


export default class JobMarketStagnant extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County’s Job Market is Stagnant</h1>
        <p>Montgomery County’s total employment grew through the last business cycle, fell during the Great Recession 
            and is only one percent higher in 2017 than it was in 2006.  
            As of 2017, the county’s private sector employment has still not recovered from the recession.</p>

        <h4 className="center-text">Maryland County Employment</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <LineChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Private" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Govt." stroke="#82ca9d" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Total" stroke="#ff7300" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <p>Over the same period, employment by Maryland newspapers has fallen from 5,718 to 1,990, a drop of 65 percent.</p>

    
        <p>In terms of Montgomery County coverage, the Montgomery Journal, the Washington Examiner and the Gazette have all closed.  
            The Washington Post has cut back its local coverage sharply.  
            Many of the remaining news sources are online only and offer a fraction of the content that county residents once enjoyed.</p>
        <h3>Our Take</h3>
        <p>Jobs are tremendously important for our county’s budget and quality of life.  Unless we can grow our jobs base at a faster rate, 
            we won’t be able to pay for education, transportation and our other priorities to maintain our current standard of living.</p>
        <Link className="blue">Read our ideas for creating jobs</Link>
        <br/>
        <br/>
        <i>Source: U.S. Bureau of Labor Statistics.</i>
        
      </div>
    )
  }
}
