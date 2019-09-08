import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import UnderConstruction from "./components/UnderConstruction";
import AboutUs from "./components/AboutUs";
import News from "./components/news";
import BusinessIncubator from "./components/news/BusinessIncubator";
import LetterFromChairman from "./components/news/LetterFromChairman";
import InauguralStudy from "./components/news/InauguralStudy";

import ContactUs from "./components/ContactUs";

import EconomicDevelopment from "./components/issues/EconomicDevelopmentScreens/index";
import JobMarketStagnant from "./components/issues/EconomicDevelopmentScreens/Facts/JobMarketStagnant";
import LagsRegionInJobCreation from "./components/issues/EconomicDevelopmentScreens/Facts/LagsRegionInJobCreation";
import LagsRegionInBusiness from "./components/issues/EconomicDevelopmentScreens/Facts/LagsRegionInBusiness";
import InMigrantsMakeLess from "./components/issues/EconomicDevelopmentScreens/Facts/InMigrantsMakeLess";
import LosingTaxpayerIncome from "./components/issues/EconomicDevelopmentScreens/Facts/LosingTaxpayerIncome";
import SlowGrowthBudget from "./components/issues/EconomicDevelopmentScreens/Facts/SlowGrowthBudget";
import NotInvestingInSchools from "./components/issues/EconomicDevelopmentScreens/Facts/NotInvestingInSchools";
import ProposalsWorthConsideringE from "./components/issues/EconomicDevelopmentScreens/Solutions/ProposalsWorthConsidering";
import HowisMoCoDoingJobsData2018 from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/HowisMoCoDoingJobsData2018";
import HowDidtheCountySpendYourMoneyThisYear from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/HowDidtheCountySpendYourMoneyThisYear";

import Education from "./components/issues/EducationScreens/index";
import PerPupilFunding from "./components/issues/EducationScreens/Facts/PerPupilFunding";
import PublicSchoolNeeds from "./components/issues/EducationScreens/Facts/PublicSchoolNeeds";
import ProposalsWorthConsideringED from "./components/issues/EducationScreens/Solutions/ProposalsWorthConsidering";
import GettingFairShareFromKirwan from "./components/issues/EducationScreens/StoriesOpinions/GettingFairShareFromKirwan";
import DoBetterKirwanFunding from "./components/issues/EducationScreens/StoriesOpinions/DoBetterKirwanFunding";
import AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools from "./components/issues/EducationScreens/Facts/AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools";

import Infrastructure from "./components/issues/InfrastructureScreens/index";
import HousingConstruction from "./components/issues/InfrastructureScreens/Facts/HousingConstruction";
import TrailsInNewHousing from "./components/issues/InfrastructureScreens/Facts/TrailsInNewHousing";
import RoadsClogged from "./components/issues/InfrastructureScreens/Facts/RoadsClogged";
import TransportationProjects from "./components/issues/InfrastructureScreens/Facts/TransportationProjects";
import I270ExpansioninWesternMaryland from "./components/issues/InfrastructureScreens/StoriesOpinions/I270ExpansioninWesternMaryland";
import PotholePathos from "./components/issues/InfrastructureScreens/StoriesOpinions/PotholePathos";
import SilverSpringHousing from "./components/issues/InfrastructureScreens/StoriesOpinions/SilverSpringHousing";
import HowToDoBRTProperly from "./components/issues/InfrastructureScreens/StoriesOpinions/HowToDoBRTProperly";
import ProposalsWorthConsideringI from "./components/issues/InfrastructureScreens/Solutions/ProposalsWorthConsidering";


import More from "./components/issues/MoreScreens/index";
import NewspapersDisappearing from "./components/issues/MoreScreens/Facts/NewspapersDisappearing";
import VotingBills from "./components/issues/MoreScreens/Legislation/VotingBills";
import BeginnersGuideToBudget from "./components/issues/MoreScreens/StoriesOpinions/BeginnersGuideToBudget";
import TestifyingMyConscience from "./components/issues/MoreScreens/StoriesOpinions/TestifyingMyConscience";
import CountyInFiveYearsPartOne from "./components/issues/MoreScreens/StoriesOpinions/CountyInFiveYearsPartOne";
import CountyInFiveYearsPartTwo from "./components/issues/MoreScreens/StoriesOpinions/CountyInFiveYearsPartTwo";
import ComplexitiesChildCareNutshell from "./components/issues/MoreScreens/StoriesOpinions/ComplexitiesChildCareNutshell";
import LifeThreateningProjectBust from "./components/issues/MoreScreens/StoriesOpinions/LifeThreateningProjectBust";

import ResidentReflections from "./components/issues/ResidentReflectionsScreens/index"
import MoCoBoardEducationConsidersRedrawingSchoolLines from "./components/issues/ResidentReflectionsScreens/MoCoBoardEducationConsidersRedrawingSchoolLines"
import DemandMentalHealthServicesExceedSupplyMoCoSchools from "./components/issues/ResidentReflectionsScreens/DemandMentalHealthServicesExceedSupplyMoCoSchools"
import MCPSTheNumbersBeyond from "./components/issues/ResidentReflectionsScreens/MCPSTheNumbersBeyond"
import LocalGovernmentHoldsKeyGunReform from "./components/issues/ResidentReflectionsScreens/LocalGovernmentHoldsKeyGunReform"

