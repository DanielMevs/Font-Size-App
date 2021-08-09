import React, {useState } from "react";
import './App.css';

function App() {
  const [fontSize, setFontSize] = useState(16);
  return (
    <div className="App">
      <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" href="#">Gift Shop</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">Art Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#">Philanthropy</a>
        </li>
      </ul>
      <hr/>
      <h1 className="page-header">Font-Size App - <small>The Official Page</small></h1>
        <p class="lead">The Font, The Size, The Combination of the Two</p> <p> My font-size app done in React!</p>
        <hr/>
        <h2>Font-Size App</h2>
      <br/>
      <div className="container">
        <div className="row">
          <button onClick = { () => setFontSize(fontSize + 1)} className="btn btn-primary"> + </button>
          <button onClick = { () => setFontSize(fontSize - 1)} className="btn"> - </button>
          <p style={{
            fontSize: `${fontSize}px`
          }}>
            This paragraph is font size {fontSize}
          </p>
        </div>
      </div>
      <br/>
      <hr/>
    </div>
  );
}

export default App;
