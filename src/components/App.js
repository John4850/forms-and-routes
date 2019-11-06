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
        <Route path="/" component={Home} />
        <Route path="/list/:name" component={List} />
      </Switch>
    </Router>
  );
}
