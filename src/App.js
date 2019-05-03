import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// CSS
import "./assets/css/App.css";
import "./assets/css/Header.css";
import "./assets/css/Footer.css";

class App extends Component {
  render() {
      return (
      <BrowserRouter>
        <div className="site">
          <ToastContainer position="top-center" hideProgressBar={true} />
          <Header />
          <div className="wrapper site-content">
            <Routes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
