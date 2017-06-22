// Import React
import React from 'react'

// Import child components
import Query from './search-children/Query'
import Results from './search-children/Results'

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            searchResults: []
        }
        this.handleResults = this.handleResults.bind(this);
    }
    handleResults(results) {
        this.setState({
            searchResults: results
        })
    }
    render() {
        return (
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search</h3>
                    </div>
                    <div className="panel-body">
                        <Query handleResults={this.handleResults} />
                        <Results results={this.state.searchResults} />
                    </div>
                </div>
        )
    }
}


export default Search