import React from 'react';
import logo from './logo.svg';
import './Couter.css';

function Couter() {
  return (
    <div className="Couter">
      <header className="Couter-header">
        <img src={logo} className="Couter-logo" alt="logo" />
        <p>
          Edit <code>src/Couter.js</code> and save to reload.
        </p>
        <a
          className="Couter-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Couter;
