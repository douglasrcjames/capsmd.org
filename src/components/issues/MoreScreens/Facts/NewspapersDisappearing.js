import React, { Component } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '2001', "Establishments": 108,
  },
  {
    name: '2002', "Establishments": 115,
  },
  {
    name: '2003', "Establishments": 112,
  },
  {
    name: '2004', "Establishments": 124,
  },
  {
    name: '2005', "Establishments": 127,
  },
  {
    name: '2006', "Establishments": 129,
  },
  {
    name: '2007', "Establishments": 131,
  },
  {
    name: '2008', "Establishments": 127,
  },
  {
    name: '2009', "Establishments": 127,
  },
  {
    name: '2010', "Establishments": 120,
  },
  {
    name: '2011', "Establishments": 115,
  },
  {
    name: '2012', "Establishments": 111,
  },
  {
    name: '2013', "Establishments": 110,
  },
  {
    name: '2014', "Establishments": 98,
  },
  {
    name: '2015', "Establishments": 94,
  },
];

const data2 = [
  {
    name: '2001', "Employment": 5718,
  },
  {
    name: '2002', "Employment": 5487,
  },
  {
    name: '2003', "Employment": 5283,
  },
  {
    name: '2004', "Employment": 5641,
  },
  {
    name: '2005', "Employment": 5736,
  },
  {
    name: '2006', "Employment": 5742,
  },
  {
    name: '2007', "Employment": 5558,
  },
  {
    name: '2008', "Employment": 4918,
  },
  {
    name: '2009', "Employment": 3725,
  },
  {
    name: '2010', "Employment": 3387,
  },
  {
    name: '2011', "Employment": 3327,
  },
  {
    name: '2012', "Employment": 3171,
  },
  {
    name: '2013', "Employment": 3037,
  },
  {
    name: '2014', "Employment": 2758,
  },
  {
    name: '2015', "Employment": 2339,
  },
];


export default class NewspapersDisappearing extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Maryland Newspapers are Disappearing</h1>
        <p>Maryland newspapers are in steep decline.  Since 2001, the number of newspaper business establishments in Maryland has fallen from 108 to 79.</p>

        <h4 className="center-text">Maryland Newspaper Business Establishments</h4>
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
            <Line type="monotone" dataKey="Establishments" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <p>Over the same period, employment by Maryland newspapers has fallen from 5,718 to 1,990, a drop of 65 percent.</p>

        <h4 className="center-text">Maryland Newspaper Employment</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <LineChart
            data={data2}
            margin={{
              top: 5, right: 30, left: 20, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Employment" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <p>In terms of Montgomery County coverage, the Montgomery Journal, the Washington Examiner and the Gazette have all closed.  
            The Washington Post has cut back its local coverage sharply.  
            Many of the remaining news sources are online only and offer a fraction of the content that county residents once enjoyed.</p>
        <h3>Our Take</h3>
        <p>The result of disappearing newspapers is that today’s Montgomery County residents are much less informed about their community and their government than past generations.  
            That’s the reason why CAPS was formed – to provide information about our county that would otherwise never see the light of day. Join us.</p>
        <i>Source: U.S. Bureau of Labor Statistics.</i>
        
      </div>
    )
  }
}
