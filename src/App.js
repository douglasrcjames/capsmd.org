import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { fire } from "./Fire.js";
import history from './history';
// Components
import Header from "./components/misc/Header";
import Footer from "./components/misc/Footer";
import ScrollToTop from "./ScrollToTop";

// CSS
import "./assets/css/App.css";
import "./assets/css/CAPS.css";
import "./assets/css/Buttons.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import "./assets/css/pdf.css";
import 'react-toastify/dist/ReactToastify.css';
import "react-datez/dist/css/react-datez.css";
import "./assets/css/Modal.css";
import "./assets/css/Misc.scss";

import Modal from "react-modal";
Modal.setAppElement('body');
class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       loading: true
    }
  }

  componentDidMount(){
    fire.auth().onAuthStateChanged((user) => {
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

  render() {
      return (
        <Router history={history}>
          <ScrollToTop>
              <Header />
              <ToastContainer position="top-center" hideProgressBar={true} autoClose={7000} />
              { !this.state.loading && (
                <div style={{paddingTop: "5%"}}>
                    <Routes user={this.state.user} />
                </div>
              )}
              { this.state.loading && (
                <div className="l-container">
                  <h2 className="wrapper">Loading...</h2> 
                </div>
              )}
              <Footer />
          </ScrollToTop>
        </Router>
    );
  }
}

export default App;
