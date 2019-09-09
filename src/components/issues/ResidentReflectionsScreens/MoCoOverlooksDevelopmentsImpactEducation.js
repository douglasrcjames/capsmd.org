import React, { Component } from 'react'
import Background from '../../../assets/images/carousel/woman-sign.jpg';

export default class MoCoOverlooksDevelopmentsImpactEducation extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 60%", // change me around to move up and down!
            backgroundSize: "cover"
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper">
                
                <h1>Montgomery County Overlooks Development's Impact on Education</h1>
                <span className="grey">September 8, 2019</span>
                <p>
                    The Glenmont Shopping Center off Georgia Avenue in Silver Spring, MD, is a static battlefield under the
                    thumb of multiple owners, a landmark eye-sore and a predictable case of developer gridlock over a
                    community of great potential. This is the ghetto. At least, that’s what I was told by classmates in
                    Bethesda when they found out I live in Wheaton.
                </p>

                <p>
                    Amid a county-wide study on school boundary lines, bubbles of unchecked privilege have begun
                    bursting at the seams. Student activists are fighting for change, Board of Education (BOE) members are
                    facilitating conversations, and all the while affluent parents are losing their minds. At the conclusion of
                    this study, the BOE alongside a hired consultant company, will decide if and how to redraw school lines
                    to reduce overcrowded schools and improve diversity.
                </p>

                <p>
                    Although Montgomery County Public Schools (MCPS) are ranked some of the best in the country, school
                    clusters feel worlds apart. Having bounced between schools in Chevy Chase, Bethesda, Silver Spring and
                    Kensington, while consistently living in the Wheaton-Glenmont area, I’ve experienced the best and
                    worst of both worlds.
                </p>

                <p>
                    When I attended school in Bethesda, I felt uncomfortable creating friendships with students who
                    resided in the area. Anytime I brought up where I lived, my peers would laugh or scorn my
                    neighborhood as “the ghetto” of Montgomery County. Clearly their ignorance had never been corrected
                    by simply stepping out of Bethesda, but the last thing I wanted was to be different. So, I remained silent.
                    I felt isolated and uncomfortable with my school community because I had nothing to offer in counter to
                    their racist remarks about Wheaton.
                </p>

                <p>
                    I love the vibrant area in which I reside. Every day I see the potential of my neighborhood as I experience
                    new cultures from grocery shopping at the local Asian market to buying pupusas from family owned
                    eateries. But I cannot ignore the areas of improvement desperately needed yet repeatedly forgotten.
                </p>

                <p>
                    Businesses in the Glenmont Shopping Center come and go, unable to afford rent or attract enough
                    customers to sustain themselves. This is not the fault of the businesses themselves as the outside
                    composition of the plaza suggests taking one’s family elsewhere. The unnecessarily large parking lot is a
                    waste of perfect space for weekend markets or events that could attract investors and new
                    homeowners. Compared to Downtown Bethesda’s walkable shopping centers, with string lights for night
                    time gatherings and community events, I reluctantly understand why my school peers believe
                    stereotypes about my neighborhood.
                </p>

                <p>
                    I recently spoke with County Councilmember Evan Glass about what the next steps are for the Glenmont
                    Shopping Center. There is a long-term plan, but because of disputes among owners of the plaza,
                    renovation is a difficult task. I take this as nothing will change in Glenmont until Councilmember Nancy
                    Navarro and County Executive Marc Elrich step up and make it a top priority. The new Wheaton
                    recreation center being built off Georgia Avenue is a great step in creating space for community building
                    but this energy needs to continue further down the road—literally.
                </p>

                <p>
                    There is no shortage of minority owned businesses in Montgomery County but there is a shortage of
                    political push for long-term solutions that would support the minority population. The lack of a
                    progressive urban development plan that would retain ethnic composition and enhance social mobility
                    is creating a wall in front of opportunity. Public and private gridlock over communities such as Wheaton
                    and Glenmont not only affect homeowners but the students and young people who experience the
                    direct effects of socioeconomic division county wide.
                </p>

                <p>
                    The 1966 federal study Equality of Educational Opportunity, led by sociologist James Coleman, found
                    socioeconomic school integration results in academic success. Desegregated students are more likely to
                    attend college, have higher earnings and have racially diverse social networks in their adulthood. The
                    achievement gap across MCPS reflects disparities in development and segregated housing patterns that
                    are creating concentrations of low-income minority neighborhoods and affluent ethnic enclaves.
                </p>

                <p>
                    Montgomery County’s affordable housing program has helped provide housing options for middle- and
                    lower-class residents in affluent areas, but there is still a buyout option for developers allowing them to
                    pay an in-lieu fee to locate affordable housing elsewhere. Alternatives like these in housing bills create
                    concentrated areas of economic homogeneity rather than supporting the county as a whole. The fear of
                    integration drives a wedge in the potential of all communities across the county and divides students as
                    we experience the uneven distribution of academic resources because of the local economy.
                </p>

                <p>
                    The desire for better schools, safer streets, and upward social mobility is universal. But the lack of
                    affordable housing options in affluent areas, and the nonexistent drive to expand sustainable and
                    attractive urban planning to minority majority communities, is creating segregated cities rather than one
                    stably integrated county.
                </p>

                <p>
                    In the wake of the MCPS boundary study, now is the perfect time to look at not only how school
                    boundaries affect our communities but how development and housing options, or lack thereof, shape
                    the area to begin with.
                </p>

                <p>
                    Montgomery County is becoming more socioeconomically diverse every year. Our school systems should
                    reflect this diversity county-wide and academic success across all parts of the district can be found in
                    economic integration. By creating development plans for our minority majority communities that will
                    support minority and locally owned businesses, and by providing more affordable housing options in
                    affluent areas, the county will see more academic success as students of all socioeconomic background
                    become more integrated. Academic achievement is heavily reliant on school and at-home resources as
                    well as race and class integration. A political push for better supporting Montgomery county’s minority
                    population will not only benefit homeowners but our school system, businesses and community
                    wellbeing.
                </p>

                <u className="blue">Written by Sofia Hidalgo</u>
                <br/>
                <p><i>Sofia Hidalgo is a student activist and junior at Albert Einstein High School.</i></p>
                
            </div>
            </>
        )
    }
}
