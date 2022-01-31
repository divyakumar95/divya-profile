import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Resume from './components/pages/Resume/Resume';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Skills from './components/pages/Skills/Skills';
import Footer from './components/pages/Footer.js/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact-us' component={Contact} />
          <Route path='/resume' component={Resume} />
          <Route path='/skills' component={Skills} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;
