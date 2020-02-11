import React, { Component } from 'react'
import Background from '../../../../assets/images/carousel/brown-green-field.jpg';
import {Link} from 'react-router-dom';
export default class PotomacDivide extends Component {
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
                <h1>The Potomac Divide</h1>
                <p>
                    More than a decade ago, the Great Recession began to hit the Washington region, devastating the
                    economy and government budgets. Since then, the region has recovered – although at a lower growth
                    rate than before. And the recovery has been uneven. The District of Columbia has resumed its surge
                    that began in the 1990s. In the rest of the region, the Potomac River has been a dividing line, with
                    Northern Virginia outpacing Suburban Maryland on most measures.
                </p>

                <p>
                    This series compares D.C., the Maryland suburbs and the Virginia suburbs as well as major jurisdictions
                    in the 
                    <a 
                        href="https://en.wikipedia.org/wiki/Washington_metropolitan_area"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        &nbsp;Washington–Arlington–Alexandria, DC–VA–MD–WV metropolitan statistical area&nbsp;
                    </a>
                    on the following twelve economic measures.
                </p>
               
                <ul>
                    <Link to="/issues/economic-development/facts/potomac-divide/population-growth"><li>Population Growth, 2007-17</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/total-employment-growth"><li>Total Employment Growth, 2008-18</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/private-employment-growth"><li>Private Employment Growth, 2008-18</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/government-employment-growth"><li>Government Employment Growth, 2008-18</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/establishment-growth"><li>Number of Establishments Growth, 2008-18</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/wages-salaries-paid-growth"><li>Growth in Total Wages and Salaries Paid, 2007-17</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/compensation-growth"><li>Growth in Total Compensation Paid to Employees, 2007-17</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/mean-household-income-growth"><li>Growth in Mean Household Income, 2005-09 vs 2013-17</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/mean-household-income"><li>Mean Household Income, 2013-17</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/mean-compensation-per-job"><li>Average Compensation per Job, 2017</li></Link>
                    <Link to="/issues/economic-development/facts/potomac-divide/unemployment-rate"><li>Unemployment Rate, 2018</li></Link>
                    <Link to="/issues/infrastructure/facts/potomac-divide/housing-units-permitted"><li>Housing Units Permitted per Thousand Residents, 2009-18</li></Link>
                </ul>
                
                
                <p>
                    Our sources are the U.S. Bureau of Labor Statistics, the U.S. Bureau of Economic Analysis and the U.S.
                    Census Bureau. How big is the Potomac Divide? Click on the links above to find out!
                </p>

                <span className="blue">
                    Written by Adam Pagnucco.
                </span>
                
            </div>
            </>
        )
    }
}
