import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Nav'

import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/SignIn/'
import Register from './pages/Register/'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/register' component={Register} />
        </Switch>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
