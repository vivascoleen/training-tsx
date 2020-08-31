import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Welcome from './Welcome';
import Age from './Age';
import * as serviceWorker from './serviceWorker';
import Clock from './HelloWorld';
import Randomizer from './Randomizer';
import Anagram from './Anagram';
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Anagram/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
