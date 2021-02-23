import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Index from '../views/Index';
import Header from '../components/Layout/Header';

export default function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/scenicSpot/:city?" component={Index} />
      </Switch>
    </Router>
  );
}
