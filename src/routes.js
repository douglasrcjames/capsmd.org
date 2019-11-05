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
import PotomacDivide from "./components/issues/EconomicDevelopmentScreens/Facts/PotomacDivide";
import GovEmploymentGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/GovEmploymentGrowth";
import WagesSalariesPaidGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/WagesSalariesPaidGrowth";
import UnemploymentRate from "./components/issues/EconomicDevelopmentScreens/Facts/UnemploymentRate";
import TotalEmploymentGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/TotalEmploymentGrowth";
import PrivateEmploymentGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/PrivateEmploymentGrowth";
import PopulationGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/PopulationGrowth";
import MeanHouseholdIncome from "./components/issues/EconomicDevelopmentScreens/Facts/MeanHouseholdIncome";
import MeanHouseholdIncomeGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/MeanHouseholdIncomeGrowth";
import MeanCompPerJob from "./components/issues/EconomicDevelopmentScreens/Facts/MeanCompPerJob";
import EstablishmentGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/EstablishmentGrowth";
import CompGrowth from "./components/issues/EconomicDevelopmentScreens/Facts/CompGrowth";
import ProposalsWorthConsideringE from "./components/issues/EconomicDevelopmentScreens/Solutions/ProposalsWorthConsidering";
import HowisMoCoDoingJobsData2018 from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/HowisMoCoDoingJobsData2018";
import HowDidtheCountySpendYourMoneyThisYear from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/HowDidtheCountySpendYourMoneyThisYear";
import CAPSxLIAS from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/CAPSxLIAS"
import CAPSxLisaPayne from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/CAPSxLisaPayne";

import Education from "./components/issues/EducationScreens/index";
import PerPupilFunding from "./components/issues/EducationScreens/Facts/PerPupilFunding";
import PublicSchoolNeeds from "./components/issues/EducationScreens/Facts/PublicSchoolNeeds";
import ProposalsWorthConsideringED from "./components/issues/EducationScreens/Solutions/ProposalsWorthConsidering";
import GettingFairShareFromKirwan from "./components/issues/EducationScreens/StoriesOpinions/GettingFairShareFromKirwan";
import DoBetterKirwanFunding from "./components/issues/EducationScreens/StoriesOpinions/DoBetterKirwanFunding";
import HowKirwanBenefitsMontgomeryCounty from "./components/issues/EducationScreens/Solutions/HowKirwanBenefitsMontgomeryCounty";
import AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools from "./components/issues/EducationScreens/Facts/AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools";
import Finding1MCPSDistributesStaffResourcesFightAchievementGap from "./components/issues/EducationScreens/Facts/Finding1MCPSDistributesStaffResourcesFightAchievementGap";
import Finding2Fiscal2017PropertyTaxHikeDidNotBringSubstantiallyMoreResourcesClassroom from "./components/issues/EducationScreens/Facts/Finding2Fiscal2017PropertyTaxHikeDidNotBringSubstantiallyMoreResourcesClassroom";
import Finding3ThereAreGiganticDemographicGapsBetweenStudentsProfessionalStaff from "./components/issues/EducationScreens/Facts/Finding3ThereAreGiganticDemographicGapsBetweenStudentsProfessionalStaff";
import Finding4BoundaryShiftsCanPlayRoleSolvingCapacityIssues from "./components/issues/EducationScreens/Facts/Finding4BoundaryShiftsCanPlayRoleSolvingCapacityIssues";
import WillMoCoNeedTaxHikePayKirwan from "./components/issues/EducationScreens/StoriesOpinions/WillMoCoNeedTaxHikePayKirwan";

