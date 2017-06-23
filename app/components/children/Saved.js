// Include React
import React from 'react'

import SavedArticle from './saved-children/SavedArticle.js'

class Saved extends React.Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    <div className="panel-body">
                        {console.log(this.props.savedArticles)}
                        {this.props.savedArticles.map((article, index) => <SavedArticle handleResponse={this.props.handleResponse} headline={article.headline} web_url={article.web_url} pub_date={article.pub_date} key={index} /> )}
                    </div>
                </div>
            </div>
        );
    }
}


export default Saved