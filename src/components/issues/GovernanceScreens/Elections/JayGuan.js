import React, { Component } from 'react'

export default class JayGuan extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount(){
        document.title = "CAPS - Jay Guan";
    }

    render() {
        return (
            <div className="wrapper">
                <h1 className="s-margin-t">Jay Guan</h1>
                <h3 className="no-margin">At Large candidate</h3>
                <a 
                    href="https://www.jayguan4boe.com" 
                    className="s-margin-b display-block" 
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa fa-link"/> Visit candidate website 
                </a>
                <br/>
                <b>1. What is your vision for education in this county?</b>
                <p>
                    Rapid technological changes are taking place all around us. Our education system is hard
                    pressed to maintain pace. This presents both challenges and opportunities. To ensure that our
                    kids are prepared, we need to update and upgrade our education system. I envision that all of
                    our students have access to rigorous and well-rounded curriculum, in particular STEAM
                    (Science, Tech, Engineering, Art, and Math) curriculum. I envision that we will the leader in
                    innovative education methods. I envision that we will serve as a model of academic and
                    operational excellence to other education systems, and have the capacity to continuously
                    incorporate best practices from around the world. 
                </p>
                <br/>
                <b>2. Is there a specific issue that motivates you to serve on this board?</b>
                <p>
                    I am running because I want to ensure that our students are future-ready. We are in the midst of
                    a technological revolution. We should prepare our kids to face the challenges and take
                    advantage of the opportunities this revolution will bring.
                </p>
                <p>
                    Growing up in a poor immigrant family, I experienced the opportunity gap and discrimination first
                    hand. I was the ESOL kid. I was the "FARM" kid. This gives me a unique perspective on how to
                    address the opportunity gap. Public education was my path to social mobility. I am deeply
                    grateful for it. Part of the reason I am running for the Board of Education is to ensure that this
                    upwardly mobile path will still be here for our children, and our children's children.
                </p>
                <br/>
                <b>3. What specific experiences or skills have prepared you to serve as a board member?</b>
                <p>
                    My service with various MCPS advisory committees such as the District Assessment Advisory
                    Committee, the Asian Pacific American Student Achievement Action Group, and the
                    ESOL/Bilingual Advisory Committee. From these organizations, I have gained both the
                    experience, knowledge, and know-how to serve as a member of the Board.
                </p>
                <p>
                    As a volunteer and former Board Chair of the Chinese American Parent Association of
                    Montgomery County, I conducted community engagement and advocacy for immigrant families.
                    From this experience, I gained important insights into immigrant communities’ understanding of
                    MCPS, their needs, and family dynamics.
                </p>
                <p>
                    From my professional experience, I have a front row seat to the technological changes
                    happening all around us. I also trained many of the junior engineers that come through our
                    education system. I am keenly aware of the strengths and shortfalls for our education system.
                    Lastly, my personal experience with the opportunity gap gives me a unique perspective on
                    challenges of low income and/or immigrant families and some of the effective strategies that we
                    can employ.
                </p>
                <br/>
                <b>4. One of the most critical roles of the Board of Education is to monitor the
                    work of the superintendent and hold him or her accountable for
                    performance. Do you believe the current board does a good job of
                    overseeing the superintendent? If not, how would you improve oversight?</b>
                <p>
                    The current Board is doing a reasonably well job in overseeing the Superintendent and MCPS
                    with the resources at its disposal. I think the Board of Education can benefit in having additional,
                    independent staff in areas such as budget and data analysis.
                </p>
                <br/>
                <b>5. A significant body of research holds that diverse students are best served by a
                    diverse group of teachers. MCPS has substantial gaps between the demographics
                    of its students and its teachers in many of its schools. Do you believe that MCPS
                    needs more teacher diversity, and if you do, what measures would you
                    recommend for increasing it?</b>
                <p>
                    MCPS does have work force diversity efforts underway, and I think they can do more by
                    diversifying the list of universities that MCPS Human Resource conducts recruitment.  
                </p>
                <p>
                    We are constantly in competition with other education systems and institutions, at home and
                    abroad for the best teachers. In order for us to retain the best teachers, we need to ensure that
                    our teachers are compensated with competitive salary, benefits, professional development
                    opportunities, and be treated as professional.
                </p>
                <br/>
                <b>6. There is much attention given to ensuring that students are career ready in
                    addition to being college ready upon graduation. Do you consider career
                    readiness to be a critical mission for MCPS? If yes, what thoughts do you have
                    about how K-12 systems can support all students to be career ready? If not, why
                    not?</b>
                <p>
                    Yes. Career readiness, especially for the careers of tomorrow, is a crucial component of MCPS
                    education mission and in creating social mobility. We need to create and expand more
                    programs such as the Aviation and Aerospace program at Magruder High School. This program
                    trains our students to be certified drone operators. Many CTE programs are bounded to a
                    school. We should also explore how to break geographic barriers and make at least some
                    portion of popular CTE programs available to students systems wide.
                </p>
                <br/>
                <b>7. There has been much attention within MoCo and nationwide on the disparities in
                    FARMS rates and in student demographics across schools within the same
                    district. Some argue that this is the result of housing patterns and outside the
                    purview of schools to address. Others argue that the school system must address
                    the consequences because there are educational ramifications. What are your
                    thoughts on this issue?</b>
                <p>
                    The most effective solution has to be multi-prong approach. It is certainly the responsibility of a
                    school system to do all within its power to alleviate the impact on poverty on its students. As a 
                    student who lived in poverty, I did not what extracurricular activities were or what role it played
                    in college admission. I benefited from having dedicated teachers, college counselors, and
                    service such as important to have available services to support students in poverty.
                </p>
                <p>
                    Some factors, such as Planning and availability of transit (important to low income families), are
                    truly out of a school system’s control. It is important for the Board of Education to collaborate
                    with Planning Board, MCDOT, County Council, and the State legislature to resolve these issues.
                </p>
                <br/>
                <b>8. What factors do you believe should be considered in adjusting school boundaries
                    and how would you prioritize them?</b>
                <p>
                    Boundary study, in essence, is a trade study between various factors. Which factors are more
                    important depends on the objectives of the study and context. I typically consider facility
                    utilization and geography to be the most important. As over-utilization and geography have an
                    overwhelmingly negative impact on a school’s operation, safety, security, and most importantly,
                    on students well-being.
                </p>
                <br/>
            </div>
        )
    }
}
