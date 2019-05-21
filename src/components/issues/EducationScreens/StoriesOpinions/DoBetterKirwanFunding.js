import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { LineChart, Line, Pie, PieChart, Cell, YAxis, XAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer} from 'recharts';


const data1 = [
  {
    name: '2003', "% of Enrollment": 8.3,
  },
  {
    name: '2004', "% of Enrollment": 8,
  },
  {
    name: '2005', "% of Enrollment": 9,
  },
  {
    name: '2006', "% of Enrollment": 9.8,
  },
  {
    name: '2007', "% of Enrollment": 10.2,
  },
  {
    name: '2008', "% of Enrollment": 11.8,
  },
  {
    name: '2009', "% of Enrollment": 11.1,
  },
  {
    name: '2010', "% of Enrollment": 12.5,
  },
  {
    name: '2011', "% of Enrollment": 13,
  },
  {
    name: '2012', "% of Enrollment": 13,
  },
  {
    name: '2013', "% of Enrollment": 15.5,
  },
  {
    name: '2014', "% of Enrollment": 14.7,
  },
  {
    name: '2015', "% of Enrollment": 15,
  },
  {
    name: '2016', "% of Enrollment": 17,
  },
  {
    name: '2017', "% of Enrollment": 16,
  },
  {
    name: '2018', "% of Enrollment": 17,
  },
];
const data2 = [
      {name: 'Anne Arundel', value: 7}, 
      {name: 'Baltimore City', value: 6},
      {name: 'Baltimore County', value: 8}, 
      {name: 'Montgomery', value: 34},
      {name: `Prince George's`, value: 32},
      {name: 'Rest of State', value: 13},
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

   

export default class DoBetterKirwanFunding extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>How MoCo Can Do Better on Kirwan Funding</h1>
        <p><Link to="/issues/education/stories-opinions/getting-fair-share-from-kirwan">In a prior article</Link>, 
          we found that while MCPS accounts for 18% of the state’s public school
          enrollment, it was due to receive just 8-10% of new education funding provided at the request of the
          state’s Kirwan Commission. For a school system with as many needs as MCPS, that’s not good enough.
          But there is a way to make the funding formula more fair to Montgomery County. Let’s review how that
          can be done.</p>

        <p>
        One fact about MCPS that the Kirwan Commission has not recognized is that it has a large and growing
        student population that is learning the English language. The chart below 
        from <a href="https://www.montgomeryschoolsmd.org/departments/sharedaccountability/glance/">MCPS’s schools at a 
        glance data</a> shows the percentage of ESOL (English for Speakers of Other Languages) students in MCPS
        over the last 15 years. In FY03, ESOL students accounted for 8.5% of MCPS’s enrollment. By FY18, ESOL
        students were 17.4% of enrollment. Over the entire period, while MCPS total enrollment grew by an
        average of 1.0% per year, ESOL enrollment grew by an average of 6.2% per year.
        </p>

        <h4 className="center-text">MCPS ESOL % of Enrollment</h4>
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
            <Line type="monotone" dataKey="% of Enrollment" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>

        <p>
        How does MCPS compare with the rest of the state? 
        The <a href="https://nces.ed.gov/ccd/elsi/">National Center for Education Statistics (NCES) </a>
        collects enrollment data for public school districts nationwide. According to NCES, there were 69,079
        limited English proficient public school students in Maryland in FY17. Of those, 34% were in
        Montgomery County, 32% were in Prince George’s County and the rest were spread among the other 22
        school systems. Limited English proficient students accounted for 17% of Prince George’s County
        enrollment, 15% of MCPS enrollment and no more than 6% of any other system’s enrollment.
        </p>

        <h4 className="center-text">Limited English Proficient Students in Maryland, FY17</h4>
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
        English language learners are an important – and positive – part of Montgomery County’s diversity. But
        they do require more resources to educate.
        In <a href="https://www.montgomeryschoolsmd.org/uploadedFiles/departments/budget/fy2019/FY2019_AdoptedOperatingBudget_WEB.pdf">FY19</a>, 
        MCPS had 627 full-time-equivalent teachers and 53
        full-time-equivalent paraeducators in its ESOL program. The ESOL program’s total cost of $56.9 million
        amounted to $2,369 per ESOL student. In Prince George’s County, its school 
        system’s <a href="https://www1.pgcps.org/uploadedFiles/Offices/Business_Management_Services/Budget/FY19_Budget_Development/FY19%20APPROVED%20Full%20Updated%2011.15.18.pdf">FY19 
        budget</a> added $1,042-2,155 per English language learner student to its formula for funding individual schools.
        
        </p>

        <p>
          If the state’s new formulas for Kirwan funding were to include a component for helping school districts
          educate English language learners, Montgomery County (and Prince George’s County) would do very
          well. <a href="http://www.theseventhstate.com/?p=7715">That would help to offset the other funding formulas that place Montgomery County at a clear
          disadvantage.</a>
        </p>

        <p>We can do the right thing by helping English language learners and we can make state education funding
           for Montgomery County at the same time. Let’s join together and get this done!</p>

        
        <u className="blue">Written by Adam Pagnucco</u>
      </div>
    )
  }
}
