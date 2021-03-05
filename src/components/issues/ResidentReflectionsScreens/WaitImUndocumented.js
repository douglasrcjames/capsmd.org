import React, { Component } from 'react'
import Background from '../../../assets/images/carousel/dreamer-jacket.jpg';

export default class WaitImUndocumented extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 30%", // change me around to move up and down!
            backgroundSize: "cover",
            marginTop: "-20px",
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                <h1>Wait, I'm Undocumented?</h1>
                <span className="grey">September 10, 2019</span>
                <p>
                    <i>
                    CAPS Executive Director, Nina Belforte and CAPS Senior Director, Mary Mukira, sat down for a one on
                    one interview with a former MCPS, and current DACA student and DREAMer enrolled at The
                    University of Maryland, to unpack the difficulties faced in the immigrant community.
                    </i>
                </p>
                <p>
                    <i>
                    For the purposes of protecting the interviewee’s personal, economic and professional person, names and
                    other personal information have been omitted.
                    </i>
                </p>

                <p>
                   <b>CAPS: </b> How old were you when you came to the United States?
                   <br/>
                   <b>DREAMer: </b> I was four years old.
                </p>

                <p>
                    <b>CAPS: </b> Where were you born?
                    <br/>
                    <b>DREAMer: </b> Peru.
                </p>

                <p>
                    <b>CAPS: </b> How much do you remember about Peru?
                    <br/>
                    <b>DREAMer: </b> I don’t remember anything. I see a lot of photos of me and my parents. [My
                    parents] have asked me if I remember anything and I just don&#39;t, so they will tell me stories. It
                    would be nice to remember...
                </p>

                <p>
                    <b>CAPS: </b> Why did your family leave?
                    <br/>
                    <b>DREAMer: </b> They wanted… a better future for me. They knew I would have more opportunities
                    here than in Peru. [And] my mom couldn’t find a job.
                </p>

                <p>
                    <b>CAPS: </b> What did your parents do in Peru?
                    <br/>
                    <b>DREAMer: </b> My dad was a psychologist. He went to University in the city, and my mom
                    struggled to find jobs.
                </p>

                <p>
                    <b>CAPS: </b> Who did you leave behind?
                    <br/>
                    <b>DREAMer: </b> My dad’s side of the family. My mom’s side began coming here in the 90’s, so
                    they’re all here-- my grandma, my grandpa, a lot of my aunts, uncles and cousins. But nobody
                    from my dad’s side is here.
                </p>

                <p>
                    <b>CAPS: </b> How has that impacted your Dad?
                    <br/>
                    <b>DREAMer: </b> My dad talks to his family regularly, but it’s not the same as being with them
                    physically. This year, my mom and I saved up our money and brought my grandmother to DC
                    for ten days.
                </p>

                <p>
                    <b>CAPS: </b> Does your family miss Peru?
                    <br/>
                    <b>DREAMer: </b> They miss family. My grandfather on my dad’s side is going through some health
                    issues, so my dad wishes he could be with him. We tried to get my grandpa to come with my
                    grandma, but he’s still working. I know they both miss Peru. They watch the Peruvian news a lot,
                    and sometimes they’ll see places they went to when they were young, or the neighborhood they
                    grew up in, and they’ll tell me what’s changed, and what’s stayed the same. We’ve talked about
                    what it would be like to go back to visit and stay for a month.
                </p>

                <p>
                    <b>CAPS: </b> How did you get to the US, and how did you end up in Montgomery County? 
                    <br/>
                    <b>DREAMer: </b> I guess originally, we were supposed to go to Florida. We came on a plane and
                    landed in DC and we ended up staying.
                </p>

                <p>
                    <b>CAPS: </b> How old were you when you found out you were undocumented?
                    <br/>
                    <b>DREAMer: </b> I was 17. I was in my senior year of high school and I was starting to apply for
                    schools. I wanted to apply to the University of Maryland, Towson, Trinity and Florida
                    International University--and I was thinking, oh I can get financial aid, it’ll be okay. And that’s
                    when I realized I couldn’t.
                </p>

                <p>
                    <b>CAPS: </b> Can you walk us through the day you found out?
                    <br/>
                    <b>DREAMer: </b> I remember it perfectly. It was after school, I was working with a counselor and she
                    was helping me through the UMD application. That’s when I found out and realized I wasn&#39;t a
                    U.S. citizen, or a permanent resident. On applications it asks if you’re born in the United States.
                    I always knew that I wasn’t, but I didn’t really know that meant I was ineligible to attend college
                    the way I wanted, and that I wouldn’t be eligible for in-state tuition. And then the form asked if
                    I was an international student. But that wasn’t me either because I’ve been here my whole life. I
                    was so sad. There were so many things going through my head. What am I going to do now? I’m
                    going to have to go to MC now.
                </p>

                <p>
                    <b>CAPS: </b> You didn’t want to go to MC?
                    <br/>
                    <b>DREAMer: </b> What I really wanted was the four-year college experience. When I was thinking of
                    college, I imagined living on campus. It’s interactive. So, finding out I wouldn’t be able to do any
                    of that was disappointing. It really was. But now, I’m proud to say that I went to Montgomery
                    College, and I finished my associates. I graduated from MC in May, and now I’m at University of
                    Maryland working to complete my undergrad because of the DREAM Act and DACA.
                </p>

                <p>
                    <b>CAPS: </b> Do you think you would have been able to achieve this level of education had you been in
                    Peru?
                    <br/>
                    <b>DREAMer: </b> I think I would have just felt stuck in Peru. One of the challenges there is that they
                    make you decide on a major when you’re 16 or 17 years old and you have to stick to it.
                </p>

                <p>
                    <b>CAPS: </b> Did you happen to notice any DACA prohibited scholarships when you were applying for
                    school?
                    <br/>
                    <b>DREAMer: </b> Against DACA, no. But I did find a lot of the general requirements were that you
                    had to be a US citizen or permanent resident. So that really demotivated me when applying for
                    scholarships. It was mostly private scholarships that paid for Montgomery College.
                </p>

                <p>
                    <b>CAPS: </b> For those who don’t know, what’s the difference between DACA and the DREAM Act?
                    <br/>
                    <b>DREAMer: </b> A lot of people have DACA and the DREAM Act confused. The DREAM Act is what
                    gives students the opportunity to go to school in Maryland for in-state tuition, while DACA gives
                    you work authorization. People think they are the same, but in reality they are two different
                    things.
                </p>

                <p>
                    <b>CAPS: </b> Are there any specific times you’ve felt unwelcome?
                    <br/>
                    <b>DREAMer: </b> I used to be uncomfortable saying I wasn't born here because there are so many
                    people with different opinions. One time at Montgomery College… there was a lady trying to
                    register students to vote. She asked if I was registered and I said no. She started saying I should
                    contribute to my community and I kind of felt like she was attacking me. I finally had to tell her
                    I’m not from here. Ever since then, I just tell people I’m registered. Like, when I went to the
                    March for Our Lives... I said [I was registered] because I didn’t want to go through that
                    experience again.
                </p>

                <p>
                    <b>CAPS: </b> Many times, we hear rhetoric condemning parents for bringing their children to the US
                    illegally. What would you say to that?
                    <br/>
                    <b>DREAMer: </b> America has a lot of opportunities and good universities, so it’s unfair for
                    somebody to think that I shouldn’t have opportunities too just because I wasn’t born here. I
                    think it’s really selfish. I just don’t think it’s fair for someone to blame my parents for bringing
                    me. I’m a good student, I have an amazing internship and I am contributing to society. I don't
                    see why someone should say I shouldn’t be here.
                </p>

                <p>
                    <b>CAPS: </b> How does it make you feel when you hear the term “illegal alien”?
                    <br/>
                    <b>DREAMer: </b> It gets me so heated. It’s offensive. Nobody is illegal. How can a person be illegal?
                    I’m an immigrant, I’m undocumented, I’m a Dreamer. But I’m not illegal. I came here legally. I
                    came here with a visa. My visa just expired, that’s it. And other people may have crossed the
                    border illegally, but it doesn’t make a human being illegal. Just undocumented. So, it’s
                    offensive. Illegal isn’t used to describe anybody else, and whenever people use the term “illegal,”
                    they really mean Hispanic people crossing the border. I just don’t believe that anybody is illegal.
                </p>

                <p>
                    <b>CAPS: </b> If this could be a teachable moment, how would you ask people to identify you?
                    <br/>
                    <b>DREAMer: </b> I would ask people to identify me as a Dreamer and a DACA recipient. I am a
                    proud, undocumented, Dreamer.
                </p>

                <p>
                    <b>CAPS: </b> What do you want your community to know about you and the DACA and DREAMer
                    community?
                    <br/>
                    <b>DREAMer: </b> That we are not going to stay quiet. We’re not going to just let others tear us down
                    and think that they have power over us just because we weren’t born here. We’re going to fight
                    to keep DACA.
                </p>

                <p>
                    <b>CAPS: </b> What does DACA mean for you?
                    <br/>
                    <b>DREAMer: </b> DACA for me means the ability to work and have in-state tuition. It means being
                    able to have some of the same opportunities as basic American citizens. Even though I can’t
                    travel, visit my family, or even vote, I’m still contributing to society. DACA is really important,
                    and there are a lot of people in the United States [and] at the University of Maryland that have
                    DACA… they all want to be really successful. I think the reason why, is that there are so many
                    negative things said about us-- like we don’t deserve to be here, and DACA should be
                    terminated-- so we just want to prove people wrong, you know? We’re hard workers, we do good
                    in school, and we can do the same things as everyone else. It’s not our fault we came at such a
                    young age.
                </p>

                <p>
                    <b>CAPS: </b> As a DACA recipient, are there any challenges or limitations with finding a job?
                    <br/>
                    <b>DREAMer: </b> Since I have DACA, I’m able to get a job just like everyone else, if I show them my
                    work authorization card. I think the one thing that I can’t do is work in a government job.
                </p>

                <p>
                    <b>CAPS: </b> Where were you when you heard about the possibility of DACA ending?
                    <br/>
                    <b>DREAMer: </b> I was in my linguistics class, and I was on my phone because I was constantly
                    checking for updates. Then I got a text message saying it wasn’t going to continue. So, I was
                    stressed. I left class when it ended, and I couldn’t stop thinking about how I was going to
                    continue school and how I would work. I was so nervous. I sat in my car looking over articles,
                    hoping it was fake. But no, it was all real.
                </p>

                <p>
                    <b>CAPS: </b> When you were going through the application process for DACA, was there a sense of
                    fear about providing your information, and that your information may be taken advantage of or
                    compromised at the expense of your family?
                    <br/>
                    <b>DREAMer: </b> Yeah, because you’re giving Homeland Security all your information. But I have no
                    criminal history, I’ve never been arrested, I have nothing bad against me. So that gave me some
                    comfort knowing that if anything were to happen, I have done literally nothing wrong.
                </p>

                <p>
                    <b>CAPS: </b> Have you and your family discussed what your life would look like if DACA or the
                    DREAM Act were to be revoked?
                    <br/>
                    <b>DREAMer: </b> No, we’ve never talked about what would happen if I never got the chance to renew
                    it. For them to know that they came here...I think it would hurt them because the whole reason
                    they came here was basically for me.
                </p>

                <p>
                    <b>CAPS: </b> What would happen if tomorrow you had to go back to Peru? What would that mean for
                    you, what would your life look like in terms of assimilating to a new place?
                    <br/>
                    <b>DREAMer: </b> My cousin came to visit me from Peru four years ago and when we were talking in
                    Spanish to each other, she told me I don’t have a fluent Spanish accent anymore. She said if I
                    were to go to Peru, people would know that I’m American. They would know I’m an outsider. It’s
                    kind of scary. I’d be in a place where I really don’t know anybody except for my dad’s family. I’d
                    have to make new friends and find my way around the city---and I have anxiety so I would really
                    be scared.
                </p>

                <p>
                    <b>CAPS: </b> Under DACA and the DREAM Act, there is no current pathway towards citizenship--are
                    you following any sort of process to try and become a US citizen outside of that?
                    <br/>
                    <b>DREAMer: </b> I mean, there’s not much that I can do, all I can do is hope somebody passes
                    something that will give me a path to citizenship. Other than that, it’s just getting married and I
                    don’t want to do that.
                </p>

                <p>
                    <b>CAPS: </b> How do you think the current immigration system could be reformed to better serve the
                    needs of those looking to start a life here?
                    <br/>
                    <b>DREAMer: </b> I think for adults that are coming here, for the very first time, it would be
                    important for them to have job resources. I know when my parents came here, they had no idea
                    what they were going to do. My dad was a psychologist in Peru and I never quite understood
                    why his higher education couldn't transfer over here. And then my mom, who wanted to be an
                    interior designer… started working here as a dishwasher. They work jobs that... American
                    citizens just sometimes wouldn’t want to do. Americans are really lucky...the process [to become
                    one] is really long but once you are a citizen, it’s worth all the wait.
                </p>

                <p>
                    <b>CAPS: </b> What accomplishment do you have to date that you’re most proud of achieving?
                    <br/>
                    <b>DREAMer: </b> Definitely graduating from Montgomery College and being able to transfer to a
                    four-year university.
                </p>

                <p>
                    <b>CAPS: </b> What do you want your future to look like here?
                    <br/>
                    <b>DREAMer: </b> Well here, I envision myself finishing at the University of Maryland in a few years.
                    The reason I work so hard at school and at work, is because I really do want to be successful. To
                    prove to myself that even though I’m undocumented and I don’t have the same exact
                    opportunities as a US citizen, I can still be something. [And] I would like to have a job that
                    supports undocumented people and helps them find resources.
                </p>
                
            </div>
            </>
        )
    }
}

