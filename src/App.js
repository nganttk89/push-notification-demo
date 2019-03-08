import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { askForPermissionToReceiveNotifications } from './push-notification';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <button onClick={askForPermissionToReceiveNotifications} >
            Click here to receive notifications
          </button>
        </header>

      </div>
    );
  }
}

export default App;
