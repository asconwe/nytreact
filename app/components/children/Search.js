// Import React
import React from 'react'

// Import child components
import Query from './search-children/Query'
import Results from './search-children/Results'

class Search extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Search</h3>
                        </div>
                        <div className="panel-body">
                            <Query />
                            <Results />    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Search