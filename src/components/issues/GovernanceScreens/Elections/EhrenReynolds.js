import React, { Component } from 'react'

export default class EhrenReynolds extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        document.title = "CAPS - Ehren Reynolds";
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="s-margin-t">Ehren Reynolds</h1>
                <h3 className="no-margin">District 4 candidate</h3>
                <a 
                    href="mailto:ehrenreynolds@openseatlotteryoption.com" 
                    className="s-margin-b display-block">
                    <i className="fa fa-mail"/> ehrenreynolds@openseatlotteryoption.com
                </a>
                <br/>
                <b>1. What is your vision for education in this county?</b>
                <p>
                    MCPS should reach students where they are, both literally and figuratively.  This means that
                    the system must have the capacity to teach socioeconomically disadvantaged students who
                    may need to come to school to get square meals, along with students who are learning
                    English from homes dominant in another language, as well as students best served by
                    magnet programs that emphasize particular pursuits, such as STEM or verbal
                    communication.  In order to serve 160,000 students from a range of backgrounds and with a
                    range of needs and aspirations, the system has to have many tools in the toolkit.  I think
                    Dual Immersion programs are a great idea, drawing upon the language diversity in the
                    county, and should be expanded beyond just the 5 out of 135 elementary schools that have
                    them.  I also think we should make sure there is sufficient tech accessibility for all students,
                    particularly in the younger grades, to minimize the tech access gaps that may develop in
                    different homes.
                </p>
                <br/>
                <b>2. Is there a specific issue that motivates you to serve on this board?</b>
                <p>
                    I am running to steer the conversation towards consideration of an Open School Lottery
                    Option to address the boundary issue (described in greater detail on my
                    website, 
                    <a 
                        href="https://www.openseatlotteryoption.com" 
                        target="_blank"
                        rel="noopener noreferrer">
                        &nbsp;www.openseatlotteryoption.com&nbsp;
                    </a>
                    ).  There are 10,000 kids in overcapacity schools
                    and 10,000 empty seats.  At the same time, no one wants to leave a school they like.  The
                    most readily implementable solution would be to offer the students in the overcapacity
                    schools lottery spots for open seats at nearby schools.  Where I live, for example, there are
                    two schools with open seats that are closer to my house (Glen Haven and Oakland
                    Terrace), yet my kids are zoned for a school that is across a busy highway, further away,
                    and overcapacity.  An Open Seat Lottery Option would be a non-capital solution that would
                    address the capacity mismatch immediately.  At the same time, it would not spark the
                    backlash and litigation that comes from forcing students to leave schools that they like,
                    making for a much more sustainable solution.  In these polarizing times, it is easy to forget
                    that not all problems have a zero-sum resolution, such that one person&#39;s gain is necessarily
                    someone else&#39;s loss.  An Open Seat Lottery Option would recognize the capacity issues
                    that can lead to educational inequity without imposing a resolution that may conflict with
                    some families&#39; wishes.  After running the Open Seat Lottery Option for an academic year or
                    two, we would be able to see where the demand to move really lies, which would ensure
                    that the Board of Ed is really doing what the voters want.  I have yet to meet a parent or
                    student who resented being given a choice that they didn&#39;t already have.
                </p>
                <br/>
                <b>3. What specific experiences or skills have prepared you to serve as a board member?</b>
                <p>
                    I am a public sector attorney, and I also serve in the National Guard, so I am accustomed to
                    working on part-time jobs serving the public.  In addition, my wife is an attorney and
                    education professional who focuses on diversity and inclusion issues, and is my brain trust.
                </p>
                <br/>
                <b>4. One of the most critical roles of the Board of Education is to monitor the
                    work of the superintendent and hold him or her accountable for
                    performance. Do you believe the current board does a good job of
                    overseeing the superintendent? If not, how would you improve oversight?</b>
                <p>
                    Communication and transparency are key in effective oversight.  The Board has done an
                    acceptable job in oversight, but dropout rates have increased and graduation rates have
                    declined during the superintendent's tenure, so there is more work to be done.
                </p>
                <br/>
                <b>5. A significant body of research holds that diverse students are best served by a
                    diverse group of teachers. MCPS has substantial gaps between the demographics
                    of its students and its teachers in many of its schools. Do you believe that MCPS
                    needs more teacher diversity, and if you do, what measures would you
                    recommend for increasing it?</b>
                <p>
                    All elements of one's background can be important to a teacher in relating to students,
                    which includes a shared racial, ethnic, or socioeconomic identity.  MCPS should strive to
                    recruit a diverse teacher pool.
                </p>
                <br/>
                <b>6. There is much attention given to ensuring that students are career ready in
                    addition to being college ready upon graduation. Do you consider career
                    readiness to be a critical mission for MCPS? If yes, what thoughts do you have
                    about how K-12 systems can support all students to be career ready? If not, why
                    not?</b>
                <p>
                    It's essential that MCPS meet the needs of both college- and non-college-bound students. 
                    The implementation of career-focused academic paths for non-college-bound students is an
                    important feature of education in Montgomery County, and such programs should be
                    strengthened.
                </p>
                <br/>
                <b>7. There has been much attention within MoCo and nationwide on the disparities in
                    FARMS rates and in student demographics across schools within the same
                    district. Some argue that this is the result of housing patterns and outside the
                    purview of schools to address. Others argue that the school system must address
                    the consequences because there are educational ramifications. What are your
                    thoughts on this issue?</b>
                <p>
                    The best path at the current juncture is to implement the Open Seat Lottery Option. 
                    Students of all backgrounds at overcapacity schools will have a choice they don't have
                    now.  Families of means currently have some measure of choice in schools no matter what,
                    because they can move to other school districts or send their children to private schools. 
                    The best way to give students without those options, including families on FARMS, some
                    control over the schools they attend, is the Open Seat Lottery Option.
                </p>
                <br/>
                <b>8. What factors do you believe should be considered in adjusting school boundaries
                    and how would you prioritize them?</b>
                <p>
                    The single most important factor is the wishes of the voters, and the best way to gauge
                    voters' sentiments about individual schools is to give voters a choice in where students go
                    to school via the Open Seat Lottery Option.  We should not rule out boundary changes by
                    any means, but they should be driven by data showing that residents affected by those
                    changes genuinely support the changes.  The Board of Ed is an elected body accountable
                    to the voters.
                    {/* TODO: missing an ending?  */}
                </p>
                <br/>
            </div>
        )
    }
}
