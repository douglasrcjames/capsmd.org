import React, { Component } from 'react'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '2003', "FARMs": 23, "Ever FARMs": 36, "ESOL": 9,
  },
  {
    name: '2004', "FARMs": 23, "Ever FARMs": 36, "ESOL": 8,
  },
  {
    name: '2005', "FARMs": 24, "Ever FARMs": 37, "ESOL": 9,
  },
  {
    name: '2006', "FARMs": 26, "Ever FARMs": 39, "ESOL": 10,
  },
  {
    name: '2007', "FARMs": 25, "Ever FARMs": 38, "ESOL": 10,
  },
  {
    name: '2008', "FARMs": 26, "Ever FARMs": 38, "ESOL": 12,
  },
  {
    name: '2009', "FARMs": 27, "Ever FARMs": 38, "ESOL": 11,
  },
  {
    name: '2010', "FARMs": 29, "Ever FARMs": 39, "ESOL": 13,
  },
  {
    name: '2011', "FARMs": 31, "Ever FARMs": 41, "ESOL": 13,
  },
  {
    name: '2012', "FARMs": 32, "Ever FARMs": 42, "ESOL": 13,
  },
  {
    name: '2013', "FARMs": 33, "Ever FARMs": 42, "ESOL": 15,
  },
  {
    name: '2014', "FARMs": 34, "Ever FARMs": 43, "ESOL": 15,
  },
  {
    name: '2015', "FARMs": 35, "Ever FARMs": 44, "ESOL": 15,
  },
];


export default class PublicSchoolNeeds extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>The Needs in Montgomery County Public Schools are Growing but Classroom Support is Not</h1>
        <p>Montgomery County is changing and so is the student population in our public schools.  The percentage of students who speak English as a second language (ESOL), 
            receive free and reduced price meals (FARMs) and have received free and reduced price meals at some point during their enrollment (Ever FARMs) 
            has risen sharply over the last 15 years.
</p>

        <h4 className="center-text">Percentage of MCPS Students in ESOL, FARMs and Ever FARMs</h4>
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
            <Line type="monotone" dataKey="FARMs" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Ever FARMs" stroke="#82ca9d" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="ESOL" stroke="#F99D41" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <p>Despite growing needs, MCPS students are not getting more classroom support.  In the school year ending in 2003, there were 10.8 students for every instructional staff member.  
            In the school year ending in 2018, there were 11.3 students for every instructional staff member.  The student/instructional staff ratio barely changed over the period, never exceeding 11.5 or falling below 10.5.  
            That is despite the county levying 9 major tax hikes since 2003. [LINK to Slow Growth Has Hit the County’s Budget page]</p>
       
        <h3>Our Take</h3>
        <p>Growing needs should be met with growing attention.  
            Montgomery County, which has made local per pupil contributions to schools that trail the rate of inflation, is not doing that.  
            [LINK to County Per Pupil Funding for Schools is Trailing Inflation page]</p>
        <br/>
        <br/>
        <i>Source: Montgomery County Public Schools.</i>
        
      </div>
    )
  }
}
