// Import React
import React from 'react'

// Import axios
import axios from 'axios'

class Query extends React.Component {
    constructor() { 
        super()
        this.state = {
            term: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // This function will respond to the user input
    handleChange(event) {
        console.log('something')
        this.setState({ term: event.target.value });
    }

    handleClick(event) {
        console.log('clicked');
        const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4e296b3423a148a9b6ec9b078a991d26&q=" + this.state.term;
        axios.get(url).then((response) => {
            this.props.handleResults(response.data.response.docs);
        })
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Query</h3>
                </div>
                <div className="panel-body">
                    <div className="input-group">
                        <input className="form-control" type="text" onChange={this.handleChange} value={this.state.term} />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button" onClick={this.handleClick} >Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Query
