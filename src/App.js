import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "../src/ScrollToTop";

// CSS
import "./assets/css/App.css";
import "./assets/css/CAPS.css";
import "./assets/css/Buttons.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  
  render() {
      return (
      <BrowserRouter>
        <ScrollToTop>
          <div>
            <Header />
            <ToastContainer position="top-center" hideProgressBar={true} />
            <Routes />
            <Footer />
          </div>
          </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
