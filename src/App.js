import React, { Component } from 'react'
import Nav from "./Nav";
import About from "./About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import "./App.css";

class App extends Component{

  render() {
    return (
      <div className = "app" >
        <HomePage/> 
        <Router>
        <Nav />
        <Switch> 
        <Route path= "/about" exact component = {About} />
        </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
