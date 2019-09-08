import React, { Component } from 'react'
import Background from '../../../assets/images/carousel/green-chalk-board.jpg';

export default class MCPSTheNumbersBeyond extends Component {
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
                
                <h1>MCPS: The Numbers and Beyond</h1>
                <span className="grey">September 8, 2019</span>
                <p>
                    The 19th-century pioneer of public education, Horace Mann, said that education is the “great
                    equalizer.” As a recent graduate (numbering one of 163,000 students across Montgomery
                    County), I’ve had the privilege to observe a majority of the 206 MCPS schools through different
                    leadership roles. Rooted in the standardization of public school evaluations, the dire need for
                    additional counselors, teachers, and improved infrastructure is apparent. These factors demand
                    action. But if the superficial statistics that wrongfully define the education system are prolonged,
                    there can be no lasting resolution. On the surface, Montgomery County Public Schools
                    continues to rank as one of the wealthiest and highest achieving school districts in the nation.
                    However, those figures hide a serious achievement gap. A mere 15-minute drive across the
                    beltway exposes that GPA, test scores, average family income, and graduation rates fall
                    dramatically. We live in a county where your zip code determines your destiny.
                </p>

                <p>
                    Over the past three years, we have seen a decline in the graduation rate for MCPS as a whole.
                    For the 2017-2018 academic year, the graduation rate 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/schools/mcps-graduation-rate-drops-for-third-straight-year/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;dropped to 88.4%, a 1.2% decrease from the previous school year.&nbsp;
                    </a>
                    Four of the five high schools with the highest graduation rates in
                    MCPS are among what students call the “W schools”: Walt Whitman High School (97.9%),
                    Wootton High School (97.8%), Winston Churchill High (97.4%), Poolesville High (96.2%), and
                    Walter Johnson High (95.8%). These schools are located in the western, more affluent parts of
                    Montgomery County. Whitman holds a current population of 2,085 students--66.8% are white.
                </p>

                <p>
                    Cole Alderman, the former Northwood Student Government Association President and current University of Maryland student, 
                    has long since advocated for equalizing access to education. "Your zip code," Alderman believes, "is a direct indicator of 
                    the quality of education you receive." This rings true for the majority of W schools, which notoriously lack ethnic and 
                    socio-economic diversity. Alderman states that the sheer discrepancy puts "working-class and immigrant neighborhoods, 
                    primarily those of color, at a clear disadvantage.”
                </p>

                <p>
                    Wheaton High School boasts an incredibly diverse student body, claiming 54.7% Hispanic, 22.6% African American, 12.2% Asian, 
                    and 8.5% Caucasian cultural origins. Disappointingly, Wheaton bears one of the lowest graduation rates in MCPS, staggering across 
                    the finish line with a mere 77.4%. "This isn't a new phenomenon," Alderman observes, "but it has continued to harm communities 
                    like mine for generations by systematically denying them the key to creating a better future: a quality education."
                </p>

                <p>
                    Perhaps the root indicator of a quality education is in turn the quality of teachers. Playing a key role in cultivating knowledge 
                    and competence in pupils, 
                    <a 
                        href="https://learningpolicyinstitute.org/product/does-teaching-experience-increase-teacher-effectiveness-review-research"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;teachers with more experience tend to encourage significantly better performances from students.&nbsp;
                    </a>      
                    In individual school data in MCPS’s 
                    <a 
                        href="https://www.montgomeryschoolsmd.org/departments/sharedaccountability/glance/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;Schools at a Glance series,&nbsp;
                    </a>
                    there are three categories regarding teachers and their 
                    experience: less than 5 years, 5-15 years, and 15+ years. Referencing the low graduation rate of students at Wheaton High, 
                    you might not be surprised to see that 21.2% of teachers fall into the less than 5 years of experience category.  
                    At Whitman High School, only 11.1% of teachers have less than 5 years of experience.  The disparity, though staggering, 
                    is predictable. Clarksburg High School senior Zoe Tishaev said that “different teachers with varying [years of experience] 
                    offer different rigor to the students.” Almost 60% of the teaching population of Whitman, Walter Johnson, and Wootton High 
                    School has more than 15 years of teaching experience. 
                </p>

                <p>
                    Schools with higher Free and Reduced Meals (FARMs) rates, which correlate to communities with lower income, tend to have a 
                    higher teacher turnover rate. Northwood High School in Silver Spring has a student population where 
                    <a 
                        href="https://www.montgomeryschoolsmd.org/uploadedFiles/boe/meetings/memorandum/181107%201st%20Yr%20Tchr%20Data%20Tchr%20Turnover%20Data%20BD.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;52.5% of students receive FARMs&nbsp;
                    </a>
                    (highest high school rate in the MCPS system) and had an 18.4% teacher turnover. Wheaton High School, with a 49.7% FARMs 
                    rate, had a 17.1% teacher turnover for the 2017-2018 school year. Whitman had a 7.3% teacher turnover with a FARMs rate which 
                    is listed as &lt;5.0%.
                </p>

                <p>
                    The poverty rate and teacher experience correlate with graduation rates. While these numbers are all public, these aren’t the numbers 
                    that are often referred to when people talk about the county. This data confirms that not all schools are the same. Montgomery County 
                    Public Schools is one of the best school districts in the nation, but MCPS still has an immense amount of work ahead of them to ensure 
                    that each school within its boundaries reaches its fullest potential.
                </p>

                <a 
                    className="blue" 
                    href="https://www.drewskilton.me/" 
                    target="_blank"
                    rel="noopener noreferrer">
                        Written by Drew Skilton
                </a>
                <br/>
                <p><i>Drew Skilton is a recent graduate of  Walter Johnson High School. During his time at WJHS, Skilton held various positions in 
                    student government, and launched MoCo Connect. Skilton is attending Wake Forest University in the fall, Class of 2023.</i></p>
                
            </div>
            </>
        )
    }
}

