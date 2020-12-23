import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { firestore } from './Fire'
import { toast } from 'react-toastify';

// CMS
import Article from './components/cms/Article'
import CMSHome from './components/cms/CMSHome'
import AddArticle from './components/cms/AddArticle'
import ListArticles from './components/cms/ListArticles'
import EditArticle from "./components/cms/EditArticle";

// Auth
import SignIn from './components/auth/SignIn'
import SigningIn from './components/auth/SigningIn'
import RegisterContainer from './components/auth/RegisterContainer'

// Main pages
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Test from "./components/misc/Test";

// Misc
import withTracker from './components/misc/WithTracker';
import UnderConstruction from "./components/misc/UnderConstruction";

// News
import News from "./components/news";
import BusinessIncubator from "./components/news/BusinessIncubator";
import LetterFromChairman from "./components/news/LetterFromChairman";
import InauguralStudy from "./components/news/InauguralStudy";
import ErrorBoundary from './components/misc/ErrorBoundary';

import BlueprintForMarylandsFuture from "./components/news/BlueprintForMarylandsFuture";
import KirwanJoinMoCoSchoolFunding from "./components/news/KirwanJoinMoCoSchoolFunding";

// Economic Development
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
import DoesCountyNeedMoreRevenue from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/DoesCountyNeedMoreRevenue";
import MoCoMoratoriumMadness from "./components/issues/EconomicDevelopmentScreens/StoriesOpinions/MoCoMoratoriumMadness";

// Education
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
import GoldenOpportunity from "./components/issues/EducationScreens/Facts/GoldenOpportunity";

// Infrastructure
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

// Governance
import Governance from "./components/issues/GovernanceScreens/index";
import CrimeMaryland from "./components/issues/GovernanceScreens/Facts/CrimeMaryland";
import AlleganyCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/AlleganyCountyVPC";
import AnneArundelCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/AnneArundelCountyVPC";
import BaltimoreCityVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/BaltimoreCityVPC";
import BaltimoreCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/BaltimoreCountyVPC";
import CalvertCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/CalvertCountyVPC";
import CarolineCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/CarolineCountyVPC";
import CarrollCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/CarrollCountyVPC";
import CecilCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/CecilCountyVPC";
import CharlesCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/CharlesCountyVPC";
import DorchesterCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/DorchesterCountyVPC";
import FrederickCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/FrederickCountyVPC";
import GarrettCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/GarrettCountyVPC";
import HarfordCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/HarfordCountyVPC";
import HowardCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/HowardCountyVPC";
import KentCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/KentCountyVPC";
import MontgomeryCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/MontgomeryCountyVPC";
import PrinceGeorgesCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/PrinceGeorgesCountyVPC";
import QueenAnnesCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/QueenAnnesCountyVPC";
import SomersetCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/SomersetCountyVPC";
import StMarysCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/StMarysCountyVPC";
import TalbotCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/TalbotCountyVPC";
import WashingtonCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/WashingtonCountyVPC";
import WicomicoCountyCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/WicomicoCountyCountyVPC";
import WorcesterCountyVPC from "./components/issues/GovernanceScreens/Facts/ViolentPropertyCrime/WorcesterCountyVPC";

import MitraAhadpourMD from "./components/issues/GovernanceScreens/Elections/MitraAhadpourMD";
import SunilDasgupta from "./components/issues/GovernanceScreens/Elections/SunilDasgupta";
import SteveSolomon from "./components/issues/GovernanceScreens/Elections/SteveSolomon";
import LynneHarris from "./components/issues/GovernanceScreens/Elections/LynneHarris";
import LumpoangeThomas from "./components/issues/GovernanceScreens/Elections/LumpoangeThomas";
import DalbinOsorio from "./components/issues/GovernanceScreens/Elections/DalbinOsorio";
import EhrenReynolds from "./components/issues/GovernanceScreens/Elections/EhrenReynolds";
import CameronRhode from "./components/issues/GovernanceScreens/Elections/CameronRhode";
import JayGuan from "./components/issues/GovernanceScreens/Elections/JayGuan";

