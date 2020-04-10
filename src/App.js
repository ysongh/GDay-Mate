import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Categories from './components/Categories';
import User from './components/User';
import Organization from './components/Organization';
import OrganizationProfile from './components/OrganizationProfile';
import Checkins from "./components/Checkins";
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Router>
      <Navbar collapseOnSelect />
      <Route exact path="/" component={Landing} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/user" component={User} />
      <Route exact path="/organization" component={Organization} />
      <Route exact path="/organization/profile/:id" component={OrganizationProfile} />
      <Route exact path="/checkins" component={Checkins} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;
