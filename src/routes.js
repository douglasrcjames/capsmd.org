import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import ContactUs from "./components/ContactUs";

import EconomicDevelopment from "./components/issues/EconomicDevelopmentScreens/index";
import JobMarketStagnant from "./components/issues/EconomicDevelopmentScreens/Facts/JobMarketStagnant";
import LagsRegionInJobCreation from "./components/issues/EconomicDevelopmentScreens/Facts/LagsRegionInJobCreation";

import Education from "./components/issues/EducationScreens/index";

import Infrastructure from "./components/issues/InfrastructureScreens/index";

import More from "./components/issues/MoreScreens/index";
import NewspapersDisappearing from "./components/issues/MoreScreens/Facts/NewspapersDisappearing";
import ProposalsWorthConsidering from "./components/issues/MoreScreens/Solutions/ProposalsWorthConsidering";
import VotingBills from "./components/issues/MoreScreens/Legislation/VotingBills";

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
        <Route exact path="/contact-us" component={ContactUs} />

        <Route exact path="/issues/economic-development" component={EconomicDevelopment} />
        <Route exact path="/issues/economic-development/facts/job-market-stagnant" component={JobMarketStagnant} />
        <Route exact path="/issues/economic-development/facts/lags-region-in-job-creation" component={LagsRegionInJobCreation} />

        <Route exact path="/issues/education" component={Education} />

        <Route exact path="/issues/infrastructure" component={Infrastructure} />

        <Route exact path="/issues/more" component={More} />
        <Route exact path="/issues/more/facts/newspapers-disappearing" component={NewspapersDisappearing} />
        <Route exact path="/issues/more/stories-opinions/beginners-guide-to-budget" component={NewspapersDisappearing} />
        <Route exact path="/issues/more/solutions/proposals-worth-considering" component={ProposalsWorthConsidering} />
        <Route exact path="/issues/more/legislation/voting-bills" component={VotingBills} />
        
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
