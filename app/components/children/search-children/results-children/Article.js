// Import React
import React from 'react'
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'


class Article extends React.Component {
    handleSave() {
        console.log('handle save')
    }
    render() {
        const { main } = this.props.data.headline;
        const { web_url, pub_date } = this.props.data;
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="well">
                        <div className="row">
                            <div className="col-xs-9">
                                <a href={web_url}><h4>{main}</h4></a>
                                <p>{pub_date}</p>
                            </div>
                            <div className="col-xs-3">
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
