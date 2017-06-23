// Import React
import React from 'react'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

import axios from 'axios'

class SavedArticle extends React.Component {
    constructor() {
        super()
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    handleDelete() {
        console.log('handle save');
        // this.props.saveArticle(this.article)
        axios.put("/api/delete", { headline: this.props.headline }).then((response) => this.props.handleResponse(response));
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-6">
                                <a href={this.props.web_url}><h4>{this.props.headline}</h4></a>
                            </div>
                            <div className="col-xs-4">
                                <h4>{this.props.pub_date}</h4>
                            </div>
                            <div className="col-xs-2">
                                <div className="text-right">
                                    <button className="btn btn-default btn-right" onClick={this.handleDelete}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SavedArticle
