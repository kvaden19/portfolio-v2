import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <div id='background'>
      <Router>
        <NavBar id='sidebar'/>
            <div>
              <Route className='main' exact path='/' component={Landing} />
              <Route className='main' exact path='/about' component={About} />
              <Route className='main' exact path='/projects' component={Projects} />
            </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;