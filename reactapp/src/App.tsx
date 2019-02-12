import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const Home = () => <h1>Home</h1>
const Search = () => <h1>Search</h1>

export const Links = () => (
  <nav className='App-nav'>
    <NavLink exact activeClassName="App-active-navlink" to="/">Home</NavLink>
    <NavLink activeClassName="App-active-navlink" to="/Search">Search</NavLink>
  </nav>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Links />
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
