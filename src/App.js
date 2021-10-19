import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import GamePage from './Pages/GamePage';
import Login from './Pages/Login';
import Settings from './Pages/Settings';
import Feedback from './Pages/Feedback';
import Ranking from './Pages/Ranking';
import GamePage from './Pages/GamePage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/game" component={ GamePage } />
          <Route path="/settings" component={ Settings } />
          <Route path="/feedback" component={ Feedback } />
          <Route path="/ranking" component={ Ranking } />
        </Switch>
      </BrowserRouter>
    );
  }
}
