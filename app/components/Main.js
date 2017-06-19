// Include React
import React from 'react'

// Including the Link component from React Router to navigate within our application without full page reloads
import {
    HashRouter,
    Route,
    Link
} from 'react-router-dom'

// Import components
import Search from './children/Search'
import Saved from './children/Saved'

const Main = () => (
    <HashRouter>
        <div className="container">
            <div className="jumbotron">
                <h2><strong>NYTimes React</strong></h2>
                <p><em>Find and save NYTimes articles</em></p>
                <hr />
                <Link to="/Search"><button className="btn btn-primary btn-lg">Article search</button></Link>
                <Link to="/Saved"><button className="btn btn-danger btn-lg">Saved articles</button></Link>
                <Route exact path="/Search" component={Search} />
                <Route path="/Saved" component={Saved} />

            </div>

            <div className="row">

            </div>

        </div>
    </HashRouter>
);

// Export the component back for use in other files
export default Main
