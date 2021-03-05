import React, { Component } from 'react'
import Background from '../../../../assets/images/carousel/revenue.jpg';

export default class DoesCountyNeedMoreRevenue extends Component {
    
    render() {
        var topBgImageStyle = {
            width: "100%",
            height: "200px",
            backgroundImage: `url(${Background})`,
            backgroundPosition: "50% 55%", // change me around to move up and down!
            backgroundSize: "cover",
            marginTop: "-20px",
          };
        return (
            <>
            <div style ={ topBgImageStyle }></div>
            <div className="wrapper-w-img">
                
                <h1>Does the County Government Need More Revenue?</h1>
                <span className="grey">January 29, 2019</span>
                <p>
                    Here is a statement often heard from Montgomery County elected officials: we need more revenue to
                    spend on worthy priorities. County officials said that in 2016, when they raised property taxes by 8.7%
                    to finance what they called an 
                    <a 
                        href="http://www.theseventhstate.com/?p=6836"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;“Education First” budget.&nbsp;
                    </a>
                    They said it again that same year when they
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/real-estate/county-council-approves-recordation-tax-increases/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;raised recordation taxes for school construction.&nbsp;
                    </a>  
                    They said it a year later when they 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/politics/council-members-exploring-soda-tax-in-montgomery-county/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;announced they were exploring passage of a soda tax.&nbsp;
                    </a>  
                    Council Member Evan Glass said it to 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/government/county-council-member-affirms-100-million-estimate-from-tax-on-new-construction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;justify his bill taxing teardowns.&nbsp;
                    </a>  
                    And they say it whenever they try to justify the county’s liquor monopoly, which earns
                    money for the county budget.
                </p>

                <p>
                    There are two ways to get money for a priority. One way is to raise revenue. That is common here; the
                    county has had 
                    <a 
                        href="https://capsmd.org/issues/economic-development/facts/slow-growth-budget"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;nine major tax hikes since Fiscal Year 2003&nbsp;
                    </a> 
                    and countless fee increases since then.
                    Another way is to cut spending and use the savings to pay for something else.
                </p>

                <p>
                    Does that ever happen in Montgomery County?
                </p>

                <p>
                    In examining that question, let’s remember how the county operating budget works. Under the charter,
                    the county executive develops a recommended budget and releases it on March 15. The county council
                    must then make final decisions on the budget by June 1. (In practice, the council is usually done with its
                    budget work by mid-May.) The charter permits the council to “add to, delete from, increase or decrease
                    any appropriation item” in the budget. There are important constraints set out in state law, which limits
                    the revenue sources available to the county and also mandates certain levels of spending for the schools
                    and the college. There are also some forms of spending that are very difficult if not functionally
                    impossible to cut, notably debt service. That said, the council has broad discretion to alter much of the
                    executive’s recommended budget, including cutting it and using the money for other purposes.
                </p>

                <p>
                    The council’s vehicle for changing the executive’s budget is the reconciliation list, which is a ledger of
                    subtractions and additions that is updated several times during the council’s part of the budget process.
                    At the end of the process, the budget must be balanced, so it’s optimal for the subtractions to equal the
                    additions. If not, the difference must be made up in other ways.
                </p>

                <p>
                    The table below shows the subtractions made by the council to the executive’s recommended budget
                    over the past 10 fiscal years. (The subtractions do not include raids on benefit funds, shifts or state aid
                    cuts.) It also shows the final additions made by the council, the ultimate tax-supported budget and the
                    percentage of the budget that was cut. The tax-supported budget comprises most of the budget, but
                    there are many parts of the budget supported by grants, enterprise fees and other non-tax sources.
                    (Those non-tax sources add up to 
                    <a 
                        href="https://www.bls.gov/data/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;$729 million&nbsp;
                    </a>   
                    in the Fiscal Year 2020 approved budget.)
                </p>

                <div className="l-container">
                    <h2 className="remove-pipe-spacing">County Council Changes to Tax Supported Budgets</h2>
                    <p>Source: Reconciliation lists, approved budgets</p>
                    <div className="overflow-div">
                        <table>
                            <thead>
                                <tr>
                                    <th>Fiscal Year</th>
                                    <th>Spending Reductions</th>
                                    <th>Spending Additions</th>
                                    <th>Approved Budget (Tax Supported)</th>
                                    <th>Reduction % of Budget</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2011</td>
                                    <td>21,727,535</td>
                                    <td>15,043,450</td>
                                    <td>3,655,857,722</td>
                                    <td>0.59%</td>
                                </tr>
                                <tr>
                                    <td>2012</td>
                                    <td>60,557,834</td>
                                    <td>24,751,040</td>
                                    <td>3,784,973,697</td>
                                    <td>1.60%</td>
                                </tr>
                                <tr>
                                    <td>2013</td>
                                    <td>1,088,313</td>
                                    <td>11,255,447</td>
                                    <td>4,020,477,004</td>
                                    <td>0.03%</td>
                                </tr>
                                <tr>
                                    <td>2014</td>
                                    <td>3,097,865</td>
                                    <td>12,253,692</td>
                                    <td>4,194,797,973</td>
                                    <td>0.07%</td>
                                </tr>
                                <tr>
                                    <td>2015</td>
                                    <td>1,680,000</td>
                                    <td>21,177,229</td>
                                    <td>4,356,490,386</td>
                                    <td>0.04%</td>
                                </tr>
                                <tr>
                                    <td>2016</td>
                                    <td>2,346,123</td>
                                    <td>17,489,236</td>
                                    <td>4,420,228,700</td>
                                    <td>0.05%</td>
                                </tr>
                                <tr>
                                    <td>2017</td>
                                    <td>8,138,939</td>
                                    <td>25,134,731</td>
                                    <td>4,643,812,692</td>
                                    <td>0.18%</td>
                                </tr>
                                <tr>
                                    <td>2018</td>
                                    <td>4,973,150</td>
                                    <td>19,454,113</td>
                                    <td>4,775,757,961</td>
                                    <td>0.10%</td>
                                </tr>
                                <tr>
                                    <td>2019</td>
                                    <td>1,933,109</td>
                                    <td>14,858,234</td>
                                    <td>4,885,128,553</td>
                                    <td>0.04%</td>
                                </tr>
                                <tr>
                                    <td>2020</td>
                                    <td>9,583,012</td>
                                    <td>16,590,556</td>
                                    <td>5,032,976,398</td>
                                    <td>0.19%</td>
                                </tr>
                                <tr className="blue">
                                    <td>Avg.</td>
                                    <td>11,512,588</td>
                                    <td>17,800,773</td>
                                    <td></td>
                                    <td>0.29%</td>
                                </tr>
                                <tr className="blue">
                                    <td>'13-'20</td>
                                    <td>4,105,064</td>
                                    <td>17,276,655</td>
                                    <td></td>
                                    <td>0.09%</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>
                            Spending reductions and additions apply to tax supported funds as defined for spending affordability.
                            Spending reductions do not include raids on benefit funds, shifts or state aid cuts.
                        </p>
                    </div>
                </div>
                <p>
                    In Fiscal Years 2011 and 2012, the council’s subtractions were greater than its additions to the
                    executive’s recommended budget. Those two years were the worst fiscal years of the Great Recession,
                    when revenues were written down multiple times and the county almost lost its bond rating. The
                    county implemented numerous tough budget measures back then that were unthinkable in normal
                    times, like abrogating collective bargaining agreements, requiring more employee contributions to
                    benefits, furloughs and violating state requirements for school spending. And yet, even during the worst
                    year – FY12 – the council trimmed just 1.6% of the executive’s budget. Admittedly, in those years, the
                    executive’s budgets were already draconian.
                </p>

                <p>
                    Since then, the council’s cuts to the executive’s budget have ranged from $1.1 million to $9.6 million per
                    year, or 0.03% to 0.19% of the tax supported budget annually. In the two biggest years of cuts – FY17
                    and FY20 – the council trimmed raises in the county unions’ collective bargaining agreements. At the
                    same time, the council’s spending additions averaged about four times the amount of its cuts. The
                    difference – an average of $13 million a year – is 
                    <a 
                        href="http://www.theseventhstate.com/?p=8632"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;typically made up by going into reserves, cash originally
                        intended for the capital budget, retiree health care funds, other benefit funds, snow removal money or
                        other one-time fixes.&nbsp;
                    </a>   
                    These kinds of band-aid budget practices create pressure for future tax hikes.
                </p>

                <p>
                    It was not always this way. From the 1990s through the early 2000s, council merit analysts were
                    directed to find suggested cuts in the vicinity of 2% to departmental budgets each year. The council
                    could accept them or reject them, but at least the council considered them. The cuts were unpopular
                    with the executive branch, relevant interest groups and eventually with some council members
                    themselves. They began to grumble at the analysts for even suggesting cuts and at least one analyst
                    was publicly excoriated for proposing them. By the mid-2000s, this system was dead. It was not revived
                    after the meat axe years of the Great Recession.
                </p>

                <p>
                    Why is it so hard for the council to make meaningful cuts to the executive’s budget? Here’s the thing:
                    nothing ever got into the budget by accident. Every single thing is in there because someone wanted it
                    there. And once it gets in there, it’s very difficult to get it out. That’s because a constituency arises to
                    protect it even when the original author of the budget item is long gone. And every year, new things get
                    added. The cycle continues until a recession comes and the county is forced to exercise restraint or lose
                    its bond rating. But then the recession ends and old practices quickly return.
                </p>

                <p>
                    It doesn’t have to be this difficult. Let’s recognize that the county’s revenues excluding state aid 
                    <a 
                        href="https://capsmd.org/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;often grow by more than $100 million a year <i>even in years without tax hikes.</i>&nbsp;
                    </a>   
                    In an average year, if the council
                    were to allow $80 million of these increases in the executive’s budget to stand and redirect $20 million,
                    that’s a nice bit of money to finance its priorities. (For the sake of comparison, Glass 
                    <a 
                        href="https://bethesdamagazine.com/bethesda-beat/government/county-council-member-affirms-100-million-estimate-from-tax-on-new-construction/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;claims his teardown tax bill would raise $4.3 million a year for affordable housing.)&nbsp;
                    </a>  
                    
                </p>

                <p>
                    So while the council does reallocate money in the budget, it’s rarely by enough to make a difference
                    unless a huge recession is underway. That’s why the conversation is always about new revenues and
                    rarely about prioritizing some forms of spending over others.
                </p>

                <span className="blue">
                    Written by Adam Pagnucco
                </span>
                
            </div>
            </>
        )
    }
}