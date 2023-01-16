import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Sidebar from './SideBar';
import { Home } from './Home';

import Header from './HeaderComponent';

function Main() {
    return (
        <React.Fragment>
            <Router>
                <div className="container">
                    {/* <NavigationBar /> */}
                    <Header />
                    {/* <Sidebar /> */}
                    <Switch>
                        <Route exact path="/home" component={Home} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    );
}

export default Main;