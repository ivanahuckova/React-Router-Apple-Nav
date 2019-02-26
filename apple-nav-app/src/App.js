import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import data from './data';

import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';

class App extends Component {
  render() {
    return (
      <div>
        <NavWrapper />
        <Route exact path="/:productType" render={pr => <SubNav {...pr} data={data} />} />
      </div>
    );
  }
}

export default App;
