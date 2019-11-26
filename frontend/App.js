import React from 'react';
import Header from './components/Header';
import Feed from './components/Feed';
import Profile from './components/Profile';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/' component={Feed} />
        <Route exact path='/profile' component={Profile} />
      </div>
    </Router>
  );
}

export default App;
