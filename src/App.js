import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Doctors from './components/Doctors';
import Clinics from './components/Clinics';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route exact path='/doctors' component={Doctors}/>
          <Route exact path='/clinics' component={Clinics}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
