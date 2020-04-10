import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';
import Categories from './components/Categories';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/categories" component={Categories} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  );
}

export default App;