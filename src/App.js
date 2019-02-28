import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VacancySign from './components/VacancySign';
import UserInfo from './components/EgDefaultProps';
import EgState from './components/EgState';
import EgSetState from './components/EgSetState';
import EgForceUpdate from './components/EgForceUpdate';
import EgDom from './components/EgDom';
import LifeCycle from './components/LifeCycle';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         
            chao mung den voi khoa hoc Reactjs
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <main className="App-main">
          <VacancySign hasvacancy={true} /> 
          <hr/>
          <UserInfo /> 
          <hr/>
          <EgState /> 
          <hr/>
          <EgSetState /> 
          <hr/>
          <EgForceUpdate /> 
          <hr/>
          <EgDom /> 
          <hr/>
          <LifeCycle /> 
        </main>
      </div>
    );
  }
}

export default App;
