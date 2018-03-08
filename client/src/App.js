import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/dashboard';
import { Dashboard } from './components/dashboard';

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
        <Dashboard />
      </div>
    );
  }
}

export default App;
