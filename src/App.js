import React, { Component } from 'react'
import Nav from "./Nav";
import About from "./About";
import Timer from "./Timer";
import Journal from "./journal.js"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from "./HomePage";
import "./App.css";
import Login from "./Login";
import Logout from "./Logout";

class App extends Component{
  constructor(props){
    super(props);
    this.state = { 
      name: "",
    };
  }
 
  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  submitHandler(e) {
    e.preventDefault();
  };

  render() {
    return (
      <div className = "app" >    
      <Login /> <Logout />
        <center>
        <h1>
             Hello, {this.state.name}
          </h1>

          <React.Fragment>
       <form onSubmit={this.submitHandler}>
         <label htmlFor="name">What's your name? </label>
         <input
           type="text"
           name="name"
           value={this.state.name}
           onChange={this.handleChange}
           style={{ width: "100px" }}
         />
       </form>

     </React.Fragment>
        </center>
        <br></br>
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

        <Switch>
        <Route path= "/journal.js" exact component = {Journal} />
        </Switch>

        </Router>
      </div>
    );
  }
}


export default App;
