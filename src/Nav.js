import React from "react";
import './App.css';
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Login from "./Login";
import Logout from "./Logout";

const navStyle = {
  color: 'white'
};

function Nav() {
  return (
    <Navbar class="navbar-toggleable-md" fixed="top">
    <Navbar.Brand href="/homepage">Daily Bud</Navbar.Brand>  

      <ul>
        <Link style = {navStyle} to= '/homepage'>
          <li>Home Page</li>
        </Link>
      </ul>
      
        <ul>
          <Link className="justify-content-space-around" style = {navStyle} to= '/about'>
            <li>About</li>
            </Link>
        </ul>

        <ul>
          <Link className="justify-content-space-around" style = {navStyle} to= '/timer'>
            <li>Timer</li>
          </Link>
        </ul>

        <ul>
          <Link className="justify-content-space-around" style = {navStyle} to= '/journal.js'>
            <li>Journal</li>
            </Link>
        </ul>
        <Login /> 
        <Logout />
    </Navbar>
  );
}

export default Nav;