import withTracker from './components/WithTracker';

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
        <Route exact path="/" component={withTracker(Home)} />
        <Route exact path="/about-us" component={withTracker(AboutUs)} />

        <Route exact path="/news" component={withTracker(News)} />
        <Route exact path="/news/business-incubator" component={withTracker(BusinessIncubator)} />
        <Route exact path="/news/letter-from-chairman" component={withTracker(LetterFromChairman)} />
        <Route exact path="/news/inaugural-study" component={withTracker(InauguralStudy)} />

        <Route exact path="/contact-us" component={withTracker(ContactUs)} />
        <Route exact path="/find-legislators" component={UnderConstruction} />

        <Route exact path="/issues/economic-development" component={withTracker(EconomicDevelopment)} />
        <Route exact path="/issues/economic-development/facts/job-market-stagnant" component={JobMarketStagnant} />
        <Route exact path="/issues/economic-development/facts/lags-region-in-job-creation" component={LagsRegionInJobCreation} />
        <Route exact path="/issues/economic-development/facts/lags-region-in-business" component={LagsRegionInBusiness} />
        <Route exact path="/issues/economic-development/facts/in-migrants-make-less" component={InMigrantsMakeLess} />
        <Route exact path="/issues/economic-development/facts/losing-taxpayer-income" component={LosingTaxpayerIncome} />
        <Route exact path="/issues/economic-development/facts/slow-growth-budget" component={SlowGrowthBudget} />
        <Route exact path="/issues/economic-development/facts/not-investing-in-schools" component={NotInvestingInSchools} />
        <Route exact path="/issues/economic-development/solutions/proposals-worth-considering" component={ProposalsWorthConsideringED} />
        <Route exact path="/issues/economic-development/stories-opinions/how-is-moco-doing-jobs-data-2018" component={HowisMoCoDoingJobsData2018} />
        <Route exact path="/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year" component={HowDidtheCountySpendYourMoneyThisYear} />

        <Route exact path="/issues/education" component={withTracker(Education)} />
        <Route exact path="/issues/education/facts/per-pupil-funding" component={PerPupilFunding} />
        <Route exact path="/issues/education/facts/public-school-needs" component={PublicSchoolNeeds} />
        <Route exact path="/issues/education/solutions/proposals-worth-considering" component={ProposalsWorthConsideringE} />
        <Route exact path="/issues/education/stories-opinions/getting-fair-share-from-kirwan" component={GettingFairShareFromKirwan} />
        <Route exact path="/issues/education/stories-opinions/do-better-kirwan-funding" component={DoBetterKirwanFunding} />
        <Route exact 
          path="/issues/education/stories-opinions/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools" 
          component={AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools} />

        <Route exact path="/issues/infrastructure" component={withTracker(Infrastructure)} />
        <Route exact path="/issues/infrastructure/facts/housing-construction" component={HousingConstruction} />
        <Route exact path="/issues/infrastructure/facts/trails-in-new-housing" component={TrailsInNewHousing} />
        <Route exact path="/issues/infrastructure/facts/roads-clogged" component={RoadsClogged} />
        <Route exact path="/issues/infrastructure/facts/transportation-projects" component={TransportationProjects} />
        <Route exact path="/issues/infrastructure/stories-opinions/I-270-Expansion-in-Western-Maryland" component={I270ExpansioninWesternMaryland} />
        <Route exact path="/issues/infrastructure/stories-opinions/pothole-pathos" component={PotholePathos} />
        <Route exact path="/issues/infrastructure/stories-opinions/silver-spring-housing" component={SilverSpringHousing} />
        <Route exact path="/issues/infrastructure/stories-opinions/how-to-do-brt-properly" component={HowToDoBRTProperly} />
        <Route exact path="/issues/infrastructure/solutions/proposals-worth-considering" component={ProposalsWorthConsideringI} />
                
        <Route exact path="/issues/resident-reflections" component={withTracker(ResidentReflections)} />
        <Route exact path="/issues/resident-reflections/moco-board-education-considers-redrawing-school-lines" component={withTracker(MoCoBoardEducationConsidersRedrawingSchoolLines)} />
        <Route exact path="/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools" component={withTracker(DemandMentalHealthServicesExceedSupplyMoCoSchools)} />
        <Route exact path="/issues/resident-reflections/mcps-the-numbers-beyond" component={withTracker(MCPSTheNumbersBeyond)} />
        <Route exact path="/issues/resident-reflections/local-government-holds-key-gun-reform" component={withTracker(LocalGovernmentHoldsKeyGunReform)} />

        <Route exact path="/issues/more" component={withTracker(More)} />
        <Route exact path="/issues/more/facts/newspapers-disappearing" component={NewspapersDisappearing} />
        <Route exact path="/issues/more/stories-opinions/beginners-guide-to-budget" component={BeginnersGuideToBudget} />
        <Route exact path="/issues/more/stories-opinions/county-in-five-years-part-one" component={CountyInFiveYearsPartOne} />
        <Route exact path="/issues/more/stories-opinions/county-in-five-years-part-two" component={CountyInFiveYearsPartTwo} />
        <Route exact path="/issues/more/stories-opinions/testifying-my-conscience" component={TestifyingMyConscience} />
        <Route exact path="/issues/more/stories-opinions/complexities-child-care-nutshell" component={ComplexitiesChildCareNutshell} />
        <Route exact path="/issues/more/legislation/voting-bills" component={VotingBills} />
        <Route exact path="/issues/more/legislation/life-threatening-project-bust" component={LifeThreateningProjectBust} />
        
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
