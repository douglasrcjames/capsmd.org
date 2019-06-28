import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class CountyInFiveYearsPartOne extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Imagine Montgomery County in Five Years: Part One</h1>
          <p>
            Sure, predictions are notoriously unreliable, but join us anyway as we time travel to 2024.
          </p>
          <ul>
            <li>174,000 students attend Montgomery County Public Schools, up from 163,000 in 2019.</li>
            <li>1.1 million residents call Montgomery County home, about 50,000 more than live here today.</li>
            <li>13,600 children are born in 2024, a four percent increase from 2016.</li>
            <li>Non-Hispanic whites comprise 40 percent of the population while people of color comprise 60 percent.</li>
            <li>Seventeen percent of the population is over age 65.</li>
          </ul>

          <p>
            Because Montgomery County has stubbornly refused to change course, unable to summon the political will to dramatically 
            alter its culture to remain competitive with Virginia, DC, and other Maryland counties, the headlines in Bethesda Beat in 
            2024 are uniformly gloomy. 
          </p>

          <p>
            Forty-five households pay half of the county’s income taxes in 2019. But in 2024, three of those households have retired 
            to Florida, creating a large hole in the county’s budget.  The increasing numbers of retirees, whose income has dropped now 
            that they are surviving on proceeds from their 40lks and social security, has also put a noticeable crimp in tax receipts.  
          </p>

          <p>
            The County Executive and County Council agonize over a third round of budget cuts, unable to borrow as much as they need 
            to make up for revenue losses to the capital budget.  Elected officials huddle with aides, trying to figure out how to sell 
            the second property tax increase in as many years. 
          </p>

          <p>
            Constrained by law, public pressure, and campaign promises, the council plans to make no cuts to school funding.  Elected officials 
            remember all too well the chanting parents and children protesting the cuts they were forced to make the previous year to balance the 
            budget. Capital projects like the expansion of bus rapid transit and pedestrian safety measures are again put on hold as the government 
            struggles to keep libraries open, potholes filled, and safety net programs operating. Bold initiatives like expanded early childhood education 
            never get funding to move past the planning stage.
          </p>

          <p>
            Due to WMATA’s never-ending service issues, a lack of funding for sorely needed transportation projects, market forces that discourage 
            new large mixed –use developments near transit, and employers that choose to make anywhere but Montgomery County their home, traffic 
            has worsened to the point that afternoon rush hour now starts at 2:30 and it can take half an hour to travel five miles on 270 during 
            the morning rush hour.
          </p>
          <p>
            Over the past five years, the number of jobs in Montgomery County has remained flat as retail stores in aging strip malls continue to 
            close and office buildings in aging office parks remain empty of workers. Bethesda and Silver Spring are still hot spots for restaurants, 
            residences and class-A office space, but they have become islands of wealth in a county where incomes are losing ground to the cost of living.  
            Prince Georges County’s economic development efforts have paid off, attracting more bio-science firms who are now headquartered around 
            College Park. Despite promises of streamlining, in Montgomery County it still takes three years for a development project to move from 
            sketch plan to sticking that first shovel in the ground. Dozens of mom-and-pop businesses have closed because the energy tax, increased 
            minimum wage requirements, and new mandated benefits made them unable to handle the ever-increasing costs of doing business in Montgomery 
            County.
          </p>
          <p>
            Because only 1,000 new housing units have been built over the past five years throughout the county, not nearly enough to match the 
            number of new residents, rents increase every year and home prices remain stubbornly out of reach for a large percentage of the population.  
            Recent college grads gravitate to Prince Georges County where housing is far more affordable or DC where they are willing to share an 
            expensive one-bedroom to get walkable access to fun and foodie restaurants.
          </p>
          <p>
            Hundreds of retirees want to sell their single-family homes, and hundreds of young families are eager to purchase them, but none of 
            the retirees can make the math work.  Their choices are limited:  sell their homes and purchase a condo that costs more for half as 
            much space, leave Montgomery County for the Delaware shore, or stay with fingers crossed they are able to pay their rising property 
            taxes and maintain their houses with too many empty rooms. More and more often, they reluctantly choose to leave the county they have 
            called home for decades.
          </p>
          <p>
            But this doesn’t have to be Montgomery County’s future. Let’s see how it could be different in <Link to="/issues/more/stories-opinions/county-in-five-years-part-two">Part Two</Link>.
          </p>

        <u className="blue">Written by Amy Ginsburg.</u>
       
      </div>
    )
  }
}
