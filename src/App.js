import React, { Component } from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import { CookiesProvider } from 'react-cookie';
import { fire } from "./Fire.js";
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
import "react-datez/dist/css/react-datez.css";
import "./assets/css/Modal.css";

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
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
      return (
      <CookiesProvider>
        <Router history={history}>
          <ScrollToTop>
              <Header />
              <ToastContainer position="top-center" hideProgressBar={true} autoClose={7000} />
              { !this.state.loading && (
                <Routes user={this.state.user} />
              )}
              { this.state.loading && (
                <div className="l-container">
                  <h2 className="wrapper">Loading...</h2> 
                </div>
              )}
              <Footer />
          </ScrollToTop>
        </Router>
      </CookiesProvider>
    );
  }
}

export default App;
