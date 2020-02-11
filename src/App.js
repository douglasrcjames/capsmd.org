import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

import { firebase } from "./Fire.js";
import history from './history';
// Components
import Header from "./components/misc/Header";
import Footer from "./components/misc/Footer";
import ScrollToTop from "../src/ScrollToTop";

// CSS
import "./assets/css/App.css";
import "./assets/css/CAPS.css";
import "./assets/css/Buttons.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/pdf.css";
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  _isMounted = false
  constructor(props) {
    super(props)
  
    this.state = {
       loading: true
    }
  }

  componentDidMount(){
    this._isMounted = true;
    if(this._isMounted){
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            user: user,
            loading: false
          });
        } else {
          this.setState({
            loading: false
          });
        }
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      return (
      <Router history={history}>
        <ScrollToTop>
          <div>
            <Header />
            <ToastContainer position="top-center" hideProgressBar={true} />
            { !this.state.loading && (
              <Routes user={this.state.user} />
            )}
            { this.state.loading && (
              <div className="l-container">
                <h2>Loading...</h2> 
              </div>
            )}
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
