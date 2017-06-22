// Include React
import React from 'react'
// Including the Link component from React Router to navigate within our application without full page reloads

class Saved extends React.Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    <p>Saved articles</p>
                </div>
            </div>
        );
    }
}


export default Saved