import Infrastructure from "./components/issues/InfrastructureScreens/index";
import HousingConstruction from "./components/issues/InfrastructureScreens/Facts/HousingConstruction";
import TrailsInNewHousing from "./components/issues/InfrastructureScreens/Facts/TrailsInNewHousing";
import RoadsClogged from "./components/issues/InfrastructureScreens/Facts/RoadsClogged";
import TransportationProjects from "./components/issues/InfrastructureScreens/Facts/TransportationProjects";
import HousingUnitsPermitted from "./components/issues/InfrastructureScreens/Facts/HousingUnitsPermitted";
import I270ExpansioninWesternMaryland from "./components/issues/InfrastructureScreens/StoriesOpinions/I270ExpansioninWesternMaryland";
import PotholePathos from "./components/issues/InfrastructureScreens/StoriesOpinions/PotholePathos";
import SilverSpringHousing from "./components/issues/InfrastructureScreens/StoriesOpinions/SilverSpringHousing";
import HowToDoBRTProperly from "./components/issues/InfrastructureScreens/StoriesOpinions/HowToDoBRTProperly";
import ProposalsWorthConsideringI from "./components/issues/InfrastructureScreens/Solutions/ProposalsWorthConsidering";

import Governance from "./components/issues/GovernanceScreens/index";
import CrimeMaryland from "./components/issues/GovernanceScreens/Facts/CrimeMaryland";
import WorcesterCountyViolentandPropertyCrime from "./components/issues/GovernanceScreens/Facts/WorcesterCountyViolentandPropertyCrime";
import WicomicoCountyCountyViolentandPropertyCrime from "./components/issues/GovernanceScreens/Facts/WicomicoCountyCountyViolentandPropertyCrime";
import WashingtonCountyViolentandPropertyCrime from "./components/issues/GovernanceScreens/Facts/WashingtonCountyViolentandPropertyCrime";
import TalbotCountyViolentandPropertyCrime from "./components/issues/GovernanceScreens/Facts/TalbotCountyViolentandPropertyCrime";

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
import MoCoOverlooksDevelopmentsImpactEducation from "./components/issues/ResidentReflectionsScreens/MoCoOverlooksDevelopmentsImpactEducation"
import DemandMentalHealthServicesExceedSupplyMoCoSchools from "./components/issues/ResidentReflectionsScreens/DemandMentalHealthServicesExceedSupplyMoCoSchools"
import MCPSTheNumbersBeyond from "./components/issues/ResidentReflectionsScreens/MCPSTheNumbersBeyond"
import LocalGovernmentHoldsKeyGunReform from "./components/issues/ResidentReflectionsScreens/LocalGovernmentHoldsKeyGunReform"
import WaitImUndocumented from "./components/issues/ResidentReflectionsScreens/WaitImUndocumented"
import StartingSmallBusinessMoCo from "./components/issues/ResidentReflectionsScreens/StartingSmallBusinessMoCo"

