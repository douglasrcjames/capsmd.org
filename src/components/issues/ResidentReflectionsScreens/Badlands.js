import React, { Component } from 'react'
import Background from '../../../assets/images/carousel/badlands.jpg';

export default class Badlands extends Component {
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 55%", // change me around to move up and down!
            backgroundSize: "cover"
          };
          
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                
                <h1>CAPS X BADLANDS</h1>
                <span className="grey">October 30, 2019</span>
                <p>
                    As conversations continue about how our local government can best support our business community,
                    CAPS sat down with local entrepreneur Mikel Blair, to talk about what it’s like to be a small business
                    owner in Montgomery County.
                </p>

                <p>
                    Blair is the Founder and CEO of 
                    <a 
                        href="https://badlandsplayspace.com/about/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;Badlands,&nbsp;
                    </a> 
                    a “free range play space for curious minds,” located in
                    Loehmann’s Plaza on Randolph Road.
                </p>

                <p>
                    When you enter Badlands, the first thing you notice isn’t what you see, instead, it’s what you hear---
                    laughter. Badlands is a happy place. Given the former occupant was a supermarket, the current space
                    feels vibrant and inviting.
                </p>

                <p>
                    In a society that often silos work and play, Badlands bridges the gap between the two and offers a unique
                    sense of both. As we congratulate Blair on the success of Badlands, she meets the enthusiasm with
                    trepidation.
                </p>

                <p>
                    We point out it’s a packed house--
                </p>

                <p>
                    “We employ as many as 50 people per year for the last two years and provide what we think to be a fun
                    and unique experience for the community. We’re grateful it’s been well received.”
                    
                </p>

                <p>
                    This is no minor accomplishment for a business owner in the county. 
                    <a 
                        href="https://www.bls.gov/data/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;Montgomery County has lost 625
                        business establishments since 2013. By comparison, the rest of the Washington D.C. region grew by
                        28,125 business establishments, or 17 percent.&nbsp;
                    </a>   
                    Blair says in Montgomery County, it takes a village to be self-sustaining.
                </p>

                <p>
                    “This county needs a better support system for new businesses. I’m grateful that I have a strong circle of
                    support from family and friends because I’m not sure how one succeeds without that. I wonder how many
                    people have business ideas that passionately want to be realized, but don’t know where to start or where
                    to take them.”
                </p>

                <p>
                    Yet, support continues to dwindle for entrepreneurs in Montgomery County, where cuts in funding for the
                    <a 
                        href="https://www.pewtrusts.org/en/research-and-analysis/blogs/stateline/2018/08/02/after-parkland-states-pass-50-new-gun-control-laws"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;incubator program totaled $550K.&nbsp;
                    </a>
                    Despite the stark numbers, Blair is adamant about building a
                    community here and is proud to have started her business at home.
                </p>

                <p>
                    “Who wouldn’t want to invest where they work and live? It’s been a privilege to provide meaningful
                    experiences for children and families while also providing jobs.”
                </p>

                <p>
                    Looking at the future of business in Montgomery County, Blair notes, “I’m concerned as we continue to
                    invest in our business that there isn’t a greater vision or plan to improve the local business landscape as
                    witnessed by more and more empty retail space around our communities. I’m concerned that we don’t
                    hear about more positive incentives for new company growth. I’m hoping to see more local leaders
                    emerge as vocal business growth advocates.”
                </p>
                
                <p>
                    When you drive around Montgomery County, you don’t have to look farther than White Flint or Aspen Hill-
                    - 
                    <a 
                        href="https://ggwash.org/view/70195/here-are-13-reasons-why-montgomery-county-has-to-make-budget-cuts-next-year"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;storefronts are empty &nbsp;
                    </a>
                    and buildings are littered with lease signs.
                </p>

                <p>
                    In a county that houses some of the nation’s largest wealth, it’s odd to see fractured development.
                    “One misconception is that opportunity is endless and that we’re a beacon of growth, that the
                    Montgomery County economic community is healthy--it’s not,” Blair says.
                </p>

                <p>
                    Despite the unhealthy business environment, Blair has been able to sustain a viable business model with
                    Badlands. Her advice to other business owners?
                </p>

                <p>
                    “Be careful waiting for growth to happen naturally when the goal is to create something new. I try to use
                    my discomfort waiting for progress to push harder towards goals and objectives creating the playbook as I
                    go.”
                </p>

                <p>
                    In conversation with local business owners, one common thread between them is the feasibility of
                    keeping a business in Montgomery County, and the role local government plays in the establishment or
                    retainment of businesses in the area.
                </p>

                <p>
                    The amount of self-trust that needs to innately exist within an individual to take the dive into
                    entrepreneurship is incalculable—with that, encouraging others to continually invest in your idea or
                    product is an added stressor. Having a resource hub where potential business owners can turn for
                    support, is an area of opportunity to build upon as we look towards a more economically sustainable
                    future.
                </p>

                <p>
                    As we conclude the interview, we ask Blair to share with us and the community at large, one important
                    thing about being a business owner. She says, simply, “it’s worth it.”
                </p>

                <span className="blue">
                    By Nina Belforte and Mary Mukira
                </span>
                
            </div>
            </>
        )
    }
}


