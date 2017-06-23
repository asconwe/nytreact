// Import React
import React from 'react'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'


class Article extends React.Component {
    constructor() {
        super()
        this.handleSave = this.handleSave.bind(this);
    }
    
    handleSave(event) {
        event.preventDefault();
        const article = {
            headline: this.props.headline,
            web_url: this.props.web_url,
            pub_date: this.props.pub_date
        }
        console.log('handle save', article);
        this.props.saveArticle(article);
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
                                    <button className="btn btn-default btn-right" onClick={this.handleSave}>Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article
