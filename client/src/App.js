import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Items from './components/Items';
import PrivateRoute from './components/PrivateRoute';

import Signup from './components/Signup';

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
          <Route exact path="/" render={()=> <Landing isAuthenticated={this.state.isAuthenticated} />} />
          <PrivateRoute
            path="/dashboard"
            isAuthenticated={this.state.isAuthenticated}
            component={Dashboard}
          />
          <PrivateRoute
            path="/location/:id"
            isAuthenticated={this.state.isAuthenticated}
            component={Items}
          />
          <Route path="/signup" render={() => <Signup login={this.authenticate} isAuthenticated={this.state.isAuthenticated} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
