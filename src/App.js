import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Categories from './components/Categories';
import Category from './components/Category';
import UserRegister from './components/auth/UserRegister';
import UserProfile from './components/profile/UserProfile';
import OrganizationRegister from './components/auth/OrganizationRegister';
import OrganizationProfile from './components/profile/OrganizationProfile';
import Checkins from "./components/Checkins";
import Login from './components/auth/Login';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <Navbar collapseOnSelect />
      <Route exact path="/" component={Landing} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/user/register" component={UserRegister} />
      <Route exact path="/user/profile/:id" component={UserProfile} />
      <Route exact path="/organization/register" component={OrganizationRegister} />
      <Route exact path="/organization/profile/:id" component={OrganizationProfile} />
      <Route exact path="/checkins" component={Checkins} />
      <Route exact path="/login" component={Login} />
      <Footer />
    </Router>
  );
}

export default App;
