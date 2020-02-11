import React, { Component } from 'react'
import Background from '../../../../assets/images/carousel/apartment-building.jpg';

export default class TenYearsAffordableHousing extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 40%", // change me around to move up and down!
            backgroundSize: "cover"
          };
        return (
            <>
                <div style ={ topBgImageStyle }></div>
                <div className="wrapper-w-img">
                    <h1>The Next 10 Years Will Determine the Fate of Affordable Housing in Montgomery County</h1>
                    <span className="grey">January 6, 2020</span>
                    <p>
                        In November, the Montgomery County Council did something that’s never been done before in the
                        county; it 
                        <a 
                            href="https://www2.montgomerycountymd.gov/mcgportalapps/Press_Detail.aspx?Item_ID=23618&amp;Dept=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp;passed a resolution&nbsp;
                        </a> 
                        endorsing regional housing targets established by the Washington
                        Metropolitan Council of Governments (COG). The resolution affirms the council’s commitment to meet
                        the county’s share of the regional goal: 41,000 additional units by 2030, with at least 75% being
                        affordable to low- and middle-income households.
                    </p>

                    <p>
                        The Council’s vote is significant because for the first time it establishes concrete numbers for housing
                        production, providing a data point against which the County can measure its progress.
                    </p>
                    
                    <p>
                        Elected officials aren’t the only ones concerned with housing affordability. 
                        <a 
                            href="https://assets.noviams.com/novi-file-uploads/aoba/AOBA_Housing_Survey_Questionnaire.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp;According to a recent survey,&nbsp;
                        </a> 
                        a majority of county residents cite housing affordability as a “major problem” or “a crisis needing
                        immediate attention.” As housing costs continue to rise faster than wages, more households are feeling
                        the impact of the lack of affordable housing than at any previous time. Being the largest non-profit
                        affordable housing provider in Montgomery County, we see these struggles every day in our programs
                        that help families who are striving to make ends meet and create a better future for their children.
                    </p>

                    <p>
                        But for as much as we talk about affordable housing, we rarely stop to ask ourselves if we’re making
                        progress. Are we doing too much, too little, or just enough to make the county a more affordable place
                        to live? New affordable housing is coming online every month, but is it meeting the needs of current
                        residents and expected population growth? Let’s take a look.
                    </p>

                    <h2>Affordable to Whom?</h2>
                    <p>
                        It’s important to remind ourselves that what’s affordable to one person is unaffordable to another. To
                        account for this, housing affordability is measured based on the Area Median Income (AMI) for a
                        particular region and relative to a household’s income. In Montgomery County, the AMI for a family of
                        four is $121,300. This means a household at 50% AMI earns $60,000 a year. This measurement heavily
                        influences the distribution of rent levels and the type of affordable housing that is being produced.
                    </p>

                    <p>
                        Generally speaking, households at the lowest incomes are the most underserved in the County. 
                        <a 
                            href="http://montgomeryplanningboard.org/wp-content/uploads/2017/05/Rental-Housing-Study-Recommendations-6-15-17-Final-2.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp;A 2017 report revealed&nbsp;
                        </a> 
                        that there is a mismatch in supply and demand of housing at the upper and lower ends
                        of the market. The shortage is most acute for households earning 30% of AMI or less, or roughly
                        $35,000/year, where there is a deficit of approximately 20,000 units.
                    </p>

                    <p>
                        Most below-market rental housing in the County falls in the 50-80% of AMI range, which is not
                        surprising. The County’s Moderately Priced Dwelling Unit (MPDU) program, which produces a significant
                        amount of below-market rate housing, is intended to provide housing to families who earn between
                        65% to 70% of AMI. As of this writing, the median rent for an available MPDU is $1,308/month, or $400
                        less than the median rent in the County. The MPDU program has been tremendously successful in
                        creating housing for middle-income households. Since 1976, more than 15,000 rental and for-sale
                        properties have been produced under the program. However, it is less equipped to create housing
                        options for severely low-income individuals and families.
                    </p>

                    <p>
                        Creating units at deeper levels of affordability – at 30-40% of AMI-- is so difficult because it requires
                        money, and lots of it. Converting an MPDU, which is rented out at 65% of AMI, to one that is affordable
                        to a senior making 30% AMI, can costs hundreds of thousands of dollars per unit. The county’s primary
                        tool for creating units below MPDU rents is the Housing Initiative Fund (HIF). This trust fund provides
                        loans to developers, like MHP, to finance the preservation and creation of deeply affordable units. These
                        local dollars are essential in bridging the gap between the cost of construction and what low-income
                        residents can afford. Without county dollars, this housing simply doesn’t get built. 
                    </p>

                    <p>
                        The lack of units for severely low-income households leaves many families with no choice but to spend
                        more on rent than they can actually afford. When families spend upwards of 50-60% of their income on
                        rent, they struggle to afford basic necessities like food, transportation, health care, and child care. These
                        households don’t earn enough to afford an MPDU. Make no mistake -- MPDUs are a vital component of
                        our county’s affordable housing strategy. But we need to devote equal attention to how we increase
                        production of affordable housing outside the MPDU program.
                    </p>

                    <h2>What's the Plan?</h2>

                    <p>
                        What Comes Next? Or maybe, Now What? Meeting the Council-endorsed COG targets means producing
                        41,000 homes over the next decade. This breaks down to about 3,400 units a year. But production
                        trends are pointing down rather than up. Since 2009, housing production has averaged about 2,800
                        units a year. Over the past two years, there have been fewer than 2,000 residential building permits
                        issued.
                    </p>

                    <p>
                        To meet the COG targets, the County will need to produce significantly more housing, both affordable
                        and market rate. The task before us may seem daunting, but we shouldn’t let it overwhelm us. This past
                        year shows us why.
                    </p>

                    <p>
                        In July,
                        <a 
                            href="https://www2.montgomerycountymd.gov/mcgportalapps/Press_Detail.aspx?Item_ID=23340"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp;the County Executive announced that over $100 million had been invested in affordable housing
                            during the preceding 12 months,&nbsp;
                        </a>  
                        creating almost 2,000 affordable units and another 1,200 market-rate
                        units. This level of investment is unprecedented. Typically, the County spends between $20-$30 million
                        annually on affordable housing production. This investment was possible in large part because the
                        County carried over unspent funds from prior fiscal years. A comparable investment for the next 12
                        years would create or preserve in excess of 24,000 units, which would put the County well on its way to
                        meeting the need.
                    </p>

                    <p>
                        So we can get there, but we must be realistic in the face of fiscal constraints. Getting to $100 million
                        annually isn’t going to occur overnight. More likely, it’s going to happen through a series of incremental
                        initiatives. It will take a combination of issuing more taxable bonds, leveraging public dollars with private
                        funds, dedicating a larger percentage of property tax revenue to affordable housing, identifying new
                        funding tools, and things that perhaps we haven’t even considered yet.
                    </p>

                    <p>
                        The most immediate action that the County can take to substantially accelerate the production of
                        affordable housing is to issue more bonds to help finance affordable housing development. Cities like
                        Austin and San Francisco are addressing the affordable housing crisis by placing multi-year bond
                        measures totaling in the hundreds of millions of dollars on the ballot, and the public is responding by
                        overwhelmingly adopting them. While Montgomery County doesn’t require a referendum to issue
                        bonds, a similar multi-year bond would go a long way to reach our affordable housing goals. Locally, the
                        District of Columbia has embarked on a mission to add 36,000 units by 2025 and is dedicating over $100
                        million annually to the production of affordable housing. Irrespective of how we get to $100 million,
                        increased public investment in affordable housing at the local level is our best chance for achieving the
                        COG targets.
                    </p>

                    <p>
                        The Purple Line light-rail corridor also presents an opportunity. It represents the biggest near-term
                        option we have as a county to dramatically expand our affordable housing supply. One reason is the cost
                        of land, which makes up a large percentage of total development costs and is perhaps the biggest
                        barrier to building in highly desirable areas like Bethesda or Silver Spring. Because the Purple Line is not
                        yet operational, land values are less than what you might find around established Metro station areas.
                        This won’t last forever, though. If we wait until 2023, when the Purple Line is anticipated to open in
                        Montgomery County, to begin acquiring land for affordable housing, we will likely have missed this once
                        -in-a-generation opportunity to shape the trajectory of housing affordability.
                    </p>

                    <p>
                        Recognizing the potential of the Purple Line to positively or negatively impact housing affordability, MHP
                        collaborated with other affordable housing stakeholders to produce a 
                        <a 
                            href="http://purplelinecorridor.org/wp-content/uploads/2019/12/HAP-Light-Report-06-Dec-2019-English.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            &nbsp;Housing Action Plan&nbsp;
                        </a>  
                        for the corridor. The plan contains 12 recommendations to implement between now and when the Purple Line
                        opens to ensure that existing and future residents of all income levels can take advantage of the
                        opportunities the light rail line will bring.
                    </p>

                    <h2>Accepting the Challenge</h2>

                    <p>
                        Clearly, the challenge before us is large. But so are the consequences of continuing at the current pace
                        of production. In 10 years, will we reflect on this point in time as being similar to the pioneering actions
                        taken by the County in the 70s and 80s to expand access to affordable housing, or will it be remembered
                        for everything we didn’t do, leaving too many economically vulnerable families with no affordable place
                        to live?
                    </p>

                    <i className="blue">
                        Rob Goldman is the president of MHP, the largest non-profit affordable housing developer in
                        Montgomery County.
                    </i>
                </div>
            </>
        )
    }
}
