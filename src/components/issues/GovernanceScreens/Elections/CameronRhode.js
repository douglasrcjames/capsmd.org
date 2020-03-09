import React, { Component } from 'react'

export default class CameronRhode extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        document.title = "CAPS - Cameron Rhode";
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="s-margin-t">Cameron Rhode</h1>
                <h3 className="no-margin">At Large candidate</h3>
                <a href="https://www.facebook.com/RhodeWorkAhead/" className="display-block s-margin-b" target="_blank" rel="noopener noreferrer"> 
                    <img
                        className="s-em"
                        alt="facebook"
                        src={require('../../../../assets/images/social/facebook.png')}
                        />
                    &nbsp;
                    Facebook
                </a>
                <br/>
                <b>1. What is your vision for education in this county?</b>
                <p>
                    I’m looking to create a school system in which race and background are not predictors of
                    academic performance. The MCPS education I received did a fantastic job of preparing me
                    for my future — I want to make that true for as many students as possible.
                </p>
                <br/>
                <b>2. Is there a specific issue that motivates you to serve on this board?</b>
                <p>
                    I attended Lakelands Park Middle School and Poolesville High School. As a recent (2012)
                    graduate of Montgomery County Public Schools, I know our successes and challenges
                    firsthand. Including my bachelor’s and master’s degrees, I spent 19 years as a public school
                    student. My lifetime of benefiting from public education makes my candidacy for Board of
                    Education a natural fit.
                </p>
                <br/>
                <b>3. What specific experiences or skills have prepared you to serve as a board member?</b>
                <p>
                    In my 12 years of volunteering on local, state, and national campaigns, I’ve enjoyed
                    countless conversations with voters across Montgomery County about education issues.
                    When you sit on a stranger’s porch for 15 or 30 minutes, you get to hear their thoughts
                    about issues that affect them personally — issues that don’t grab headlines but that are just
                    as important as those that do. I have earned the 100% Pro-Choice Rating from NARAL Pro-
                    Choice Maryland, and my candidacy is endorsed by Delegate Kumar Barve, Delegate Jim
                    Gilchrist, and former delegate Andrew Platt. I bring a thoughtful, open-minded approach of
                    fully taking in and acting on stakeholders’ concerns. Feel free to contact me anytime
                    at <u>RhodeWorkAhead@gmail.com</u> or <u>240-994-9347</u>.
                </p>
                <br/>
                <b>4. One of the most critical roles of the Board of Education is to monitor the
                    work of the superintendent and hold him or her accountable for
                    performance. Do you believe the current board does a good job of
                    overseeing the superintendent? If not, how would you improve oversight?</b>
                <p>
                    Superintendent Smith and I share a data-driven approach, a strategy that benefits several
                    aspects of education policy. Ultimately, the superintendent reports to the Board of
                    Education; the Board makes decisions based on the recommendations of the
                    superintendent. There should be solid communication among the Board, the
                    superintendent’s office, and interested parties.
                </p>
                <br/>
                <b>5. A significant body of research holds that diverse students are best served by a
                    diverse group of teachers. MCPS has substantial gaps between the demographics
                    of its students and its teachers in many of its schools. Do you believe that MCPS
                    needs more teacher diversity, and if you do, what measures would you
                    recommend for increasing it?</b>
                <p>
                    I agree that diversity is important not just among the student body, but also among school
                    staff. I believe our schools should do more to accommodate LGBT students and teachers.
                    As in-school administration becomes more responsive to concerns of LGBT community
                    members, LGBT teachers’ interest in working for MCPS should increase.
                </p>
                <br/>
                <b>6. There is much attention given to ensuring that students are career ready in
                    addition to being college ready upon graduation. Do you consider career
                    readiness to be a critical mission for MCPS? If yes, what thoughts do you have
                    about how K-12 systems can support all students to be career ready? If not, why
                    not?</b>
                <p>
                    While I see great value in my university degrees, I recognize that not all students want to
                    attend college. More students and their families are finding alternate paths that more closely
                    match the students’ strengths and interests.
                </p>
                <p>
                    MCPS can reduce the stigma surrounding CTE programs by more visibly presenting them
                    as viable options early in each child’s education. Younger students and their families may
                    not know their likelihood of pursuing such alternatives quite so early in the students’
                    academic careers, but familiarity with their options well in advance may help families avoid
                    the notion that anything besides college is a last resort. 
                </p>
                <p>
                    As the three-year action plan on career readiness comes to a close, MCPS should continue
                    to seek to meet the specific program demands of county residents.
                </p>
                <br/>
                <b>7. There has been much attention within MoCo and nationwide on the disparities in
                    FARMS rates and in student demographics across schools within the same
                    district. Some argue that this is the result of housing patterns and outside the
                    purview of schools to address. Others argue that the school system must address
                    the consequences because there are educational ramifications. What are your
                    thoughts on this issue?</b>
                <p>
                    While racial segregation of public facilities by law or regulation is no longer in place, school
                    systems may be effectively segregated by race or household income. As a scientist, I've
                    been trained to rely on raw data in drawing conclusions. Consistent with my lifelong detail-
                    oriented way of thinking, I make decisions carefully and deliberately. If elected, I will give
                    serious weight to the boundary analysis consultant's interim and final reports in addition to
                    the sentiments of students, teachers, parents, and other county residents. I am absolutely
                    open to authorizing another boundary study to allow boundary adjustments.
                </p>
                <br/>
                <b>8. What factors do you believe should be considered in adjusting school boundaries
                    and how would you prioritize them?</b>
                <p>
                    I appreciate that the consultant’s analysis — per Board of Education policy — is considering
                    linguistic, ethnic, and socioeconomic diversity in addition to proximity and capacity. The
                    benefits of diverse schools are not superficial; they are tangible and long-lasting. MCPS
                    should strive to minimize commuting needs and ease overcrowding while maintaining
                    multiple forms of diversity. This may be difficult, but I believe it can be done.
                </p>
                <br/>
            </div>
        )
    }
}
