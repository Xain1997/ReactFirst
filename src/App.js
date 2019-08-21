import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>

      <body>
        <header>
          <nav class="top-nav">

            <img src="https://www.alchemative.com/wp-content/uploads/2016/11/logo-with-animation.svg" alt="logo"></img>

            <ul class="top-nav-item">
              <li class="top-nav-item-list link hover">
                <Link to="/about">
                  About US
                </Link>
              </li>
              <li class="top-nav-item-list link hover">
                <Link to="/contact">
                  Contact US
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <div class="App header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            class="link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enjoy
        </a>
        </div>
      </body>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />

    </Router>
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

export default App;
