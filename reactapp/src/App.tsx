import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <a href="/">Home</a>
          <a href="/">Search</a>
        </nav>
        <section>Body</section>
      </div>
    );
  }
}

export default App;
