import React, { Component } from 'react'
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: 'Loudon, VA', "Permitted": 7.6,
  },
  {
    name: 'Arlington, VA', "Permitted": 6.0,
  },
  {
    name: 'District of Columbia', "Permitted": 4.8,
  },
  {
    name: 'Frederick, MD', "Permitted": 4.4,
  },
  {
    name: 'Alexandria, VA', "Permitted": 3.7,
  },
  {
    name: 'Prince William, VA', "Permitted": 3.4,
  },
  {
    name: 'Washington Region', "Permitted": 3.1,
  },
  {
    name: 'Montgomery, MD', "Permitted": 2.1,
  },
  {
    name: "Prince George's, MD", "Permitted": 1.4,
  },
  {
    name: 'Fairfax, VA', "Permitted": 1.3,
  },
];

export default class LosingTaxpayerIncome extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Montgomery County Trails Most of the Region in New Housing</h1>
        <p>During the period from 2009 (the trough of the last recession) through 2017, Montgomery County built 2.1 housing units per hundred residents.  
            Here’s how that compares to other large jurisdictions in the Washington region.

</p>

        <h4 className="center-text">Net Permitted in Taxpayer Income from Migration, 2006-2016</h4>
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
            <Bar dataKey="Permitted" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
       
        <h3>Our Take</h3>
        <p>The entire Washington region faces a dire and growing housing shortage.  
            Compared to other jurisdictions in the region, Montgomery County has built one of the lowest numbers of units relative to its population in recent years.  
            New housing is required to keep up with a growing population.  Jurisdictions that don’t build new housing will see rising home prices, economic stagnation or both.  
            They will also be less attractive to growing employers who are concerned about housing for their workforces.</p>
        <br/>
        <br/>
        <i>Source: U.S. Census Bureau.</i>
        
      </div>
    )
  }
}
