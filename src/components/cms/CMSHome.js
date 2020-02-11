import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { toast } from "react-toastify";
import { firebase } from '../../Fire'

class CMSHome extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        console.log("Signing out...")
        firebase.auth().signOut().then(() => {
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
        return (
            <div className="wrapper">
                <h1>CMS Home</h1>
                <p>
                    CMS or Content Management System will allow you to post content (articles) directly to the site based on what the web developers built.
                </p>
                <Grid fluid>
                    <Row>
                        <Col xs={6} sm={3}>
                            <Link to="/cms/add-article"><button className="s-btn">Add an article</button></Link>
                            </Col>
                        <Col xs={6} sm={3}>
                            <Link to="/cms/list-articles"><button className="s-btn">List all articles</button></Link>
                        </Col>
                        <Col xs={6} sm={3}>
                            <button className="s-btn-danger" onClick={this.signOut}>Sign Out</button>
                        </Col>
                    </Row>
                </Grid>
               
                
            </div>
        )
    }
}


export default withRouter(CMSHome);