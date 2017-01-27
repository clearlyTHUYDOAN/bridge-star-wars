import React, { Component } from 'react'; //*
import {Link} from 'react-router'; // Link is how you can navigate to the correct route with interactivity i.e. button click

import './App.css';

export default class App extends Component { // provides it all additional mark-up for React component



  render() { // whatever it returns is then rendered
    return (
      <div>
        <h1>Star Wars App Thingy</h1>
        <Link to="/planets">Planets</Link>
      </div>
    );
  }
}

// *default class means we don't have to use the curly bracket to import them