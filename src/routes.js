import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import News from "./components/news";
import BusinessIncubator from "./components/news/BusinessIncubator";
import ContactUs from "./components/ContactUs";

import EconomicDevelopment from "./components/issues/EconomicDevelopmentScreens/index";
import JobMarketStagnant from "./components/issues/EconomicDevelopmentScreens/Facts/JobMarketStagnant";
import LagsRegionInJobCreation from "./components/issues/EconomicDevelopmentScreens/Facts/LagsRegionInJobCreation";
import LagsRegionInBusiness from "./components/issues/EconomicDevelopmentScreens/Facts/LagsRegionInBusiness";
import InMigrantsMakeLess from "./components/issues/EconomicDevelopmentScreens/Facts/InMigrantsMakeLess";
import LosingTaxpayerIncome from "./components/issues/EconomicDevelopmentScreens/Facts/LosingTaxpayerIncome";
import SlowGrowthBudget from "./components/issues/EconomicDevelopmentScreens/Facts/SlowGrowthBudget";
import NotInvestingInSchools from "./components/issues/EconomicDevelopmentScreens/Facts/NotInvestingInSchools";

import Education from "./components/issues/EducationScreens/index";
import PerPupilFunding from "./components/issues/EducationScreens/Facts/PerPupilFunding";
import PublicSchoolNeeds from "./components/issues/EducationScreens/Facts/PublicSchoolNeeds";

import Infrastructure from "./components/issues/InfrastructureScreens/index";
import HousingConstruction from "./components/issues/InfrastructureScreens/Facts/HousingConstruction";
import TrailsInNewHousing from "./components/issues/InfrastructureScreens/Facts/TrailsInNewHousing";
import RoadsClogged from "./components/issues/InfrastructureScreens/Facts/RoadsClogged";
import TransportationProjects from "./components/issues/InfrastructureScreens/Facts/TransportationProjects";
import SilverSpringHousing from "./components/issues/InfrastructureScreens/StoriesOpinions/SilverSpringHousing";


import More from "./components/issues/MoreScreens/index";
import NewspapersDisappearing from "./components/issues/MoreScreens/Facts/NewspapersDisappearing";
import ProposalsWorthConsidering from "./components/issues/MoreScreens/Solutions/ProposalsWorthConsidering";
import VotingBills from "./components/issues/MoreScreens/Legislation/VotingBills";
import BeginnersGuideToBudget from "./components/issues/MoreScreens/StoriesOpinions/BeginnersGuideToBudget";

const Page404 = ({ location }) => (
  <div className="m-padding">
    {/* <img src={error404} alt="error404" className="large responsive center" /> */}
    <p>
      Uh oh... doesn't look like this page exists. Check the web address and try
      again.
    </p>
  </div>
);

export class Routes extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={AboutUs} />

        <Route exact path="/news" component={News} />
        <Route exact path="/news/business-incubator" component={BusinessIncubator} />

        <Route exact path="/contact-us" component={ContactUs} />

        <Route exact path="/issues/economic-development" component={EconomicDevelopment} />
        <Route exact path="/issues/economic-development/facts/job-market-stagnant" component={JobMarketStagnant} />
        <Route exact path="/issues/economic-development/facts/lags-region-in-job-creation" component={LagsRegionInJobCreation} />
        <Route exact path="/issues/economic-development/facts/lags-region-in-business" component={LagsRegionInBusiness} />
        <Route exact path="/issues/economic-development/facts/in-migrants-make-less" component={InMigrantsMakeLess} />
        <Route exact path="/issues/economic-development/facts/losing-taxpayer-income" component={LosingTaxpayerIncome} />
        <Route exact path="/issues/economic-development/facts/slow-growth-budget" component={SlowGrowthBudget} />
        <Route exact path="/issues/economic-development/facts/not-investing-in-schools" component={NotInvestingInSchools} />

        <Route exact path="/issues/education" component={Education} />
        <Route exact path="/issues/education/facts/per-pupil-funding" component={PerPupilFunding} />
        <Route exact path="/issues/education/facts/public-school-needs" component={PublicSchoolNeeds} />

        <Route exact path="/issues/infrastructure" component={Infrastructure} />
        <Route exact path="/issues/infrastructure/facts/housing-construction" component={HousingConstruction} />
        <Route exact path="/issues/infrastructure/facts/trails-in-new-housing" component={TrailsInNewHousing} />
        <Route exact path="/issues/infrastructure/facts/roads-clogged" component={RoadsClogged} />
        <Route exact path="/issues/infrastructure/facts/transportation-projects" component={TransportationProjects} />
        <Route exact path="/issues/infrastructure/stories-opinions/silver-spring-housing" component={SilverSpringHousing} />

        <Route exact path="/issues/more" component={More} />
        <Route exact path="/issues/more/facts/newspapers-disappearing" component={NewspapersDisappearing} />
        <Route exact path="/issues/more/stories-opinions/beginners-guide-to-budget" component={BeginnersGuideToBudget} />
        <Route exact path="/issues/more/solutions/proposals-worth-considering" component={ProposalsWorthConsidering} />
        <Route exact path="/issues/more/legislation/voting-bills" component={VotingBills} />
        
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
