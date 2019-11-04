import React from 'react';
import Header from '../components/header/Header';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link
} from 'react-router-dom';
import Home from '../containers/Home';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
