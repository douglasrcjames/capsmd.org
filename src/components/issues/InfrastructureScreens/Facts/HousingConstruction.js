import React, { Component } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '1990', "Permitted": 5077,
  },
  {
    name: '1991', "Permitted": 3276,
  },
  {
    name: '1992', "Permitted": 3485,
  },
  {
    name: '1993', "Permitted": 3141,
  },
  {
    name: '1994', "Permitted": 3520,
  },
  {
    name: '1995', "Permitted": 3590,
  },
  {
    name: '1996', "Permitted": 3062,
  },
  {
    name: '1997', "Permitted": 3682,
  },
  {
    name: '1998', "Permitted": 5315,
  },
  {
    name: '1999', "Permitted": 4253,
  },
  {
    name: '2000', "Permitted": 4950,
  },
  {
    name: '2001', "Permitted": 5249,
  },
  {
    name: '2002', "Permitted": 5013,
  },
  {
    name: '2003', "Permitted": 4428,
  },
  {
    name: '2004', "Permitted": 3821,
  },
  {
    name: '2005', "Permitted": 3591,
  },
  {
    name: '2006', "Permitted": 3031,
  },
  {
    name: '2007', "Permitted": 3459,
  },
  {
    name: '2008', "Permitted": 1476,
  },
  {
    name: '2009', "Permitted": 862,
  },
  {
    name: '2010', "Permitted": 1899,
  },
  {
    name: '2011', "Permitted": 2512,
  },
  {
    name: '2012', "Permitted": 3981,
  },
  {
    name: '2013', "Permitted": 3514,
  },
  {
    name: '2014', "Permitted": 3839,
  },
  {
    name: '2015', "Permitted": 2080,
  },
  {
    name: '2016', "Permitted": 2170,
  },
  {
    name: '2017', "Permitted": 1637,
  },
];

export default class LosingTaxpayerIncome extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County’s Housing Construction Has Dropped Since the Recession</h1>
        <p>In the 1990s and early 2000s, Montgomery County often built 4,000 to 5,000 housing units per year.  
            Housing construction dropped during the recession and the county never recovered.  In 2017, the county built just 1,637 units.</p>

        <h4 className="center-text">Montgomery County Housing Units Permitted</h4>
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
            <Bar dataKey="Permitted" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       
        <h3>Our Take</h3>
        <p>Over the last ten years, an average of 11,800 people have moved into Montgomery County each year.  
            If the county builds 2,000 or fewer new housing units each year, that won’t keep up with population growth and the result will be sharply rising home prices.  
            Young people and lower income people will be priced out and seniors will find it harder to stay here.
</p>
        <br/>
        <br/>
        <i>Source: U.S. Census Bureau.</i>
        
      </div>
    )
  }
}
