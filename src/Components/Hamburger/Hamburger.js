import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../../Assets/Other/arrow.svg';


export default class Hamburger extends Component{

  constructor() {
    super();
    this.state = {
      isToggleOn: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }





  render() {

    if (this.state.isToggleOn) {
      return (
        <div>
        <div className="hamburgerMenu">
          <img src={arrowIcon} alt="Mobile Menu Icon" className="arrowOpen" onClick={this.toggleMenu}/>
        </div>
      <div className="dropMenuOpen">
        <ul className="dropMenuList">
          <div className="dropMenuIndiv">
          <Link to='/' className='dropMenuLinks' onClick={this.toggleMenu}>PAPERS</Link>
        </div>
        <div className="dropMenuIndiv">
          <Link to='/about' className='dropMenuLinks' onClick={this.toggleMenu}>ABOUT</Link>
        </div>
        </ul>
      </div>
    </div>
      );
    }

    else {
    return (
      <div>
    <div className="hamburgerMenu">
      <img src={arrowIcon} alt="Mobile Menu Icon" className="arrowClose" onClick={this.toggleMenu} />
    </div>
    <div className="dropMenuClose">
      <ul className="dropMenuList">
        <div className="dropMenuIndiv">
        <Link to='/' className='dropMenuLinks' onClick={this.toggleMenu}>PAPERS</Link>
      </div>
      <div className="dropMenuIndiv">
        <Link to='/about' className='dropMenuLinks' onClick={this.toggleMenu}>ABOUT</Link>
      </div>
      </ul>
    </div>
  </div>
      );
    }
  }
};
