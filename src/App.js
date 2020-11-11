import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Title from './components/layout/Title';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import PollMain from './components/layout/Poll_main';
import Create_poll from './components/pages/Create_poll';
import Signup from './components/pages/Signup';

console.log("HELLO")

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Title></Title>
          <Navbar></Navbar>
          <main>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <PollMain></PollMain>
              </React.Fragment>
            )} />
            <Route path="/create_poll" component={Create_poll} />
            <Route path="/signup" component={Signup} />
          </main>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
