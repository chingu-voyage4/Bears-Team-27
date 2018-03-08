import React, { Component } from 'react';
import './App.css';
import { Header } from './components/dashboard';
import { Dashboard } from './components/dashboard';

import Header from './components/Header';
import Landing from './components/Landing';

class App extends Component {
  componentDidMount () {
    const fontAwesome = document.createElement("script");
    const customScript = document.createElement("script");

    fontAwesome.src = "https://use.fontawesome.com/releases/v5.0.8/js/all.js";
    fontAwesome.async = true;
    customScript.src = "/script.js";
    customScript.async = true;

    document.body.appendChild(fontAwesome);
    document.body.appendChild(customScript);
  }

  render() {
    return (
      <div className="App">
        <Header />
<<<<<<< HEAD
        <Dashboard />
=======
        <Landing />
>>>>>>> development
      </div>
    );
  }
}

export default App;
