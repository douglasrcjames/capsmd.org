import React, { Component } from 'react'
import { Pie, PieChart, Cell, ResponsiveContainer} from 'recharts';


const data1 = [
    {name: 'MoCo Govt', value: 37}, 
    {name: 'MCPS', value: 47},
    {name: 'College', value: 6}, 
    {name: 'Park and Planning', value: 3}]
const data2 = [
      {name: 'Property Tax', value: 34}, 
      {name: 'Income Tax', value: 30},
      {name: 'Intergov. Aid', value: 17}, 
      {name: 'Energy Tax', value: 4},
      {name: 'Fees and Fines', value: 4},
      {name: 'Other', value: 11}
    ];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF2F30', '#FFFFFF', '#8884d8'];

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



   

export default class BeginnersGuideToBudget extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>A Beginner’s Guide to the Montgomery County Budget</h1>
        <p>An organization’s budget is the outline for what it will be doing for the year.  
            It’s an indicator of what the organization values and what’s important to it.  
            The County’s budget is no different.
            Before understanding the budget, let’s understand how the county government is organized.  
            It is comprised of four large agencies and several smaller, affiliated units.  
            The four large agencies are:</p>
            <div className="l-container">
                <h4>Montgomery County Public Schools (MCPS)</h4>
                <p>MCPS administers the county’s system of more than 200 public schools providing K-12 education.  
                    It is governed by an elected Board of Education which appoints and oversees a Superintendent of Schools.</p>

                <h4>Montgomery College</h4>
                <p>This is the county’s community college.  
                    It is governed by a Board of Trustees which is appointed by the Governor.  
                    The board appoints and oversees a president who runs the college on a daily basis.</p>

                <h4>Maryland-National Capital Park and Planning Commission (M-NCPPC)</h4>
                <p>M-NCPPC, colloquially called Park and Planning, is a state-chartered agency that oversees parks and provides planning services 
                    in Montgomery and Prince George’s Counties.  On the Montgomery side, the agency is overseen by five Planning Board Members, 
                    one of whom serves as the chair, who are appointed by the Montgomery County Council.</p>

                <h4>Montgomery County Government (MCG)</h4>
                <p>Most of the rest of county government functions are provided by MCG, which is headed by an elected County Executive with funding, 
                    oversight and legislative authority housed in a nine-member elected County Council.  MCG provides public safety services, health 
                    and human services, libraries, recreation, environmental protection, transportation, permitting, housing and many other services to residents.</p>
            </div>
            <p>As of Fiscal Year 2019, here is how the county’s budget is split among the four major agencies.</p>

        <h4 className="center-text">Spending by Agency, FY19</h4>
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

        <p>County government is financed by a diverse array of revenue sources, the biggest of which are property taxes, 
            income taxes, inter-governmental aid (with the huge majority coming from the state), energy taxes and fees and fines.  
            As of Fiscal Year 2019, here is where the county’s revenue comes from.</p>

        <h4 className="center-text">County Revenues by Source, FY19</h4>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart height={250}>
            <Pie
              data={data2} 
              cx="50%"
              cy="50%"
              dataKey="value"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              >
              {
                data1.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        
        <h3>The Operating Budget</h3>
        <p>Every year, the county passes a new operating budget for all of its agencies.  
            The fiscal year begins on July 1 and ends on June 30, with the latter date providing the fiscal year’s name.  
            (For example, Fiscal Year 2019 ends on June 30, 2019).  The budget planning process begins in every agency at the start of a fiscal year.  
            Each agency begins planning for its requested budget by examining a number of factors, including but not limited to:</p>
            <ul>
                <li>Needs</li>
                <li>Projected revenues (including state aid)</li>
                <li>Reserve, pension, retiree health and other benefits requirements</li>
                <li>Constraints of state and county law</li>
            </ul>
        
        <p>By the late fall and winter, MCPS, the college and Park and Planning develop requested budgets which are sent to the County Executive.  
            At the same time, the departments inside Montgomery County Government, such as the police, fire and rescue, libraries and more, send their 
            requests to the county’s Office of Management and Budget (OMB), which synthesizes and coordinates budget activity.  
            After receiving revenue estimates from the county’s finance department, OMB begins developing a total budget which contains the County Executive’s priorities.</p>

        <p>Every year on March 15, the executive releases his or her recommended budget as a public document.  
            The recommended budget contains spending for all county agencies, but is not a binding document.  
            The County Council has total budgetary authority within the constraints of state and federal law.  
            It can add to, delete from and alter the recommended budget as it sees fit.  
            The operating budget must balance spending against revenues.  
            While bonds can be issued to finance capital spending, they cannot be used to finance operating spending.</p>

        <p>From March 15 through mid-May, the council reviews and works on the county’s budget.  
            The council holds at least three hearings in which the public may participate.  
            Individual Council Members also hold frequent meetings with constituents to discuss their budgetary priorities.  
            By mid-May, the council holds its final votes on the budget, which takes effect on July 1.  During the summer, 
            the council’s approved budget is published and reflects its decisions, including those that differ from the executive’s recommendations.  
            And then the process begins again during the next fiscal year.</p>
        <br/>
        <h3>The Capital Budget</h3>
        <p>The county’s capital budget is called the Capital Improvements Program (CIP).  
            Unlike the operating budget, which is passed every year, the CIP is a six-year spending plan.  
            In even-numbered years, the county passes a completely new CIP.  
            In odd years, the county revises the CIP.</p>
        <p>The CIP contains capital projects for all four major agencies – MCPS, the college, Park and Planning and Montgomery County Government.  
            Schools, transportation projects, college buildings, park renovations, police and fire stations, libraries, recreation buildings and 
            many more projects are included.  There are also items that are not discrete projects but reflect levels of effort on regular maintenance.  
            For example, road maintenance is a regular, ongoing activity.  Major revenue sources for the CIP include general obligation bonds that are 
            backed by the full faith and credit of the county, revenue bonds that are backed by specific revenue streams, 
            impact taxes charged to developers, state aid and cash.</p>
        <p>The reason why the CIP is a six-year budget and not an annual budget is that most construction projects take more than one year to build.  
            Projects proceed through four basic phases: planning and design, land acquisition, site improvements and utilities, and construction.  
            Depending on the project, each of these phases can last for years.  For each project, the CIP will show a schedule with associated spending 
            amounts for each phase.  In some cases, projects will involve contributions to other projects administered by other entities, like the state.  
            One example is the state’s Purple Line, a light rail project stretching from Bethesda to New Carrolton, which contains county spending on some of 
            its related elements.</p>
        <p>As with the operating budget, each county agency – MCPS, the college and Park and Planning – develops a requested CIP list and sends it to the County Executive.  
            The county’s Office of Management and Budget will then develop a CIP which is balanced against available revenues.  On January 15, the County Executive will issue 
            a full recommended CIP in even years (like 2020) or a recommended supplement to the CIP in odd years (like 2019).  Between January 15 and March 15, the County Council 
            will hold hearings and work on the CIP.  As with the operating budget, the council has full authority to change the executive’s recommendations so long as the CIP is
            balanced against revenues and complies with state law.  
            In mid-May, the CIP is then reconciled with the operating budget and passed by the council.  The process repeats in the next fiscal year.</p>
        <br/>
        <h3>Public Participation</h3>
        <p>There are many opportunities for public participation in both the operating and capital budgets.  
            The principal decision points with participation opportunities include:</p>
            <div className="l-container">
                <h4>Agency development of requests</h4>
                <p>MCPS, the college and Park and Planning will all accept public comment as they prepare their requests of the County Executive.  
                    The Board of Education holds public hearings in the late fall.</p>
                <h4>County Executive</h4>
                <p>The County Executive has multiple town hall meetings during the winter and early spring to hear from residents as he or 
                    she develops his recommended budget. The executive may also accept meeting requests from constituents.</p>
                <h4>County Council</h4>
                <p>The council holds multiple hearings on both the capital and operating budgets.  Council Members hold regular meetings with 
                    constituents in the winter and spring as they work on those budgets.  
                    Email and social media can also be used to communicate with Council Members.</p>
            </div>
        
        <h3>Conclusion</h3>
        <p>Montgomery County’s budget is large and complex.  But the county’s elected leaders do respond to residents’ 
            priorities in making spending decisions. Residents who are educated in the processes of county government, well organized, have documented 
            cases of merit-based need and are – above all – civil in dealing with county leaders can exercise real 
            influence over how the county spends their money.</p>

        <h3>Resources</h3>
        <ul>
            <li>
                <a 
                    href="https://apps.montgomerycountymd.gov/BASISOPERATING/Common/Index.aspx?FY=2019&amp;VER=APPR" 
                    target="_blank" 
                    rel="noopener noreferrer">
                        Fiscal Year 2019 Approved Operating Budget
                    </a>
                </li>
            <li>
                <a 
                    href="https://apps.montgomerycountymd.gov/BASISCAPITAL/Common/Index.aspx?FY=2019&amp;lVER=APPROMBF" 
                    target="_blank" 
                    rel="noopener noreferrer">
                    Fiscal Year 2019-2024 Approved Capital Improvements Program (CIP)
                </a>
            </li>
        </ul>
        <u className="blue">Written by Adam Pagnucco</u>
      </div>
    )
  }
}
