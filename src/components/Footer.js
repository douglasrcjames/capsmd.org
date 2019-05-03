import React, { Component } from 'react'

export default class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = { year: new Date().getFullYear() };
    }

    render() {
        return (
            <footer>
            <div className="f-container">
                
                Council for Advocacy and Policy Solutions
                &nbsp;
                &copy;
                {this.state.year}
                
            </div>
        </footer>
        )
    }
}
