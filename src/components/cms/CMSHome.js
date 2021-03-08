import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { toast } from "react-toastify";
import { fire, firestore } from '../../Fire'
import { OLD_EXTERNAL_NEWS, OLD_PRESS_RELEASES } from '../../utilities/constants';

class CMSHome extends Component {
    constructor(props) {
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    componentDidMount(){
        
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

    addArticles(articles){
        if(window.confirm(`Are you sure you want to post ${articles.length} articles?`)){
            articles.forEach((article, index, array) => {
                var titleNoSpecialChars = article.title.replace(/[^a-zA-Z ]/g, "")
                var titleCleaned = titleNoSpecialChars.replace(/\s+/g, '-').toLowerCase(); //lower case and dashified
                var ref = firestore.collection("articles").doc(`${titleCleaned}`)
                ref.get().then(doc => {
                    if(doc.exists){
                        toast.error(`An article with a similar title exists for: ${titleCleaned}`);
                    } else {
                        ref.set({
                            title: article.title,
                            author: article.author || '',
                            date: article.date,
                            status: article.status,
                            category: article.category || '',
                            issue: article.issue || '',
                            news: article.news || '',
                            carousel: article.carousel || false,
                            headerUrl: article.picPath,
                            localUrl: article.localUrl || '',
                            link: article.link || '',
                            isOldComponent: article.isOldComponent || false,
                            created: Date.now(),
                            creator: article.creator
                        }).then(() => {
                            console.log(`Success writing "${article.title}"!`);
                        }).catch((error) => {
                            toast.error(`Error writing article "${article.title}": ${error}`);
                        });
                    }
                })
    
                if (index === (array.length -1)) {
                    // This is the last one.
                    toast.success(`Done writing ${array.length} articles!`);
                }
            })
        } else {
            console.log("User denied.")
        }
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
                    
                    <h3 className="no-margin">Hello {this.props.user.displayName}!</h3>
                    <b>Your email is {this.props.user.email}</b>
                    <p>
                        CMS or Content Management System will allow you to post content (articles) directly to the site based on what the web developers built. 
                    </p>
                    <p>
                        Choose an option below.
                    </p>
                    <Grid fluid>
                        <Row className="s-margin-t-b">
                            <Col xs={6} sm={3}>
                                <Link to="/cms/add-article"><button className="s-btn-success"> <i className="fas fa-plus" />&nbsp; Add an article</button></Link>
                            </Col>
                            <Col xs={6} sm={3}>
                                <Link to="/cms/list-articles"><button className="s-btn"> <i className="fas fa-list" />&nbsp; List all articles</button></Link>
                            </Col>
                            <Col xs={6} sm={3}>
                                <Link to="/cms/list-featured-articles"><button className="s-btn"> <i className="fas fa-star" />&nbsp; List Featured articles</button></Link>
                            </Col>
                           
                            
                        </Row>
                        <Row className="s-margin-t-b">
                            <Col xs={6} sm={3}>
                                <button className="s-btn" onClick={() => this.addArticles(OLD_PRESS_RELEASES)}> <i className="fas fa-plus" />&nbsp; Create Press Releases</button>
                            </Col>
                            <Col xs={6} sm={3}>
                                <button className="s-btn" onClick={() => this.addArticles(OLD_EXTERNAL_NEWS)}> <i className="fas fa-plus" />&nbsp; Create External News</button>
                            </Col>
                        </Row>
                        <Row className="s-margin-t-b">
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