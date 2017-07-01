import React, { Component } from 'react';
import './App.css';
import Feed from './Components/Feed/Feed.js';


class App extends Component {
  render() {
    return (
      <div className="feed">
        <Feed/>
        <div className="tester">

        </div>
      </div>
    );
  }
}

export default App;
