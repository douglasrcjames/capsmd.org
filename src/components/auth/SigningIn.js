import React, { Component } from 'react'
import { withRouter } from "react-router-dom";

class SigningIn extends Component {
    constructor(props) {
        super(props)
        this.redirectToProfile = this.redirectToProfile.bind(this);
    }

    redirectToProfile(){
        setTimeout(() => {
            this.props.history.push("/cms/");
          }, 1500);
    }
    
    render() {
        return (
            <div className="wrapper">
                <h2>Redirecting you...</h2>
                { this.redirectToProfile() }
            </div>
        )
    }
}

export default withRouter(SigningIn);