// More
import More from "./components/issues/MoreScreens/index";
import NewspapersDisappearing from "./components/issues/MoreScreens/Facts/NewspapersDisappearing";
import VotingBills from "./components/issues/MoreScreens/Legislation/VotingBills";
import BeginnersGuideToBudget from "./components/issues/MoreScreens/StoriesOpinions/BeginnersGuideToBudget";
import TestifyingMyConscience from "./components/issues/MoreScreens/StoriesOpinions/TestifyingMyConscience";
import CountyInFiveYearsPartOne from "./components/issues/MoreScreens/StoriesOpinions/CountyInFiveYearsPartOne";
import CountyInFiveYearsPartTwo from "./components/issues/MoreScreens/StoriesOpinions/CountyInFiveYearsPartTwo";
import ComplexitiesChildCareNutshell from "./components/issues/MoreScreens/StoriesOpinions/ComplexitiesChildCareNutshell";
import LifeThreateningProjectBust from "./components/issues/MoreScreens/StoriesOpinions/LifeThreateningProjectBust";

import OpEds from "./components/issues/OpEdScreens";

// Resident Reflections
import ResidentReflections from "./components/issues/ResidentReflectionsScreens/index"
import MoCoOverlooksDevelopmentsImpactEducation from "./components/issues/ResidentReflectionsScreens/MoCoOverlooksDevelopmentsImpactEducation"
import DemandMentalHealthServicesExceedSupplyMoCoSchools from "./components/issues/ResidentReflectionsScreens/DemandMentalHealthServicesExceedSupplyMoCoSchools"
import MCPSTheNumbersBeyond from "./components/issues/ResidentReflectionsScreens/MCPSTheNumbersBeyond"
import LocalGovernmentHoldsKeyGunReform from "./components/issues/ResidentReflectionsScreens/LocalGovernmentHoldsKeyGunReform"
import WaitImUndocumented from "./components/issues/ResidentReflectionsScreens/WaitImUndocumented"
import StartingSmallBusinessMoCo from "./components/issues/ResidentReflectionsScreens/StartingSmallBusinessMoCo"
import HealthCareFormGoodLuck from "./components/issues/ResidentReflectionsScreens/HealthCareFormGoodLuck"
import Badlands from "./components/issues/ResidentReflectionsScreens/Badlands";
import EconomicDevelopmentSolutions from "./components/solutions/EconomicDevelopmentSolutions";
import EducationSolutions from "./components/solutions/EducationSolutions";
import InfrastructureSolutions from "./components/solutions/InfrastructureSolutions";


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
  constructor(props) {
    super(props)
    this.state = {
      articles : []
    }
  }
  
  componentDidMount() {
    this.unsubscribeArticles = firestore.collection("articles").onSnapshot(snapshot => {
      const pastArticles = []
      snapshot.forEach(doc => {
        var docWithId = Object.assign({}, doc.data());
        docWithId.id = doc.id;
        pastArticles.push(docWithId)
      })
      this.setState({
        articles: pastArticles
      })
    }, () => {
      console.log("No articles!")
    });
      
  }

  componentWillUnmount(){
    this.unsubscribeArticles();
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={withTracker(Home)} />
        <Route exact path="/about-us" component={withTracker(AboutUs)} />

        <Route exact path="/news" component={withTracker(News)} />
        <Route exact path="/news/business-incubator" component={withTracker(BusinessIncubator)} />
        <Route exact path="/news/letter-from-chairman" component={withTracker(LetterFromChairman)} />
        <Route exact path="/news/inaugural-study" component={withTracker(InauguralStudy)} />
        <Route exact path="/news/kirwan-join-moco-school-funding" component={KirwanJoinMoCoSchoolFunding} />
        <Route exact path="/news/blueprint-for-marylands-future" component={BlueprintForMarylandsFuture} />

        <Route exact path="/contact-us" component={withTracker(ContactUs)} />
        <Route exact path="/find-legislators" component={UnderConstruction} />

        <Route exact path="/issues/economic-development" component={withTracker(EconomicDevelopment)} />
        <Route exact path="/solutions/economic-development" component={withTracker(EconomicDevelopmentSolutions)} />
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
        <Route exact path="/issues/economic-development/stories-opinions/does-county-need-more-revenue" component={DoesCountyNeedMoreRevenue} />
        <Route exact path="/issues/economic-development/stories-opinions/moco-moratorium-madness" component={MoCoMoratoriumMadness} />

        <Route exact path="/issues/education" component={withTracker(Education)} />
        <Route exact path="/solutions/education" component={withTracker(EducationSolutions)} />
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
        <Route exact path="/issues/education/facts/promoting-lifelong-health-by-investing-in-infant-and-early-childhood-mental-health" component={GoldenOpportunity} />

        <Route exact path="/issues/infrastructure" component={withTracker(Infrastructure)} />
        <Route exact path="/solutions/infrastructure" component={withTracker(InfrastructureSolutions)} />
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
        <Route exact path="/issues/governance/facts/violent-and-property-crime/allegany-county" component={AlleganyCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/anne-arundel-county" component={AnneArundelCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/baltimore-city" component={BaltimoreCityVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/baltimore-county" component={BaltimoreCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/calvert-county" component={CalvertCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/caroline-county" component={CarolineCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/carroll-county" component={CarrollCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/cecil-county" component={CecilCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/charles-county" component={CharlesCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/dorchester-county" component={DorchesterCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/frederick-county" component={FrederickCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/garrett-county" component={GarrettCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/harford-county" component={HarfordCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/howard-county" component={HowardCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/kent-county" component={KentCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/montgomery-county" component={MontgomeryCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/prince-georges-county" component={PrinceGeorgesCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/queen-annes-county" component={QueenAnnesCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/somerset-county" component={SomersetCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/st-marys-county" component={StMarysCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/worcester-county" component={WorcesterCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/wicomico-county" component={WicomicoCountyCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/washington-county" component={WashingtonCountyVPC} />
        <Route exact path="/issues/governance/facts/violent-and-property-crime/talbot-county" component={TalbotCountyVPC} />

        <Route exact path="/issues/governance/elections/mitra-ahadpour-md" component={MitraAhadpourMD} />
        <Route exact path="/issues/governance/elections/sunil-dasgupta" component={SunilDasgupta} />
        <Route exact path="/issues/governance/elections/steve-solomon" component={SteveSolomon} />
        <Route exact path="/issues/governance/elections/lynne-harris" component={LynneHarris} />
        <Route exact path="/issues/governance/elections/lumpoange-thomas" component={LumpoangeThomas} />
        <Route exact path="/issues/governance/elections/dalbin-osorio" component={DalbinOsorio} />
        <Route exact path="/issues/governance/elections/ehren-reynolds" component={EhrenReynolds} />
        <Route exact path="/issues/governance/elections/cameron-rhode" component={CameronRhode} />
        <Route exact path="/issues/governance/elections/jay-guan" component={JayGuan} />

        <Route exact path="/issues/resident-reflections" component={withTracker(ResidentReflections)} />
        <Route exact path="/issues/resident-reflections/moco-overlooks-developments-impact-education" component={withTracker(MoCoOverlooksDevelopmentsImpactEducation)} />
        <Route exact path="/issues/resident-reflections/demand-mental-health-services-exceed-supply-moco-schools" component={withTracker(DemandMentalHealthServicesExceedSupplyMoCoSchools)} />
        <Route exact path="/issues/resident-reflections/mcps-the-numbers-beyond" component={withTracker(MCPSTheNumbersBeyond)} />
        <Route exact path="/issues/resident-reflections/local-government-holds-key-gun-reform" component={withTracker(LocalGovernmentHoldsKeyGunReform)} />
        <Route exact path="/issues/resident-reflections/wait-im-undocumented" component={withTracker(WaitImUndocumented)} />
        <Route exact path="/issues/resident-reflections/starting-small-business-in-montgomery-county" component={withTracker(StartingSmallBusinessMoCo)} />
        <Route exact path="/issues/resident-reflections/caps-x-badlands" component={withTracker(Badlands)} />
        <Route exact path="/issues/resident-reflections/health-care-form-good-luck" component={withTracker(HealthCareFormGoodLuck)} />
        
        <Route exact path="/issues/more" component={withTracker(More)} />
        <Route exact path="/issues/more/facts/newspapers-disappearing" component={NewspapersDisappearing} />
        <Route exact path="/issues/more/stories-opinions/beginners-guide-to-budget" component={BeginnersGuideToBudget} />
        <Route exact path="/issues/more/stories-opinions/county-in-five-years-part-one" component={CountyInFiveYearsPartOne} />
        <Route exact path="/issues/more/stories-opinions/county-in-five-years-part-two" component={CountyInFiveYearsPartTwo} />
        <Route exact path="/issues/more/stories-opinions/testifying-my-conscience" component={TestifyingMyConscience} />
        <Route exact path="/issues/more/stories-opinions/complexities-child-care-nutshell" component={ComplexitiesChildCareNutshell} />
        <Route exact path="/issues/more/legislation/voting-bills" component={VotingBills} />
        <Route exact path="/issues/more/legislation/life-threatening-project-bust" component={LifeThreateningProjectBust} />

        <Route exact path="/issues/op-eds" component={withTracker(OpEds)} />

        {/* CMS */}
        {  
          this.state.articles && (
            this.state.articles.map((article, i) => {
              return (<Route key={i} exact path={article.localUrl} component={() => <Article article={article} user={this.props.user} />} />)
            })  
           )
        } 

        <VisitorRoute loggedIn={this.props.user} path="/cms/sign-in" component={SignIn} />
        <Route path="/cms/signing-in" exact component={() => <SigningIn user={this.props.user} />} />
        <Route path="/cms/register" exact render={() => <RegisterContainer user={this.props.user} />} />
        <UserRoute
              exact
              path="/cms/"
              loggedIn={this.props.user}
              component={() => <CMSHome user={this.props.user} />} />
        <UserRoute
              exact
              path="/cms/add-article"
              loggedIn={this.props.user}
              component={() => <AddArticle user={this.props.user} />} />
        <UserRoute
              exact
              path="/cms/edit-article/:articleId"
              loggedIn={this.props.user}
              component={() => <EditArticle />} />
        <UserRoute
            exact
            path="/cms/list-articles"
            loggedIn={this.props.user}
            component={() => <ListArticles />} />

        <Route exact path="/test" component={Test} />
        <Route component={withTracker(Page404)} />
      </Switch>
    );
  }
}

// Must be signed in to view
const UserRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        return loggedIn ? (
          <ErrorBoundary><Comp {...props} /></ErrorBoundary>
        ) : (
          
          <Route
            render={() => (
              <>
                {toast.warn("You must sign in to visit that page.")}
                <Redirect to="/cms/sign-in" />
              </>
            )}
          />
        );
      }}
    />
  );
};

  // Must be signed out to view
  const VisitorRoute = ({ component: Comp, loggedIn, path }) => {
    return (
      <Route
        path={path}
        render={props => {
          return loggedIn ? (
            <Route
              render={() => (
                <>
                  {toast.warn("You must be signed out to visit that page.")}
                  <Redirect to="/cms" />
                </>
              )}
            />
          ) : (
            <ErrorBoundary><Comp {...props} /></ErrorBoundary>
          );
        }}
      />
    );
  };

export default withRouter(Routes);
