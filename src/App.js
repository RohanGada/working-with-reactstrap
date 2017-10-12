import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert, UncontrolledAlert} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Alert color="primary">
          This is a primary alert — check it out !</Alert>
        <UncontrolledAlert color="info">
          I am an alert and I can be dismissed !</UncontrolledAlert>
        <p className="App-intro">
          To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
