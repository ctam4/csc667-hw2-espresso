import React from 'react';
import './App.css';
import Routes from './Routes';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './Navbar.js'
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  )
}

export default App;
