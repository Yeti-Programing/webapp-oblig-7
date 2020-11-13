import './App.css';
import React, { Component } from 'react';
import Title from './components/layout/Title';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Style from './styled/formStyle';
import Routes from './components/routes/routes';

class App extends Component {
  render() {
    return (
      <Style>
        <div className="App">
            <Title/>
            <Navbar/>
            <main>
              <Routes/>
            </main>
            <Footer/>
        </div>
      </Style>
    );
  }
}

export default App;
