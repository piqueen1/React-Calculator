import React, { Component } from 'react';
import clipart from '../../assets/Calculator-PNG-Clipart.png';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = { operations: [] }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={clipart} className="App-logo" alt="logo" />
          <p>
            Soon the calculator below this one will actually work...
          </p>
        </header>
        <div className="Calculator">
          <div>
            <button>
              1
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
