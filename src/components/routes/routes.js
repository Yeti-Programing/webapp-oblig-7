import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PollMain from '../../components/layout/Poll_main';
import Create_poll from '../../components/pages/Create_poll';
import Signup from '../../components/pages/Signup';

export class routes extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" render={props => (
                        <React.Fragment>
                        <PollMain></PollMain>
                        </React.Fragment>
                    )} />
                    <Route path="/create_poll" component={Create_poll} />
                    <Route path="/signup" component={Signup} />
                </Router>
            </div>
        )
    }
}

export default routes
