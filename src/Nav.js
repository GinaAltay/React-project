import React, { Component } from 'react';
import './App.css';
export default class Nav extends Component {
  render() {
    return (
      <nav className="navBar">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Support </li>
        </ul>
      </nav>
    );
  }
}
