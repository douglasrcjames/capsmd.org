import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import News from "./components/News";
import ContactUs from "./components/ContactUs";

import EconomicDevelopment from "./components/issues/EconomicDevelopment";
import Education from "./components/issues/Education";
import Transportation from "./components/issues/Transportation";
import More from "./components/issues/More";


const Page404 = ({ location }) => (
  <div className="m-padding-t">
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
        <Route exact path="/issues/education" component={Education} />
        <Route exact path="/issues/transportation" component={Transportation} />
        <Route exact path="/issues/more" component={More} />
        <Route component={Page404} />
      </Switch>
    );
  }
}

export default withRouter(Routes);
