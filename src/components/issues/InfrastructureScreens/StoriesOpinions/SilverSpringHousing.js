import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {BarChart, Bar, ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const data = [
    {name: 'Falkland Chase (1936)', "Percentage Change": 1.80},
    {name: 'Montgomery Arms (1940)', "Percentage Change": -2.57},
    {name: 'Spring Garden (1941)', "Percentage Change": 2.66},
    {name: 'Rock Creek Garden (1949)', "Percentage Change": 2.32},
    {name: 'The Barrington (1954*)', "Percentage Change": 6.56},
    {name: 'Corona + Sigo House (1960*)', "Percentage Change": 4.22},
    {name: 'Barbizon-Darlton (1960*)', "Percentage Change": 1.6},
    {name: 'Thayer Terrace (1960*)', "Percentage Change": 12.13},
    {name: 'Courts of Madison (1960*)', "Percentage Change": 1.41},
    {name: 'Hillbrook Towers (1961*)', "Percentage Change": 9.14},
    {name: 'Parkside Terrace (1961*)', "Percentage Change": 2.38},
    {name: 'Silver Spring House (1961*)', "Percentage Change": 2.13},
    {name: '8600 Apartments (1961*)', "Percentage Change": -3.31},
    {name: 'Summit Hills (1963)', "Percentage Change": 2.41},
    {name: 'The Blairs (1963)', "Percentage Change": -1.28},
    {name: 'Colesville Towers (1966)', "Percentage Change": 1.47},
    {name: 'Silver Spring Towers (1966)', "Percentage Change": 2.75},
    {name: 'Cole Spring Plaza (1967)', "Percentage Change": 1.14},
    {name: 'Metro 710 (1967)', "Percentage Change": -2.77},
    {name: 'Georgia West (1967)', "Percentage Change": 2.36},
    {name: 'Georgian Towers (1967)', "Percentage Change": -0.56},
    {name: 'Twin Towers (1967)', "Percentage Change": -0.14},
    {name: 'Lenox Park (1992)', "Percentage Change": -2.03},
    {name: 'Alexander House (1992)', "Percentage Change": 3.68},
    {name: 'The Bennington (2004)', "Percentage Change": -1.13},
    {name: 'The Veridian (2008)', "Percentage Change": 1.14},
    {name: 'The Portico (2009)', "Percentage Change": 3.57},
    {name: 'The Cameron (2009)', "Percentage Change": -3.21},
    {name: '1200 East West (2010)', "Percentage Change": -1.37},
    {name: 'The Galaxy (2012)', "Percentage Change": -2.85},
    {name: 'The Solaire (2012)', "Percentage Change": -3.88},
    {name: 'Citron (2013)', "Percentage Change": -1.93},

];
   

export default class SilverSpringHousing extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Did Silver Spring build enough housing to stay affordable? Sort of.</h1>
        <p>In 2013, I looked at rents in Silver Spring to see if building tons of new homes could help keep our 
            community affordable. Five years and about 1,700 new apartments later, did it work? Sort of. 
            Rents in many downtown buildings are the same or lower than they were in 2013, but it hasn't been 
            enough to keep prices from spiking elsewhere.</p>

            <p>Housing economists say that a crucial way to lower housing costs is through filtering. 
                Today’s expensive “luxury” homes will become tomorrow’s affordable homes, as newer, fancier homes 
                are built and people who can pay more seek them out while people with more modest incomes move into 
                older homes. We've seen this here in Silver Spring and Takoma Park, where 1950s-era "luxury" apartments 
                have essentially become affordable housing.</p>
            
            <p>But if new homes aren’t being built to replace the older ones, the opposite happens, and owners upgrade their properties and 
                make them more expensive to attract higher-income occupants. Or, as housing researcher Sydney Bennet told Bisnow, “If there 
                aren’t enough cheaper options, it becomes a chain, with a middle-class person living in an apartment a lower-income person 
                might have occupied, and so on.”</p>
            
            <p>Does this actually happen in real life? To find out, last summer I looked at apartments in downtown Silver Spring, 
                which has experienced two big building booms in the 1950s and 1960s, and again during the 2000s and 2010s. 
                In 2013, I noticed a strong relationship between the age of a building and its rent: The older a building, the 
                lower the rent.</p>

            <p>Since then, about 1,700 more apartments have been built in seven different complexes. The trend has continued: 
                Not only are apartments becoming more affordable as they age, but rents at apartments built just a few years ago 
                are dropping as even newer homes are built.</p>

            <p>Silver Spring isn’t alone in this. Across the Washington region, neighborhoods that are actually building 
                housing are seeing rents respond, from Hyattsville to Navy Yard.</p>
            
            <h2>Not surprisingly, older apartments are cheaper</h2>
            <p>As I did in 2013, I researched 32 apartment complexes in downtown Silver Spring, pulling information about each one’s age, 
                the size of apartments, and the typical rents from sources including the buildings’ websites and aggregator sites like Apartments.com. 
                I then compared the prices then to prices now, and added the seven new buildings to see how current prices compare between buildings of different ages.</p>
    

        <h4 className="center-text">Average Monthly Rents/Square Foot By Age</h4>
        <img
            className="center xxlarge"
            alt="graph"
            src={require("../../../../assets/images/graphs/SilverSpringsHousing-graph1.PNG")}
            />
        <div className="center center-text m-width">
            <i>
            This graph shows how rents for Silver Spring apartments fall based on the building's age. 
            Click for a larger version. Image by the author.
            </i>
        </div>

        <p>Just as before, apartment rents in Silver Spring tend to fall as buildings get older. I plotted the average rent per square foot at each building 
            by its age and found that today, rents in Silver Spring drop by about 1.07 cents per square foot per month for each year the building ages, 
            compared to 1.19 cents per square foot in 2013.</p>
        
        <p>That may not seem like much, but it comes out to $10.70 for a 1,000-square-foot, two bedroom apartment, or a difference of $535/month between a 
            building built today and one built 50 years ago</p>
        
        <p>You can also see this trend in apartments built in the recent past. As new buildings come onto the market, even buildings that are just a few years 
            old are lowering their rents. If you’re looking for a deal on a new-ish apartment, consider one of the five buildings built between 2009 and 2013, 
            which really aren’t that different than apartments built in 2018, but are far cheaper.</p>
        
        <h2>In many buildings, rents are stable or even falling</h2>
        <p>Between 2013 and 2018, rents at most of the downtown apartment complexes increased at the rate of inflation or, in some cases, 
            went down. It appears that the influx of housing in Silver Spring may be related.</p>
        
        <h4 className="center-text">% Annual Change in Average Rent/Square Foot, 2013-2018</h4>
        <ResponsiveContainer width="95%" height="95%" aspect={2} className="center m-width">
            <BarChart 
                width={600} 
                height={300} 
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 120}}
                >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name" angle={-90} textAnchor="end" tick={{ fontSize: 10 }} interval={0}/>
                <YAxis/>
                <Tooltip/>
                
                <ReferenceLine y={0} stroke='#000'/>
                <Bar dataKey="Percentage Change" fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
        <div className="center center-text m-width">
            <i>
                This graph shows how rents at Silver Spring apartment 
                complexes have changed between 2013 and 2018. Click for a larger version. Image by the author.
            </i>
        </div>
        <h3>The Operating Budget</h3>
        <p>For instance, take the 1960s-era apartment complex formerly known as Georgian Towers, where I grew up. 
            When my family moved out in 1998, we paid $1,010 a month for a two-bedroom, two-bathroom apartment, or 
            about $1,552 in today’s dollars. In 2009, after an extensive renovation, that same apartment had doubled 
            in price: it rented for $2,910 a month, or $3,398 in today’s dollars.</p>
            
        
        <p>But since then, a dozen newer, fancier apartment complexes have opened in the neighborhood, and Georgian Towers had to 
            drop their rents. In 2014, our apartment rented for $1,975, and last summer, it rented for $1,870.</p>

        <p>However, there have been some exceptions. A handful of older “market-rate affordable” apartment complexes—they happen to charge 
            lower rents because the units are older and don’t have trendy features—saw substantial rent increases over the past five years. 
            At the Barrington, a 1950s-era garden apartment complex off East-West Highway, average rents jumped by 33% between 2013 and 2018.</p>

        <h2>"Filtering" has its limits, and prices overall keep rising</h2>
        <p>Our example of Silver Spring shows that filtering does have its limits. Researcher Rick Jacobus notes that there really isn’t a 
            single housing market, but several, based on different price ranges or styles of housing. Also, an increase of one type of housing 
            may not affect other types.</p>
        
        <p>If you’re looking for a $1,000/month apartment, an increase in $2,000/month apartments may push down rents, but not enough to 
            change the supply of $1,000/month apartments you can choose from. </p>
        
        <p>This might explain what’s happening at the market-rate affordable complexes: There are still plenty of people who need these 
            lower-cost homes, but if new ones aren't getting built, landlords will respond accordingly by raising rents. 
            That’s a big problem, and it’s why subsidized housing remains a crucial part of our housing needs, and will 
            continue to be in the future.</p>
        
        <p>Montgomery County requires all new development to set aside 12.5% of its homes for low-income households, meaning 
            that the building boom in downtown Silver Spring has created hundreds of permanently affordable homes. In addition, 
            affordable housing developers are constructing several buildings where most or all of the homes are restricted to 
            low-income residents, like the Bonifant, with 144 homes for seniors, and 900 Thayer Avenue, of which 84 of its 124 homes 
            will be for former residents of public housing.</p>
        
        <p> Likewise, if you’re looking for a house to buy, an increase in rental apartments doesn’t change the number of 
            choices you have. That’s why for-sale home prices have skyrocketed even as rents have stabilized. Neighborhoods 
            adjacent to downtown—like Woodside Park, East Silver Spring, 
            and Seven Oaks—have seen little housing construction in decades, and neighbors vigorously fight any proposed development.</p>
        
        <p>Home prices in zip code 20910, which includes downtown Silver Spring and surrounding areas, have increased 20% since 2012, 
            and are now higher than they were before the Great Recession. Among existing homes, there are very few options that someone 
            making the county’s median income of about $100,000/year could afford, and there’s often a lot of competition for them. With 
            the exception of the Chelsea Heights townhomes (which was the result of a years-long battle with neighbors), most homes that 
            get built near downtown are large single-family homes on big lots, which end up selling for upwards of $1 million.
        </p>

        <h2>What we need to do to keep Silver Spring accessible</h2>
        
        <p>For decades, Silver Spring has welcomed people from all different backgrounds and income levels, 
            which has made it the diverse community that many residents treasure. But there’s no guarantee that 
            it’ll stay that way. Rising home prices threaten to put this community out of reach for many residents, 
            as well as people who might want to move here and contribute to our community.
        </p>
        
        <p>Look at the cranes over downtown Silver Spring and it looks like this community, like a lot of the region, 
            is growing really fast. But unlike the 1990s, when our region grew in population and jobs but also added 
            lots of new homes, we're actually experiencing a housing shortage.</p>
            
        <p>Silver Spring is one of a handful of places in Montgomery County (and the Washington region as a whole) that’s 
            accepting any new development. Many communities (especially wealthy ones) are effectively off-limits to new homes 
            because of restrictive, exclusionary zoning. That's why prices keep going up. Montgomery County will get more than 
            200,000 residents in the next 20 or so years, and many of those people will want to live here in Silver Spring, which means 
            that the pressure will only continue to rise.</p>

     <p>Not only do we need more homes, we need more kinds of homes. We need more subsidized affordable homes. We need more 
         for-sale homes. We need more “missing middle” homes like cottages, townhomes, or small apartment buildings, which 
         fill the void between the high-rise apartments that get built downtown and the large, single-family homes that 
         surround it.</p>

    <p>We also need more walkable places like downtown Silver Spring. Right now, this is just one of the few urban 
        places in Montgomery County where people can walk to most of their daily needs and to public transit. That 
        contributes to the high demand to live here, which pushes up rents and home values.</p>

    <p>The experience of the past few years shows that building homes can have an impact on prices. Let's keep it going by giving people more housing choices.</p>

    <br/>
    <p>
        <i>Reprinted with permission from the author. This article was originally published on April 17, 2019 by Greater, Greater Washington. </i>
        <br/>
        <a href="https://ggwash.org/view/71732/did-silver-spring-build-its-way-to-being-more-affordable-sort-of">
            https://ggwash.org/view/71732/did-silver-spring-build-its-way-to-being-more-affordable-sort-of
        </a>
    </p>

    </div>
    )
  }
}
