import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Pacientes from './Pages/Pacientes/Pacientes';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="max-w-sm md:max-w-4xl mx-auto mt-5">
      <Router>
        <Nav />
        <div className="border-4 border-gray-800 my-5 p-5 rounded-md">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/pacientes">
              <Pacientes />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
