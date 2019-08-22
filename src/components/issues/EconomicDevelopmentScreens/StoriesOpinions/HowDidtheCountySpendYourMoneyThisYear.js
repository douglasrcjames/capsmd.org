import React, { Component } from 'react'

export default class HowDidtheCountySpendYourMoneyThisYear extends Component {
    render() {
        return (
            <div className="wrapper">
            <h1>How Did the County Spend Your Money This Year?</h1>
            <p>
                In May, the Montgomery County Council passed the budget for Fiscal Year 2020, which ends on June 30,
                2020. The approved budget was published two months later. So how did county leaders decide to spend your money?
                {/* <a 
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    &nbsp;published&nbsp;
                </a> */}
               
            </p>
            <p>
                First, let’s look at revenues. The county was constrained by slow revenue growth, especially in property
                taxes. Total revenues are projected to grow by 3.6%, which is slightly higher than average revenue
                growth since 2010 (3.0%) and about twice the rate of local annual price inflation since 2010 (1.6%).
                Stripping out growth in intergovernmental money – which is mostly state aid – revenue growth was just
                3.2%.
            </p>
            <div className="l-container">
                <h2 className="remove-pipe-spacing">Revenues by Source, FY19-20</h2>
                <p>In millions.</p>
                <div className="overflow-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Revenue</th>
                                <th>FY19 Approved</th>
                                <th>FY20 Approved</th>
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Property Taxes</td>
                                <td>1,808.3</td>
                                <td>1,836.8</td>
                                <td>1.6%</td>
                            </tr>
                            <tr>
                                <td>Income Taxes</td>
                                <td>1,585.2</td>
                                <td>1,640.3</td>
                                <td>3.5%</td>
                            </tr>
                            <tr>
                                <td>Intergovernmental</td>
                                <td>1,151</td>
                                <td>1,210</td>
                                <td>5.1%</td>
                            </tr>
                            <tr>
                                <td>Other Revenue</td>
                                <td>1,099.7</td>
                                <td>1,157.8</td>
                                <td>5.3%</td>
                            </tr>
                            <tr>
                                <td className="red">Total</td>
                                <td className="red">5,644.2</td>
                                <td className="red">5,844.9</td>
                                <td className="red">3.6%</td>
                            </tr>
                            <tr>
                                <td>Total excluding Intergovernmental</td>
                                <td>4,493.2</td>
                                <td>4,634.9</td>
                                <td>3.2%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>
                Now let’s look at how the revenue was spent by major governmental function. Spending for MCPS is
                shown in three categories: local money (the county’s contribution), non-local money (mostly state aid)
                and total. Spending for Montgomery College is shown in four categories: tuition and fees paid by
                students, local money (the county’s contribution), non-local money (mostly state aid) and total.  
            </p>
            <div className="l-container">
                <h2 className="remove-pipe-spacing">County Operating Budgets by Agency and Department, FY19-20</h2>
                <p>In millions.</p>
                <div className="overflow-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Dept./Agency</th>
                                <th>FY19 Approved</th>
                                <th>FY20 Approved</th>
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Recreation</td>
                                <td>38.8</td>
                                <td>44.9</td>
                                <td>15.7%</td>
                            </tr>
                            <tr>
                                <td>Housing</td>
                                <td>51.6</td>
                                <td>58.8</td>
                                <td>14.0%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Non-Local Money)</td>
                                <td className="purple">887.8</td>
                                <td className="purple">951.1</td>
                                <td className="purple">7.1%</td>
                            </tr>
                            <tr>
                                <td>Finance</td>
                                <td>14.5</td>
                                <td>15.5</td>
                                <td>7.1%</td>
                            </tr>
                            <tr>
                                <td>County Council</td>
                                <td>11.6</td>
                                <td>12.4</td>
                                <td>6.6%</td>
                            </tr>
                            <tr>
                                <td>Correction</td>
                                <td>66.3</td>
                                <td>70.6</td>
                                <td>6.5%</td>
                            </tr>
                            <tr>
                                <td>General Services/Procurement</td>
                                <td>34.4</td>
                                <td>36.5</td>
                                <td>6.1%</td>
                            </tr>
                            <tr>
                                <td>Police</td>
                                <td>280.0</td>
                                <td>295.3</td>
                                <td>5.5%</td>
                            </tr>
                            <tr>
                                <td>Solid Waste Services</td>
                                <td>110.0</td>
                                <td>115.7</td>
                                <td>5.3%</td>
                            </tr>
                            <tr>
                                <td>Sheriff</td>
                                <td>24.2</td>
                                <td>25.4</td>
                                <td>5.1%</td>
                            </tr>
                            <tr>
                                <td>Circuit Court</td>
                                <td>14.6</td>
                                <td>15.3</td>
                                <td>4.5%</td>
                            </tr>
                            <tr>
                                <td>Permitting Services</td>  
                                <td>40.2</td>
                                <td>41.9</td>
                                <td>4.1%</td>
                            </tr>
                            <tr>
                                <td>Environmental Protection</td>
                                <td>30.7</td>
                                <td>32.0</td>
                                <td>4.0%</td>
                            </tr>
                            <tr>
                                <td>Technology Services</td>
                                <td>42.2</td>
                                <td>43.9</td>
                                <td>4.0%</td>
                            </tr>
                            <tr>
                                <td>Transportation</td>
                                <td>217.4</td>
                                <td>226.2</td>
                                <td>4.0%</td>
                            </tr>
                            <tr>
                                <td>State's Attorney</td> 
                                <td>18.1</td>
                                <td>18.8</td>
                                <td>4.0%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Total)</td>
                                <td className="purple">2,596.4</td>
                                <td className="purple">2,680.6</td>
                                <td className="purple">3.2%</td>
                            </tr>
                            <tr>
                                <td className="red">All Agencies</td>
                                <td className="red">5,580.9</td>
                                <td className="red">5,761.7</td>
                                <td className="red">3.2%</td>
                            </tr>
                            <tr>
                                <td>Park and Planning</td> 
                                <td>153.2</td>
                                <td>158.0</td>
                                <td>3.1%</td>
                            </tr>
                            <tr>
                                <td>Health and Human Services</td>
                                <td>319.2</td>
                                <td>327.9</td>
                                <td>2.7%</td>
                            </tr>
                            <tr>
                                <td>Fire and Rescue</td>
                                <td>218.0</td> 
                                <td>223.3</td>
                                <td>2.4%</td>
                            </tr>
                            <tr>
                                <td>Debt Service</td>
                                <td>429.1</td>
                                <td>439.2</td>
                                <td>2.4%</td>
                            </tr>
                            <tr>
                                <td>County Executive</td>
                                <td>5.8</td>
                                <td>5.9</td>
                                <td>2.0%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Local Money)</td> 
                                <td className="purple">1,708.6</td>
                                <td className="purple">1,729.5</td>
                                <td className="purple">1.2%</td>
                            </tr>
                            <tr>
                                <td>County Cable TV</td>
                                <td>16.2</td>
                                <td>16.4</td>
                                <td>1.1%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Non-Local Money)</td>
                                <td className="green">66.2</td>
                                <td className="green">66.7</td>
                                <td className="green">0.8%</td>
                            </tr>
                            <tr>
                                <td>Libraries</td>
                                <td>42.9</td>
                                <td>43.1</td>
                                <td>0.5%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Local Money)</td>
                                <td className="green">154.9</td>
                                <td className="green">154.7</td>
                                <td className="green">-0.1%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Total)</td>
                                <td className="green">316.0</td>
                                <td className="green">314.7</td>
                                <td className="green">-0.4%</td>
                            </tr>
                            <tr>
                                <td>Utilities</td>
                                <td>26.2</td>
                                <td>26.0</td>
                                <td>-1.0%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Tuition and Fees)</td>  
                                <td className="green">95.0</td>
                                <td className="green">93.3</td>
                                <td className="green">-1.8%</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
               
            </div>
            <p>
                The county gave its largest increases to the departments of Recreation and Housing and Community
                Affairs. Total funding for MCPS rose about the same rate as the rest of the government, but that’s
                because state aid went up by 7% while local money for MCPS rose by just 1%. Montgomery College was
                the only large agency to see a funding decrease as only non-local money (primarily state aid) went up.
            </p>
            <p>
                Now let’s look at funding increases by department and agency over the last ten years: Fiscal Year 2010
                through Fiscal Year 2020. FY10 was the peak year of government spending before the Great Recession
                fully impacted the county budget. Therefore, the following table shows the effects of county decision-
                making over a full business cycle.
            </p>
            <div className="l-container">
                <h2 className="remove-pipe-spacing">County Operating Budgets by Agency and Department, FY10-20</h2>
                <p>In millions.</p>
                <div className="overflow-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Dept./Agency</th>
                                <th>FY10 Approved</th>
                                <th>FY20 Approved</th>
                                <th>%</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Environmental Protection</td>
                                <td>11.3</td>
                                <td>32.0</td>
                                <td>183.5%</td>
                            </tr>
                            <tr>
                                <td>Debt Service</td>
                                <td>237.4</td>
                                <td>439.2</td>
                                <td>85.0%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Non-Local Money)</td>
                                <td className="purple">530.8</td>
                                <td className="purple">951.1</td>
                                <td className="purple">79.2%</td>
                            </tr>
                            <tr>
                                <td>Finance</td>
                                <td>8.9</td>
                                <td>15.5</td>
                                <td>74.7%</td>
                            </tr>
                            <tr>
                                <td>Recreation</td>
                                <td>27.2</td>
                                <td>44.9</td>
                                <td>64.8%</td>
                            </tr>
                            <tr>
                                <td>Permitting Services</td>
                                <td>26.1</td>
                                <td>41.9</td>
                                <td>60.6%</td>
                            </tr>
                            <tr>
                                <td>Technology Services</td>
                                <td>27.7</td>   
                                <td>43.9</td>      
                                <td>58.5%</td>      
                            </tr>
                            <tr>
                                <td>County Cable TV</td>
                                <td>10.9</td>
                                <td>16.4</td>
                                <td>50.3%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Non-Local Money)</td>
                                <td className="green">44.6</td>
                                <td className="green">66.7</td>
                                <td className="green">49.6%</td>
                            </tr>
                            <tr>
                                <td>State's Attorney</td>
                                <td>12.8</td>
                                <td>18.8</td>
                                <td>46.8%</td>
                            </tr>
                            <tr>
                                <td>County Council</td>
                                <td>9.1</td>
                                <td>12.4</td>
                                <td>36.5%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Local Money)</td>
                                <td className="green">114.9</td>
                                <td className="green">154.7</td>
                                <td className="green">34.7%</td>
                            </tr>
                            <tr>
                                <td className="red">All Agencies</td>
                                <td className="red">4,333.0</td>
                                <td className="red">5,761.7</td>
                                <td className="red">33.0%</td>
                            </tr>
                            <tr>
                                <td>Park and Planning</td>
                                <td>123.7</td>
                                <td>158.0</td>
                                <td>27.8%</td>
                            </tr>
                            <tr>
                                <td>Health and Human Services</td>
                                <td>256.7</td>
                                <td>327.9</td>
                                <td>27.7%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Total)</td>
                                <td className="green">247.0</td>
                                <td className="green">314.7</td>
                                <td className="green">27.4%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Total)</td>
                                <td className="purple">2,104.6</td>
                                <td className="purple">2,680.6</td>
                                <td className="purple">27.4%</td> 
                            </tr>
                            <tr>
                                <td>Police</td>
                                <td>232.0</td>
                                <td>295.3</td>
                                <td>27.3%</td>
                            </tr>
                            <tr>
                                <td>Circuit Court</td>
                                <td>12.3</td>
                                <td>15.3</td>
                                <td>23.8%</td>
                            </tr>
                            <tr>
                                <td>Libraries</td>
                                <td>35.5</td>
                                <td>43.1</td>
                                <td>21.5%</td>
                            </tr>
                            <tr>
                                <td>Solid Waste Services</td>
                                <td>97.0</td>
                                <td>115.7</td>
                                <td>19.3%</td>
                            </tr>
                            <tr>   
                                <td>Sheriff</td>
                                <td>21.7</td>
                                <td>25.4</td>
                                <td>16.8%</td>
                            </tr>
                            <tr>
                                <td>Fire and Rescue</td>
                                <td>197.2</td>
                                <td>223.3</td>
                                <td>13.2%</td>
                            </tr>
                            <tr>
                                <td>Housing</td>
                                <td>51.9</td>
                                <td>58.8</td>
                                <td>13.1%</td>
                            </tr>
                            <tr>
                                <td>General Services/Procurement</td>
                                <td>32.7</td>
                                <td>36.5</td>
                                <td>11.8%</td>
                            </tr>
                            <tr>
                                <td className="purple">MCPS (Local Money)</td>
                                <td className="purple">1,573.8</td>
                                <td className="purple">1,729.5</td>
                                <td className="purple">9.9%</td>
                                
                            </tr>
                            <tr>
                                <td>Correction</td>
                                <td>65.8</td>
                                <td>70.6</td>
                                <td>7.3%</td>
                            </tr>
                            <tr>
                                <td className="green">Montgomery College (Tuition and Fees)</td>
                                <td className="green">87.5</td>
                                <td className="green">93.3</td>
                                <td className="green">6.5%</td>
                            </tr>
                            <tr>
                                <td>Utilities</td>
                                <td>25.7</td>
                                <td>26.0</td>
                                <td>1.0%</td>
                            </tr>
                            <tr>
                                <td>Transportation</td>
                                <td>235.4</td>
                                <td>226.2</td>
                                <td>-3.9%</td>
                            </tr>
                            <tr>
                                <td>County Executive</td>
                                <td>6.3</td>
                                <td>5.9</td>
                                <td>-6.7%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>
                A few notes. First, environmental protection, permitting services and county cable TV have funding
                sources that are outside the county’s charter limit on property taxes – the water quality protection
                charge, fees and charges on cable subscriber bills, respectively. Second, state aid for MCPS and
                Montgomery College has been growing much more rapidly than local dollars for those institutions.
                That’s despite the 9% property tax hike in FY17, which was marketed as being for education. Third,
                spending on fire and rescue services has lagged overall spending despite the 
                <a 
                    href="https://www.washingtonpost.com/local/md-politics/ambulance-fee-to-stay-in-montgomery-county/2012/08/13/ba8516d0-e583-11e1-936a-b801f1abab19_story.html?noredirect=on"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    &nbsp;approval of an ambulance fee in FY13,&nbsp;
                </a>
                suggesting that that money has been supplanted. Fourth, the primary reason why spending
                on the County Executive’s office has declined is that the Leggett administration 
                <a 
                    href="https://www.montgomerycountymd.gov/OMB/Resources/Files/omb/pdfs/fy12/psp_pdf/cex.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    &nbsp;shifted some of its positions to other offices in FY12.&nbsp;
                </a>
            </p>
            <p>
                Finally, here is a contrast between education, transportation and everything else. Money spent on
                education and transportation is fundamentally an investment resulting in returns on human capital and
                physical infrastructure. Because the county spends billions on education and transportation every year,
                that spending is one of the most potent ways in which it can affect the local economy.
            </p>
            <p>
                The table below contrasts local-dollar spending on education and transportation (the county does not
                control state and federal aid) with spending on everything else in both the most recent year and across
                the last ten years. It’s obvious that the county is not strategically concentrating its resources on
                investing in education and transportation, thereby forfeiting a real opportunity to increase our
                economic competitiveness.
            </p>
            <div className="l-container">
                <h2 className="remove-pipe-spacing">Education and Transportation vs Everything Else, FY10-20</h2>
                <p>In millions.</p>
                <div className="overflow-div">
                    <table>
                        <thead>
                            <tr>
                                <th>Dept./Agency</th>
                                <th>FY10 Actual</th>
                                <th>FY19 Approved</th>
                                <th>FY20 Approved</th>
                                <th>FY19-20</th>
                                <th>FY10-20</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>MCPS (Local Money)</td>
                                <td>1,573.8</td>
                                <td>1,708.6</td>
                                <td>1,729.5</td>
                                <td>1.2%</td>
                                <td>9.9%</td>
                            </tr>
                            <tr>
                                <td>Montgomery College (Local Money)</td>
                                <td>114.9</td>
                                <td>154.9</td>
                                <td>154.7</td>
                                <td>-0.1%</td>
                                <td>34.7%</td>
                            </tr>
                            <tr>
                                <td>Transportation (Local Money)</td>
                                <td>184.1</td>
                                <td>163.6</td>
                                <td>170.9</td>
                                <td>4.5%</td>
                                <td>-7.2%</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td>1,872.7</td>
                                <td>2,027.1</td>
                                <td>2,055.1</td>
                                <td>1.4%</td>
                                <td>9.7%</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>             
                                <td>Everything Else</td>
                                <td>1,745.9</td>
                                <td>2,451.0</td>
                                <td>2,540.2</td>
                                <td>3.6%</td>
                                <td>45.5%</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                
                <p>Note: Everything Else equals all agency spending minus total money for MCPS, transportation and the college.</p>
            </div>
            <u className="blue">Written by Adam Pagnucco</u>
            </div>
        )
    }
}
