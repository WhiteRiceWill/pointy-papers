import React, {Component} from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar.js';
import Footer from './Components/Footer/Footer.js';
import Main from './Components/Main/Main.js';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
