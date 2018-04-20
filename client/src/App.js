import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Items from './components/Items';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  state = {
    isAuthenticated: false
  };

  componentDidMount() {
    const fontAwesome = document.createElement('script');
    const customScript = document.createElement('script');

    fontAwesome.src = 'https://use.fontawesome.com/releases/v5.0.8/js/all.js';
    fontAwesome.async = true;
    customScript.src = '/script.js';
    customScript.async = true;

    document.body.appendChild(fontAwesome);
    document.body.appendChild(customScript);
  }

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
          <Route exact path="/" render={()=> <Landing isAuthenticated={this.state.isAuthenticated} login={this.authenticate} />} />
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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
