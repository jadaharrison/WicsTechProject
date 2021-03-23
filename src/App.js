import React, { Component } from 'react'
import Nav from "./Nav";
import About from "./About";
import Timer from "./Timer";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import "./App.css";

class App extends Component{

  render() {
    return (
      <div className = "app" >
        <center>
          <h1>
             Hello, *Trying to Get Name*{}
          </h1>
        </center>
        <Router>
        <Nav />
        <Switch>
        <Route path= "/homepage" exact component = {HomePage} />
        </Switch>

        <Switch> 
        <Route path= "/about" exact component = {About} />
        </Switch>

        <Switch>
      <Route path= "/timer" exact component = {Timer} />
      </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
