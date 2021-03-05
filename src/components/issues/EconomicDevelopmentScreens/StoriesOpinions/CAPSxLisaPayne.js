import React, { Component } from 'react'
import Background from '../../../../assets/images/carousel/lobster.jpg';
export default class CAPSxLisaPayne extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 70%", // change me around to move up and down!
            backgroundSize: "cover",
            marginTop: "-20px",
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                <h1>CAPS x Freddy's</h1>
                <span className="grey">October 9, 2019</span>
                <p>
                    <i>
                        As part of a small business series, CAPS sat down with a group of former and current small
                        business owners to better understand the small business owners experience in Montgomery
                        County.
                        <br/><br/>
                        The following interview is with Lisa Payne, owner of Freddy’s Lobster and Clams
                    </i>
                </p>

                <p>
                   <b>Can you tell us a little bit about your business?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Sure. It was a restaurant based in Bethesda called Freddy’s Lobster and Clams, and it was
                    just a casual, lobster-roll restaurant. It had a really great beer selection and a nice bar so you get
                    good cocktails… and it was kid friendly.
                </p>

                <p>
                   <b>How did you come up with the idea?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I can’t take credit for the idea, we had a partner who used to own Grapeseed Restaurant in
                    Bethesda and it was his idea. Initially we were supposed to be silent partners, and then it turned
                    into not silent partners, and then ...we got left with the restaurant. But even as a silent partner, I
                    was involved from the beginning in helping to get the whole thing set up. By the end it was me
                    working on the ground with management.
                </p>

                <p>
                   <b>How long did it take to open Freddy’s, from ideation to opening?</b>
                   <br/>
                   <i><u>Lisa:</u></i> It probably took about a year from the time we talked about the idea to the time it opened
                    in May of 2011.
                </p>

                <p>
                   <b>Why did you open the restaurant in Moco?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Because we live here and wanted to do something to invest in local business. That’s
                    something we like to do even now. We like to go out to restaurants in Bethesda, and would like
                    good restaurants to stay here.
                </p>

                <p>
                   <b>Did other business owners you met share the same desire?</b>
                   <br/>
                   <i><u>Lisa:</u></i> To be honest, I’ve never heard anyone say, “Hey you should open a business in
                    Montgomery county, because it’s really easy and they’re going to make it fun for you.” The same
                    way no one has ever said, “You should build a house in Montgomery County because they’re
                    going to make it really easy and fun for you.”
                    <br/><br/>
                    There is nothing that happens in Montgomery County where you have to deal with the county
                    that is easy or fun. So, against all advice we opened [Freddy’s] anyway.
                </p>

                <p>
                   <b>What would you say are the positives and challenges of having a business in
                    Montgomery County?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I would say there are many more challenges, especially if you own a business that serves
                    alcohol, because Montgomery County’s alcohol rules are stupid and the process that you have to
                    go through to get alcohol in Montgomery County is stupid. And I can speak to this not only as a
                    business owner, but as someone who served on the liquor board for Montgomery County; I was
                    on the resident advisory board. So I got firsthand insight into how Montgomery County manages
                    its processes. It was eye opening.
                </p>

                <p>
                   <b>What were some of the things that would come up?</b>
                   <br/>
                   <i><u>Lisa:</u></i> The most ridiculous thing I saw when I was on the board is that Montgomery county at
                    that time, I’m not sure if this is still true, owned the fleet of trucks that it used to deliver alcohol.
                    And the trucks were known to be problematic. They broke down all the time which caused
                    things to be late; the backs of the trucks were decaying and open to the weather, so if it rained,
                    you would get your deliveries and they would be soaking wet. Which, for some things isn’t a
                    problem, but if you have a high end wine store and you get a delivery and all the labels are
                    falling off the bottles… we would have people come in and say that all of their deliveries were
                    completely ruined because they were delivered wet.
                    <br/><br/>
                    And the county not only had this fleet of trucks, but they also then paid county employees to
                    maintain the trucks, so they heard over and over again, that this was an issue. And they took – I
                    think it was a year— to do a study to figure out whether or not it might make sense for them to
                    sell the trucks and lease a fleet of trucks so that whenever there was a problem with a truck, [the
                    county] could just get a new one. So they went through this whole process of cost benefit
                    analysis to discover that, “Wow, yes, it is cheaper to lease a fleet of trucks, than to own and try to
                    maintain a fleet.” And then they still weren’t sure and [the county] thought maybe they should
                    do another study because they weren’t sure if they believed the first one. It was ridiculous. At
                    what point do you see you are actively hurting business owners?
                </p>

                <p>
                   <b>Do you know of any businesses that closed as a result of this?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I don’t. With Montgomery County it feels like it’s death by a thousand cuts, so it’s not the
                    alcohol alone that would kill you. And it feels like there are so many places where it could be
                    more efficient and it’s just not because you’ve got two people doing almost the same job, instead
                    of one. And so I can’t say. But it certainly isn’t helpful. Especially for some of these higher end
                    retail stores that depend on getting what they ordered and can’t depend on getting it timely and
                    in good condition. And they have no other recourse other than complain to the county.
                </p>

                <p>
                   <b>What do you see as some solutions to the problems you encountered as a business
                    owner?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Well, Montgomery County needs to get out of the business of liquor period. I mean, just as
                    a retail consumer, why would I shop in the Montgomery County store where I’m going to pay
                    more and have fewer choices, when I can drive to McLean and it’s twenty minutes away. This
                    was another thing I heard when I was on the board. The county was complaining that people
                    shouldn’t be driving across the state lines to buy alcohol. Well, why? I mean, so what then?
                    You’re going to give people tickets? That’s the answer? How about you make it easier for people
                    to do it at home if you don’t want them going somewhere else.
                </p>

                <p>
                   <b>When you served on the board, was there any specific reason the county gave to
                    indicate why they wanted to continue having a liquor monopoly?</b>
                   <br/>
                   <i><u>Lisa:</u></i> No. It was kind of a foregone conclusion.
                </p>
                
                <p>
                   <b>What sorts of resources were invaluable to you when you were starting the
                    business?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I don’t know how to answer that. From Montgomery County? None that I can think of. I
                    mean there are 97,000 hoops you have to jump through and I sort of blocked out what most of
                    those are. But there is nobody that you can go to that will help you get the answers. And there
                    are jurisdictions that are very close to here, where there is a person who is the “small business
                    let me help you start it,” person. Who will say here is a list of all of the things you need to do.
                    Call our office anytime, we can help you. It really does feel like you can open a business in spite
                    of the county. I mean, just look around Bethesda, right? There’s a reason you don’t have so many
                    little one-off family-owned restaurants. It’s because [the county] makes it so hard and
                    expensive. There is a permit for everything and sometimes two. It’s just not friendly.
                </p>

                <p>
                   <b>What were your biggest challenges as an entrepreneur?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Well, I mean, not knowing what I was doing. Learning as you go...I would say that was the
                    number one thing.
                </p>

                <p>
                   <b>Entrepreneurship stats, show that 60 percent of entrepreneurs are men, and 40
                    percent are women. What would you say is the biggest thing that holds women
                    back from jumping into entrepreneurship roles?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Well, I don’t know if I can generalize for all women but for me personally, it’s probably just
                    because...I do not have the freedom of time and movement that a lot of men have, right? The
                    kids are on me...regardless of what I’m doing. I still have to be there for school pick-up, I have to
                    drive to horseback riding lessons. They are the number one priority.
                </p>

                <p>
                   <b>Which of your accomplishments, professionally, makes you the proudest?</b>
                   <br/>
                   <i><u>Lisa:</u></i> You know, I think I’d have to say...I have several things I’ve gotten into where I didn’t have
                    any idea what I was doing and I figured it out. I have a history of coming in cold and figuring it
                    out.
                </p>
                
                <p>
                   <b>From where do you draw your inspiration--in life or professionally?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I guess, I don’t like to fail, so fear of failure is my inspiration.
                </p>
                
                <p>
                   <b>What would you say is the biggest misconception about the business community in
                    Montgomery County?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I think, maybe the biggest misconception is by the county government. It seems like they
                    think they have created an environment where people will want to come and do business and I
                    think that is just flat out, not true.
                </p>

                <p>
                   <b>Why do you think that is?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I don’t know--- I think it’s mainly that somehow, we’ve managed to work ourselves into a
                    position where a lot of people who work for the government have convinced themselves that all
                    of these regulations and hoops have some kind of benefit. I think there’s probably a reason why-
                    - something happened-- that resulted in all of these.
                    <br/>
                    <br/>
                    Have you ever heard the story about cutting the ends of the roast? There’s a woman who
                    whenever she makes roast, she cuts the ends off, and somebody asks--why do you cut the ends
                    off? And she says she does it because it’s what her mother always did. So she finally goes and
                    asks her mom, and her mom says, “oh, yeah, it’s because the pan that I had was too small so I
                    had to cut the ends off to get it into the pan.”
                    <br/>
                    <br/>
                    I feel like, that is sort of where Montgomery County is. We have all of these crazy rules and when
                    they were setup, there was a reason. But we need to evaluate what impact are these things
                    having now, the reasons they were created in the first place, if they are even valid anymore and
                    what is it that we’re trying to do here.
                </p>

                <p>
                   <b>Have you noticed a difference in how your business operates under different
                    government administration levels. Whether that’s local, state or federal?</b>
                   <br/>
                   <i><u>Lisa:</u></i> No, I would say we had a little bit of state contact for sales tax but most of it was local.
                </p>

                <p>
                   <b>In the Obama era, did you fall under the bracket of needing to supply your
                    employees with health insurance?</b>
                   <br/>
                   <i><u>Lisa:</u></i> We closed the restaurant right before that stuff kicked in. We did offer health insurance
                    though.
                </p>

                <p>
                   <b>Why did you guys decide to close it?</b>
                   <br/>
                   <i><u>Lisa:</u></i> It was hemorrhaging cash--that was it.
                </p>

                <p>
                   <b>Do you think closing could have been prevented?</b>
                   <br/>
                   <i><u>Lisa:</u></i> Yes. Better management would certainly have been up there. That was really the problem
                    with it. A restaurant is a difficult animal because you really do have to be there all the time or
                    you have to have somebody that you really trust that knows what they’re doing.
                </p>

                <p>
                   <b>What advice would you give other people who want to start businesses in
                    Montgomery County, whether they’re restaurants or not?</b>
                   <br/>
                   <i><u>Lisa:</u></i> I would say, think long and hard about it first and see if you can find out what’s actually
                    going to be involved. Also, talk to other people who do the same thing and find out what they’re
                    experience was and have them really think about whether they think that’s still a good idea.
                </p>
               
            </div>
            </>
        )
    }
}