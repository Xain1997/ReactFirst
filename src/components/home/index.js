import React from 'react';
import {Head} from '../head';
import logo from '../../logo.svg';


function Home() {
    return (<div>
      <Head />
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
    </div>
    );
  }
export default Home;