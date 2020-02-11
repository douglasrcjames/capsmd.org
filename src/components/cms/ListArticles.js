import React, { Component } from 'react'

export default class ListArticles extends Component {
    render() {
        return (
            <div className="wrapper">
                <h1>List Articles</h1>
                <p>
                    Below are all the articles added to the system via the CMS. Some articles might not be visible, such as those hard coded by developers.
                </p>
            </div>
        )
    }
}
