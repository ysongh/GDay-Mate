import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Landing} />
    </Router>
  );
}

export default App;