import withTracker from './components/WithTracker';
import Badlands from "./components/issues/ResidentReflectionsScreens/Badlands";

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
        <Route exact path="/issues/economic-development/facts/potomac-divide" component={PotomacDivide} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/government-employment-growth" component={GovEmploymentGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/wages-salaries-paid-growth" component={WagesSalariesPaidGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/unemployment-rate" component={UnemploymentRate} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/total-employment-growth" component={TotalEmploymentGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/private-employment-growth" component={PrivateEmploymentGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/population-growth" component={PopulationGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/mean-household-income" component={MeanHouseholdIncome} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/mean-household-income-growth" component={MeanHouseholdIncomeGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/mean-compensation-per-job" component={MeanCompPerJob} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/establishment-growth" component={EstablishmentGrowth} />
        <Route exact path="/issues/economic-development/facts/potomac-divide/compensation-growth" component={CompGrowth} />
        <Route exact path="/issues/economic-development/solutions/proposals-worth-considering" component={ProposalsWorthConsideringED} />
        <Route exact path="/issues/economic-development/stories-opinions/how-is-moco-doing-jobs-data-2018" component={HowisMoCoDoingJobsData2018} />
        <Route exact path="/issues/economic-development/stories-opinions/how-did-the-county-spend-your-money-this-year" component={HowDidtheCountySpendYourMoneyThisYear} />
        <Route exact path="/issues/economic-development/stories-opinions/caps-x-lias" component={CAPSxLIAS} />
        <Route exact path="/issues/economic-development/stories-opinions/caps-x-lisa-payne" component={CAPSxLisaPayne} />
        

        <Route exact path="/issues/education" component={withTracker(Education)} />
        <Route exact path="/issues/education/facts/per-pupil-funding" component={PerPupilFunding} />
        <Route exact path="/issues/education/facts/public-school-needs" component={PublicSchoolNeeds} />
        <Route exact path="/issues/education/solutions/proposals-worth-considering" component={ProposalsWorthConsideringE} />
        <Route exact path="/issues/education/stories-opinions/getting-fair-share-from-kirwan" component={GettingFairShareFromKirwan} />
        <Route exact path="/issues/education/stories-opinions/do-better-kirwan-funding" component={DoBetterKirwanFunding} />
        <Route exact path="/issues/education/stories-opinions/will-moco-need-a-tax-hike-to-pay-for-kirwan" component={WillMoCoNeedTaxHikePayKirwan} />
        <Route exact 
          path="/issues/education/facts/an-examination-resource-allocation-demographics-capacity-utilization-montgomery-county-public-schools" 
          component={AnExaminationResourceAllocationDemographicsCapacityUtilizationMontgomeryCountyPublicSchools} />
        <Route exact path="/issues/education/solutions/how-kirwan-benefits-montgomery-county" component={HowKirwanBenefitsMontgomeryCounty} />
        <Route exact path="/issues/education/facts/finding-1-mcps-distributes-staff-resources-fight-achievement-gap" component={Finding1MCPSDistributesStaffResourcesFightAchievementGap} />
        <Route exact path="/issues/education/facts/finding-2-fiscal-2017-property-tax-hike-did-not-bring-substantially-more-resources-classroom" component={Finding2Fiscal2017PropertyTaxHikeDidNotBringSubstantiallyMoreResourcesClassroom} />
        <Route exact path="/issues/education/facts/finding-3-there-are-gigantic-demographic-gaps-between-students-professional-staff" component={Finding3ThereAreGiganticDemographicGapsBetweenStudentsProfessionalStaff} />
        <Route exact path="/issues/education/facts/finding-4-boundary-shifts-can-play-role-solving-capacity-issues" component={Finding4BoundaryShiftsCanPlayRoleSolvingCapacityIssues} />

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
        <Route exact path="/issues/infrastructure/facts/potomac-divide/housing-units-permitted" component={HousingUnitsPermitted} />
        
        <Route exact path="/issues/governance" component={withTracker(Governance)} />
        <Route exact path="/issues/governance/facts/crime-in-maryland" component={CrimeMaryland} />
        <Route exact path="/issues/governance/facts/worcester-county-violent-and-property-crime" component={WorcesterCountyViolentandPropertyCrime} />
        <Route exact path="/issues/governance/facts/wicomico-county-violent-and-property-crime" component={WicomicoCountyCountyViolentandPropertyCrime} />
        <Route exact path="/issues/governance/facts/washington-county-violent-and-property-crime" component={WashingtonCountyViolentandPropertyCrime} />
        <Route exact path="/issues/governance/facts/talbot-county-violent-and-property-crime" component={TalbotCountyViolentandPropertyCrime} />

        <Route exact path="/issues/resident-reflections" component={withTracker(ResidentReflections)} />
        <Route exact path="/issues/resident-reflections/moco-overlooks-developments-impact-education" component={withTracker(MoCoOverlooksDevelopmentsImpactEducation)} />
        <Route exact path="/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools" component={withTracker(DemandMentalHealthServicesExceedSupplyMoCoSchools)} />
        <Route exact path="/issues/resident-reflections/mcps-the-numbers-beyond" component={withTracker(MCPSTheNumbersBeyond)} />
        <Route exact path="/issues/resident-reflections/local-government-holds-key-gun-reform" component={withTracker(LocalGovernmentHoldsKeyGunReform)} />
        <Route exact path="/issues/resident-reflections/wait-im-undocumented" component={withTracker(WaitImUndocumented)} />
        <Route exact path="/issues/resident-reflections/starting-small-business-in-montgomery-county" component={withTracker(StartingSmallBusinessMoCo)} />
        <Route exact path="/issues/resident-reflections/caps-x-badlands" component={withTracker(Badlands)} />

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
