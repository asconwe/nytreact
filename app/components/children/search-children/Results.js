// Import React
import React from 'react'
import { 
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

class Results extends React.Component {
  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Results</h3>
        </div>
        <div className="panel-body">
          {console.log(this.props.results)}
        </div>
      </div>
    );
  }
}

export default Results
