import React from "react";
import Nav from "./Nav";
import About from "./About";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      
    <div className = "app" >
      <Nav />
      <Switch> 
      <Route path= "/about" exact component = {About} />
      </Switch>
     
    </div>
    </Router> 
  );
}

export default App;
