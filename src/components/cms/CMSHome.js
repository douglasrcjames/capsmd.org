import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { toast } from "react-toastify";
import { fire } from '../../Fire'

class CMSHome extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        console.log("Signing out...")
        fire.auth().signOut().then(() => {
          console.log("Sign out successful.");
          toast.success("Sign out successful.");
          this.props.history.push("/");
          window.location.reload();
        }).catch((error) => {
          console.error("Error signing out: " + error);
          toast.error("Error signing out: " + error);
        });
      }

    render() {
        if(!this.props.user){
            return(
                <h2 className="wrapper">Loading...</h2>
            )
        } else {
            return (
                <div className="wrapper">
                    <div className="center-text">
                        <h1>CMS Home</h1>
                    </div>
                    
                    <h3>Hello {this.props.user.displayName}!</h3>
                    <b>Your email is {this.props.user.email}</b>
                    <p>
                        CMS or Content Management System will allow you to post content (articles) directly to the site based on what the web developers built. 
                    </p>
                    <p>
                        Choose an option below.
                    </p>
                    <Grid fluid>
                        <Row>
                            <Col xs={6} sm={3}>
                                <Link to="/cms/add-article"><button className="s-btn-success"> <i className="fas fa-plus" />&nbsp; Add an article</button></Link>
                                </Col>
                            <Col xs={6} sm={3}>
                                <Link to="/cms/list-articles"><button className="s-btn"> <i className="fas fa-list" />&nbsp; List all articles</button></Link>
                            </Col>
                            <Col xs={6} sm={3}>
                                <button className="s-btn-danger" onClick={this.signOut}> <i className="fas fa-sign-out-alt" />&nbsp; Sign Out</button>
                            </Col>
                        </Row>
                    </Grid>
                   
                    
                </div>
            )
        }
        
    }
}


export default withRouter(CMSHome);