import React, { Component } from 'react'
import Background from '../../../assets/images/carousel/fence-signs.jpg';

export default class DemandMentalHealthServicesExceedSupplyMoCoSchools extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 60%", // change me around to move up and down!
            backgroundSize: "cover",
            marginTop: "-20px",
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                
                <h1>Demand for Mental Health Services Exceed Supply in MoCo Schools</h1>
                <span className="grey">September 8, 2019</span>
                <p>
                    Mental health is a crisis across America. As pressures mount on students to achieve excellence, and
                    behavioral science sharpens in awareness, more people around the nation are waking up to the idea
                    that mental wellness is critical in the development of healthy living in both children and adults. In
                    Montgomery County, this trend has not gone unnoticed. Mental wellness is becoming ingrained in the
                    educational facilities themselves, with four high schools currently boasting “wellness centers,” with
                    therapists, specially-trained counselors, case managers, and Department of Health and Human Services
                    employees on deck for the usage of the student population.
                </p>

                <p>
                    Wellness centers have had an impact on the student populations of their schools, and have more than
                    demonstrated their usefulness in providing mental health services to students who may not be able to
                    afford it privately. So useful, in fact, are these centers, that they are oftentimes overloaded with
                    students seeking assistance. At Wheaton, queues for mental health services can reach several pages.
                    Sometimes, students who need help immediately are put on the waiting list and will not hear back for
                    weeks.
                </p>

                <p>
                    Despite the seemingly endless lines, wellness centers seem to be having measurable impact on the
                    academic achievement of students. Compared to Edison, Kennedy, and Paint Branch high schools, the
                    FARMS (Free and Reduced Meal) students at Wheaton were more likely to meet or exceed literacy and
                    math expectations in nearly every focus group, according to the MCPS Equity and Accountability data,
                    which breaks down student performance into 5 focus groups (Non-FARMS Black, Non-Farms Hispanic,
                    FARMS Black, FARMS Hispanic, and FARMS White/Asian). At Watkins Mill, one of the other three schools
                    with a wellness center, 70 – 89% of FARMS students in every focus group met literacy standards.
                    Unsurprisingly, it seems that the presence of thorough mental health services in the building enables
                    better performance from students who need them.
                </p>

                <p>
                    While the importance of mental health services cannot be overstated, there is some frustration over the
                    fact that only four of 25 high schools in Montgomery County have a wellness center. Mounting
                    pressures, from students and parents that attend wellness center-less schools, are forcing the county to
                    consider expansion of this critical program. A wellness center is due to be included in the newly
                    reconstructed Seneca Valley High School in Germantown. Time will tell if the county chooses to adopt
                    this practice as standard, equipping all new high schools with wellness centers and potentially expanding
                    to existing buildings.
                </p>

                <p>
                    For students that are not lucky enough to be zoned into a school with a wellness center, mental health
                    help must be sought out through traditional means – school counselors. However, counselors –
                    ironically enough – have dozens of responsibilities outside of mere counseling. They are charged with
                    codifying schedules, writing college recommendations for seniors, and managing other academic
                    programs, like dual enrollment, off-site education, and aide opportunities. On top of that, they are often
                    assigned additional tasks by the administration of a school and are viewed as an additional labor asset
                    for the main office.
                </p>

                <p>
                    With this gallimaufry of expectations, counselors are left little time to give students the attention and
                    assistance they need for any life complications. As a result, in the majority of MCPS high schools,
                    students may never receive adequate mental health assistance when in a crisis.
                </p>

                <p>
                    The resounding cry from the community in response has called for more counselors--but in fact,
                    Montgomery County already touts one of the best student/counselor ratios in the state. The trouble lies
                    in how those counselors are being utilized. A counselor with two or three priorities is far more
                    responsive than a dozen counselors with a dozen responsibilities. The county needs to work toward
                    reassigning the tasks that may not need the expertise of a counselor to other staff in the building. This
                    would lighten the burden on each counselor, giving them more time and freedom to work directly with
                    students instead of struggling to find time in their crowded schedules.
                </p>

                <p>
                    In addition to overworked counselors, every high school in the county is equipped with an overburdened
                    psychologist. Psychologists are often reclusive, never appearing to the public eye and containing
                    themselves within their offices, working away at tests to check for mental health disorders. This hermitic
                    nature is often not by choice as a psychologist splits attention across the thousands of students in a high
                    school and the feeder middle schools. It is no wonder that most students are especially surprised when
                    told they have a psychologist in their building, as the overwhelming majority of students have never
                    even seen their face.
                </p>

                <p>
                    Unlike in the case of counselors, there is a conspicuously apparent shortage of psychologists and mental
                    health professionals in the school system. In the fiscal year for 2020, the county made a menial effort to
                    address this, hiring a whole three additional psychologists to serve the 163,000 students in MCPS.
                </p>

                <p>
                    The majority of the inadequacies of mental health resources in the county can be traced back to
                    funding. Psychologists are expensive, and wellness centers---with a full therapist and half a dozen other
                    specially-trained employees—even more so. That is an unfortunate reality. But if the county wants to be
                    serious about tackling the mental health epidemic, more psychologists need to be hired, more wellness
                    centers constructed, and more counselors freed up to work with their students.
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

                <u className="blue">Written by Zoe Tishaev</u>
                <br/>
                <p><i>Zoe Tishaev attends Clarksburg High School (Class of ’20) and is the President of the Student Government Association.</i></p>
                
            </div>
            </>
        )
    }
}
