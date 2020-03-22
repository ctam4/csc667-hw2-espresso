import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavigationBar = () => {
    return (
      <div className="navigation-bar">
        <Link to="/">
          <h1>CSS 667 HW2</h1>
        </Link>
        <Link to="/bdiaz666">
          <div className="about">bdiaz666</div>
        </Link>
        <Link to="/ctam4">
                <div className="about">ctam4</div>
        </Link>
        <Link to="/jason1819">
                <div className="about">jason1819</div>
        </Link>
      </div>
    );
}

export default NavigationBar;
