import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Routers/HomePage';
import ContactUs from './Routers/ContactUs';

library.add(faHome, faAddressCard);

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
