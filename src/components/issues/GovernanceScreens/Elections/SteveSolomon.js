import React, { Component } from 'react'

export default class SteveSolomon extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        document.title = "CAPS - Steve Solomon";
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="s-margin-t">Steve Solomon</h1>
                <h3 className="no-margin">District 4 candidate</h3>
                <a 
                    href="https://www.votestevesolomon.com/" 
                    className="s-margin-b display-block" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-link"/> Visit candidate website 
                </a>
                <br/>
                <b>1. What is your vision for education in this county?</b>
                <p>
                    I see Montgomery County as the leader in the state of Maryland in terms of education.
                    Being born and raised here we always had the reputation of having the best schools,
                    which is why people wanted to live here.
                </p>
                <br/>
                <b>2. Is there a specific issue that motivates you to serve on this board?</b>
                <p>
                    I just want to serve on the board and make things better for all students and parents.
                </p>
                <br/>
                <b>3. What specific experiences or skills have prepared you to serve as a board member?</b>
                <p>
                    I'm a lifelong resident of Montgomery County. I have volunteered for various groups. I
                    also feel that any elected official needs to be hard working, have a level head, and be able
                    to work well with others, all skills that I like to think I possess.
                </p>
                <br/>
                <b>4. One of the most critical roles of the Board of Education is to monitor the
                    work of the superintendent and hold him or her accountable for
                    performance. Do you believe the current board does a good job of
                    overseeing the superintendent? If not, how would you improve oversight?</b>
                <p>
                    The BOE really only has the power to hire and retain the superintendent. The
                    superintendent then oversees administration and the various offices in MCPS. The BOE
                    acts independently on budget decisions and policy making. I believe this system works
                    well.
                </p>
                <br/>
                <b>5. A significant body of research holds that diverse students are best served by a
                    diverse group of teachers. MCPS has substantial gaps between the demographics
                    of its students and its teachers in many of its schools. Do you believe that MCPS
                    needs more teacher diversity, and if you do, what measures would you
                    recommend for increasing it?</b>
                <p>
                    Yes. I believe teacher retention is a big problem in MCPS. New teachers are
                    overwhelmed, they lack mentoring, and need more autonomy. Also, we need to show all
                    MCPS students the advantages of becoming an MCPS teacher, which would be a good
                    way to attract more diverse teachers.
                </p>
                <br/>
                <b>6. There is much attention given to ensuring that students are career ready in
                    addition to being college ready upon graduation. Do you consider career
                    readiness to be a critical mission for MCPS? If yes, what thoughts do you have
                    about how K-12 systems can support all students to be career ready? If not, why
                    not?</b>
                <p>
                    Yes, preparing students to be career ready is one of my top priorities. I went through K-
                    12 like so many others, without understanding what "real world" jobs were like. While
                    the world has changed technologically in the 30 years since I was in school, we still need
                    better real world education. I believe we need more vocational programs like we have at
                    Edison where students can learn to be electricians, plumbers, carpenters, and auto
                    mechanics.
                </p>
                <br/>
                <b>7. There has been much attention within MoCo and nationwide on the disparities in
                    FARMS rates and in student demographics across schools within the same
                    district. Some argue that this is the result of housing patterns and outside the
                    purview of schools to address. Others argue that the school system must address
                    the consequences because there are educational ramifications. What are your
                    thoughts on this issue?</b>
                <p>
                    We need to focus more resources on schools with higher FARMS rates. All schools
                    should be safe and modern and offer similar programs. The school you go to should not
                    determine the opportunities you have.
                </p>
                <br/>
                <b>8. What factors do you believe should be considered in adjusting school boundaries
                    and how would you prioritize them?</b>
                <p>
                    I believe school boundaries do need to be adjusted periodically. The main factors should
                    be geographic proximity, balancing over and under capacity schools, and stability over
                    time.
                </p>
                <br/>
            </div>
        )
    }
}
