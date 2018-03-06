import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';

class App extends Component {
  state = {
    isAuthenticated: false
  };

  authenticate = () => {
    setTimeout(this.setState({ isAuthenticated: true }), 100);
  };

  signout = () => {
    setTimeout(this.setState({ isAuthenticated: false }), 100);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            isAuthenticated={this.state.isAuthenticated}
            login={this.authenticate}
            signout={this.signout}
          />
          <Route exact path="/" component={Landing} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
