import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { toast } from "react-toastify";

import Register from "./Register";

class RegisterContainer extends Component {
    constructor(props) {
        super(props)
    
        if (props.user) {
          toast.warn("You must be signed out to visit that page.")
          props.history.push('/cms/home')
        }
      }
    
      render() {
        return <Register />;
      }
}

export default withRouter(RegisterContainer)