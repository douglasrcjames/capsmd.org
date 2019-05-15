import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '1998', "percentIncrease": 7.2,
  },
  {
    name: '1999', "percentIncrease": 6.8,
  },
  {
    name: '2000', "percentIncrease": 7.0,
  },
  {
    name: '2001', "percentIncrease": 4.0,
  },
  {
    name: '2002', "percentIncrease": 5.0,
  },
  {
    name: '2003', "percentIncrease": 0.9,
  },
  {
    name: '2004', "percentIncrease": 11.0,
  },
  {
    name: '2005', "percentIncrease": 10.1,
  },
  {
    name: '2006', "percentIncrease": 6.6,
  },
  {
    name: '2007', "percentIncrease": 8.1,
  },
  {
    name: '2008', "percentIncrease": 1.6,
  },
  {
    name: '2009', "percentIncrease": 3.8,
  },
  {
    name: '2010', "percentIncrease": -3.7,
  },
  {
    name: '2011', "percentIncrease": 3.3,
  },
  {
    name: '2012', "percentIncrease": 7.8,
  },
  {
    name: '2013', "percentIncrease": 3.1,
  },
  {
    name: '2014', "percentIncrease": 3.9,
  },
  {
    name: '2015', "percentIncrease": -2.0,
  },
  {
    name: '2016', "percentIncrease": 4.7,
  },
  {
    name: '2017', "percentIncrease": 5.7,
  },
  {
    name: '2018', "percentIncrease": 2.6,
  },
  {
    name: '2019', "percentIncrease": 1.2,
  },
];

export default class LosingTaxpayerIncome extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Slow Growth Has Hit the County’s Budget</h1>
        <p>Between Fiscal Year 1998 and 2009, the county’s revenues (minus state and federal aid) grew by an average of 6.1 percent a year.  
            Then came the Great Recession and a slow recovery.  From FY2010 through 2019, the county’s revenues grew by an average of 2.7 percent a year.  
            That slow growth happened despite an increase in the energy tax in FY2011, an increase in the recordation tax in FY2017 and an 8.7 percentIncrease in the property tax that same year.
</p>

        <h4 className="center-text">Annual Increase in County Revenues (Minus State and Federal Aid)</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <BarChart
            data={data1}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
    
          >
            <CartesianGrid strokeDasharray="3 3" />
            
            <YAxis type="number"/>
            <XAxis type="category" dataKey="name" tick={{ fontSize: 10 }} />
            <Tooltip />
            <Legend />
            <Bar dataKey="percentIncrease" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       
        <h3>Our Take</h3>
        <p>Since FY2003, the county has implemented nine major tax hikes.</p>

        <p>FY03: Property tax hike</p>
        <p>FY04: Property, income and energy tax hikes</p>
        <p>FY05: Property tax hike</p>
        <p>FY09: Property tax hike (<a href="http://www.washingtonpost.com/wp-dyn/content/article/2010/09/28/AR2010092806084.html?tid=a_inl_manual">13 percent</a>)</p>
        <p>FY11: Energy tax hike (doubled, with 
          a <a href="https://bethesdamagazine.com/bethesda-beat/news/business-groups-make-another-push-to-reduce-montgomery-countys-energy-tax/">broken 
          promise to sunset the increase after 2 years</a>)</p>
        <p>FY17: Recordation tax hike</p>
        <p>FY17: Property tax hike (<a href="https://bethesdamagazine.com/bethesda-beat/news/county-council-approves-87-percent-property-tax-increase/">8.7 percent</a>)</p>

        <p>Despite these increases, slow economic growth is now preventing the county from paying for education, transportation, public safety and other priorities.  
        Since tax hikes are not generating enough money to fund our needs, a renewed focus on economic development is absolutely imperative.
        </p>
        {/* <Link to="/issues/economic-development/facts/slow-growth-budget" className="blue">Read our ideas for creating jobs</Link>
        <br/>
        <Link className="blue">Read our ideas for creating business through innovation</Link> */}
        <br/>
        <br/>
        <i>Source: Montgomery County Office of Management and Budget.</i>
       
      </div>
    )
  }
}
