import React, {Component} from 'react';
import './App.css';
import Feed from './Components/Feed/Feed.js';
import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar/>
        </div>
        <div className="feed">
          <Feed/>
          <div className="tester"></div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
