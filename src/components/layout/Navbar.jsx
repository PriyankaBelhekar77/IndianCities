import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>Indian cities</h1>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          <li>
            <Link to='/shortlisted'>Shortlisted</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;