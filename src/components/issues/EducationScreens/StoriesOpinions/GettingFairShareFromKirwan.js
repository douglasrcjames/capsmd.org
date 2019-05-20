import React, { Component } from 'react'
import {  BarChart, Bar, Pie, PieChart, Cell, YAxis, XAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from 'recharts';


const data1 = [
    {name: 'Anne Arundel', value: 9}, 
    {name: 'Baltimore City', value: 9},
    {name: 'Baltimore County', value: 13}, 
    {name: 'Eastern Shore', value: 7},
    {name: 'Harford', value: 4}, 
    {name: 'Howard', value: 7}, 
    {name: 'Montgomery', value: 18},
    {name: `Prince George's`, value: 15},
    {name: 'Southern MD', value: 7},
    {name: 'Western MD', value: 12},
  ]
const data2 = [
      {name: 'Anne Arundel', value: 5}, 
      {name: 'Baltimore City', value: 22},
      {name: 'Baltimore County', value: 9}, 
      {name: 'Harford', value: 3},
      {name: 'Howard', value: 3},
      {name: 'Eastern Shore', value: 10},
      {name: 'Montgomery', value: 10},
      {name: `Prince George's`, value: 21},
      {name: 'Southern MD', value: 5},
      {name: 'Western MD', value: 11},
    ];

const data3 = [
      {name: 'Anne Arundel', value: 5}, 
      {name: 'Baltimore City', value: 30},
      {name: 'Baltimore County', value: 8}, 
      {name: 'Harford', value: 3},
      {name: 'Howard', value: 3},
      {name: 'Eastern Shore', value: 9},
      {name: 'Montgomery', value: 8},
      {name: `Prince George's`, value: 18},
      {name: 'Southern MD', value: 5},
      {name: 'Western MD', value: 11},
    ];

const data4 = [
    {
        name: 'Baltimore City', "$": 1890,
    },
    {
        name: `Prince George's`, "$": 844,
    },
    {
        name: 'Eastern Shore', "$": 831,
    },
    {
        name: 'MD Average', "$": 630,
    },
    {
      name: 'Western MD', "$": 584,
    },
    {
        name: 'Southern MD', "$": 474,
    },
    {
        name: 'Harford', "$": 470,
    },
    {
        name: 'Baltimore County', "$": 411,
    },
    {
        name: "Anne Arundel", "$": 351,
    },
    {
        name: 'Montgomery', "$": 313,
    },
    {
      name: 'Howard', "$": 309,
  },
    ];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF2F30', '#FFC0CB', '#8884d8', '#00FFFF', 'black', 'grey', 'yellow'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, value, name, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 1.1;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text
      x={x}
      y={y}
      fill="black"
      style={{ fontSize: 10 }} 
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${name}: ${(percent * 100).toFixed(0)}%`}
    </text>
  );

};

   

export default class GettingFairShareFromKirwan extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Is MoCo Getting its Fair Share from Kirwan?</h1>
        <p>Three years ago, the Maryland General Assembly established the state’s Commission on Innovation and
            Excellence in Education. That name is a mouthful, so it is usually called the “Kirwan Commission” after
            its Chairman, William E. Kirwan, the former chancellor of the University System of Maryland. The
            commission has a broad mandate to study many aspects of education across the state, including but not
            limited to early childhood education; teacher diversity, recruitment and retention; the achievement gap;
            and equity between school districts. All of this involves money – BIG money. And while final decisions
            are far from being made, the General Assembly did make a significant down payment by providing
            hundreds of millions of dollars in new Kirwan-related money starting in FY20.</p>

        <h3>How did MoCo do?</h3>
        <p>
            First, let’s understand the nature of the new money. It was provided by legislation known as “The
            Blueprint for Maryland’s Future” which was passed overwhelmingly this year. The legislation provided
            for new education money of $256 million in FY20, $355 million in FY21 and $371 million in FY22. The
            FY20 money is subject to an appropriation decision to be made by the Governor but the money in the
            following two years is now mandated in law.
        </p>

        <p>
        This first tranche of Kirwan money is distributed in seven categories of spending: special education,
        transitional supplemental instruction, mental health services coordinators, teacher salary incentives,
        concentration of poverty grants, supplemental pre-kindergarten and offsets for declining enrollment.
        The vast majority of this money will be disbursed as state aid to local school districts. Spending in FY20
        and FY21 is listed by category and local jurisdiction in the legislation’s <a href="http://mgaleg.maryland.gov/2019RS/fnotes/bil_0000/sb1030.pdf">fiscal note</a>.
        </p>

        <p>
        Before looking at the money, let’s look at the distribution of Maryland’s public school enrollment by
        area in <a href="http://dls.maryland.gov/pubs/prod/InterGovMatters/LocFinTaxRte/Overview-of-Maryland-Local-Governments-2019.pdf">FY19</a>.
        </p>

        <h4 className="center-text">Maryland Public School Enrollment, FY19</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart height={250}>
            <Pie
              data={data1} 
              cx="50%"
              cy="50%"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              >
              {
                data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <p>
            In FY19, the state had 866,603 public school students. Of those, 158,107 – 18% – were enrolled in
            MCPS. Other large jurisdictions included Prince George’s County (15%), Baltimore County (13%), Anne
            Arundel County (9%) and Baltimore City (9%).
        </p>

        <p>Now let’s look at how FY20 Kirwan funding was distributed among local jurisdictions.</p>

        <h4 className="center-text">Kirwan Funding by Area, FY20</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart height={250}>
            <Pie
              data={data2} 
              cx="50%"
              cy="50%"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              >
              {
                data2.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <p>
            MoCo accounts for 18% of the state’s public school enrollment but is getting $24 million – only 10% of
            the money distributed to local jurisdictions in FY20. Baltimore City, which accounts for 9% of
            enrollment, is getting 22% of the money. Prince George’s County and the Eastern Shore are getting
            more money than their shares of enrollment, while Howard County, Anne Arundel County and Baltimore
            County are getting less.
        </p>

        <p>
            Here’s the distribution of Kirwan money in FY21.
        </p>

        <h4 className="center-text">Kirwan Funding by Area, FY21</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart height={250}>
            <Pie
              data={data3} 
              cx="50%"
              cy="50%"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={100}
              fill="#8884d8"
              >
              {
                data3.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <p>
            MoCo’s is getting $25 million in FY21 – 8% of the Kirwan money despite having 18% of the state’s
            students. Baltimore City is a huge winner, as it gets 30% of the money despite having 9% of the
            students. Once again, Prince George’s County and the Eastern Shore get proportionately more money
            and Anne Arundel, Baltimore and Howard Counties get less.
        </p>

        <p>
            Finally, here is the money per pupil for the two years combined by Maryland jurisdiction. No
            elaboration is required on this chart.
        </p>

        <h4 className="center-text">Kirwan Funding per Pupil, FY20 plus FY21</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
          <BarChart
            data={data4}
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
            <Bar dataKey="$" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <p>Folks, there is a massive disconnect between MoCo and Annapolis on this. Inside MoCo, virtually our
            entire education community – MCPS leadership, union leadership, PTA activists, county council
            members and school board members – are focused on the problems of need in some segments of our
            community along with the achievement gap. Combine those issues with our school construction
            problems and our budgetary limitations and MoCo may not be able to deal with all of these things on its
            own. But Annapolis doesn’t see it that way. For state-level decision-makers, the only issues worth
            addressing are in (especially) Baltimore City and other relatively poor jurisdictions. As far as they’re
            concerned, MoCo can go it alone.
        </p>

        <p>
            The Kirwan Commission is doing worthwhile work. More resources are definitely needed for education.
            But MoCo has problems too. We deserve better.
        </p>
        
        <u className="blue">Written by Adam Pagnucco</u>
      </div>
    )
  }
}
