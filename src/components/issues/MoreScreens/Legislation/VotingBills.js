import React, { Component } from 'react'
import { Link } from "react-router-dom";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data1 = [
  {
    name: '2001', "Private": 370125, "Govt.": 79756, "Total": 449881,
  },
  {
    name: '2002', "Private": 370283, "Govt.": 82969, "Total": 453252,
  },
  {
    name: '2003', "Private": 371210, "Govt.": 78636, "Total": 449846,
  },
  {
    name: '2004', "Private": 370862, "Govt.": 77821, "Total": 448683,
  },
  {
    name: '2005', "Private": 380864, "Govt.": 77945, "Total": 458809,
  },
  {
    name: '2006', "Private": 386626, "Govt.": 78250, "Total": 464876,
  },
  {
    name: '2007', "Private": 380492, "Govt.": 78895, "Total": 459387,
  },
  {
    name: '2008', "Private": 377149, "Govt.": 80587, "Total": 457736,
  },
  {
    name: '2009', "Private": 361112, "Govt.": 82073, "Total": 443185,
  },
  {
    name: '2010', "Private": 358479, "Govt.": 83408, "Total": 441887,
  },
  {
    name: '2011', "Private": 361207, "Govt.": 86031, "Total": 447238,
  },
  {
    name: '2012', "Private": 362623, "Govt.": 87873, "Total": 450496,
  },
  {
    name: '2013', "Private": 363188, "Govt.": 88681, "Total": 451869,
  },
  {
    name: '2014', "Private": 366240, "Govt.": 89580, "Total": 455820,
  },
  {
    name: '2015', "Private": 370323, "Govt.": 89344, "Total": 459667,
  },
];


export default class VotingBills extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Let’s Try Again on Three Good Voting Bills</h1>
        
        <p>The three General Assembly bills below would have made improvements to voting in Maryland.  None of them passed in the 2019 session but 
          hopefully they will pass next time.</p>

        <div className="l-container">
            <h4>Same-Day Party Affiliation in Early Voting</h4>
            <p>Suppose you’re an unaffiliated voter and you decide you want to vote for a candidate in a party primary. 
               If you change your voter registration to affiliate with a party 21 days or more before an election, you can do that.  
               But if it’s less than 21 days out, <a href="https://elections.maryland.gov/voter_registration/index.html">you’re out of luck</a>.  
               The Board of Elections will tell you that you have to wait until 
               the next election to affiliate with a party.</p>

               <p>
               We know there’s a demand by voters to change their registration information at the time of voting.  
               Right now, voters can newly register and change their address when they show up at early voting centers.  
               In the <a href="https://elections.maryland.gov/press_room/2018_stats/SameDayRegistration%20by%20County.pdf">2018 primary</a>, 
               801 voters statewide newly registered during early voting, with 209 of them doing so in Montgomery County.  
               Across the state, 2,024 people changed their addresses during early voting, with 345 doing so in Montgomery County.  
               Why not allow existing voters to change their party affiliation too?
               </p>

              <p><a href="http://mgaleg.maryland.gov/webmga/frmMain.aspx?pid=billpage&amp;stab=01&amp;id=sb0489&amp;tab=subject3&amp;ys=2019RS">SB489/HB530</a>, 
              sponsored by Senator Cheryl Kagan and Delegate 
              Lily Qi, would have allowed a voter who is not affiliated with a political party to appear in person at a 
              voting place and change party affiliation on an existing voter registration. This bill did not make it out of 
              committee in either the Senate or the House.</p>

            <h4>Vote-by-Mail Ballots</h4>
            <p><a href="http://mgaleg.maryland.gov/webmga/frmMain.aspx?pid=billpage&amp;stab=01&amp;id=sb0606&amp;tab=subject3&amp;ys=2019RS">SB606/HB322</a>, 
            sponsored by Senator Katie Fry Hester and Delegate Julie Palakovich Carr, required the State Board of Elections and the local boards of elections to 
            refer to absentee ballots as “vote-by-mail” ballots and absentee voting as “voting by mail” in all communications with voters and the general public.  
            This emulates the practice of California and Florida, both of which now call what used to be known as absentee ballots “voting by mail.”  The goal of 
            this legislation was to let voters know that they can vote by mail without having to provide an excuse to the board of elections.  
            Sadly, the Senate Education, Health and Environmental Affairs Committee killed the bill on a
            a <a href="http://mgaleg.maryland.gov/2019RS/votes_comm/sb0606_ehe.pdf">6-5 vote.</a></p>

            <h4>Pre-Paid Postage on Absentee Ballot Return Envelopes</h4>
            <p>
            If you vote on election day, all you have to do is show up.  There is no charge.  But if you want to vote with an absentee ballot, 
            you are told to use a stamp.  (Few voters know that the <a href="https://about.usps.com/postal-bulletin/2014/pb22391/html/cover_003.htm">U.S. Postal Service will 
            not return absentee ballots lacking postage to voters.) </a>
             So why should some voters vote for free while others are told to pay for stamps?  As detailed above, over 120,000 people used absentee 
             ballots statewide in the last general election.  But how many more people would have voted absentee if they had not been told to use stamps? 
              We may never know.  But Fairfax County held a focus group of young people in 2018 and found that 
              <a href="https://wtop.com/local/2018/09/why-college-students-dont-vote-absentee-they-dont-know-where-to-buy-a-postage-stamp/">many did not bother 
              to return absentee ballots </a>
              because of the hassle of finding and purchasing stamps.  California took action to fix this issue last year 
              <a href="https://www.latimes.com/politics/essential/la-pol-ca-essential-politics-may-2018-california-voters-won-t-have-to-pay-for-1531943863-htmlstory.html"> by 
              passing a new law requiring counties to prepay postage for absentee ballots.</a>
            </p>

            <p><a href="http://mgaleg.maryland.gov/webmga/frmMain.aspx?pid=billpage&amp;stab=01&amp;id=sb0343&amp;tab=subject3&amp;ys=2019RS">SB343/HB269</a>, 
            sponsored by Senator Cheryl Kagan and Delegate Kirill Reznik, required prepaid postage to be included on absentee 
              ballot return envelopes, for absentee ballots sent to voters by mail.  The bill passed the Senate on 
              a <a href="http://mgaleg.maryland.gov/2019RS/votes/Senate/0441.pdf">28-18 vote</a> but did not 
              receive a vote in the House Ways and Means Committee.</p>

            <p>Maryland has made a lot of progress in making voting easier in recent years, but we can get better. 
               We will be watching these bills and other positive voting bills next year.  Join us and hopefully they will pass!</p>
        </div>

        <p>We will be watching these bills and other good voting bills next year.  Join us and hopefully they will pass!</p>
        <u className="blue">Written by Adam Pagnucco</u>
       
        
      </div>
    )
  }
}
