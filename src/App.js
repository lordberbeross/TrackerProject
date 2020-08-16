import React from 'react';
import logo from './logo.svg';
import './App.css';
var ReactRotatingText = require('react-rotating-text');
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <ReactRotatingText className="react-rotating-text-cursor" items={['YARAK', 'KAFALI', 'MEHMET']} />
      </header>
    </div>
  );
}

export default App;
