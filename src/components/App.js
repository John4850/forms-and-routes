import React from 'react';
import Header from '../components/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
import Home from '../containers/Home';
import List from '../containers/List';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list" component={List} />
      </Switch>
    </Router>
  );
}
