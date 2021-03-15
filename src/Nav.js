import React from "react";
import './App.css';
import {Link} from 'react-router-dom'

const navStyle = {
  color: 'white'
};

function Nav() {
  return (
    <nav>
        <ul>
          <Link style = {navStyle} to= '/about'>
            <li>About</li>
            </Link>
        </ul>

        <u1>
          <Link style = {navStyle} to= '/timer'>
            <li>Timer</li>
          </Link>
        </u1>
    </nav>
  );
}

export default Nav;
