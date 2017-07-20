import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import arrowIcon from '../../Assets/Other/arrow.svg';


export default class Dropdown extends Component{

  constructor() {
    super();
    this.state = {
      isToggleOn: true,
      firstClickHappened: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleFirstClick = this.toggleFirstClick.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  toggleFirstClick() {
    this.setState(prevState => ({
      firstClickHappened: true
    }));
  }


  render() {

  if (this.state.firstClickHappened) {

    if (this.state.isToggleOn) {
      return (
        <div>
        <div className="dropdownMenu">
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
    <div className="dropdownMenu">
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

  else {
    return (
      <div>
    <div className="dropdownMenu">
      <img src={arrowIcon} alt="Mobile Menu Icon" className="arrowNoClicks" onClick={this.toggleFirstClick} />
    </div>
    <div className="dropMenuNoClicks">
      <ul className="dropMenuList">
        <div className="dropMenuIndiv">
        <Link to='/' className='dropMenuLinks'>PAPERS</Link>
      </div>
      <div className="dropMenuIndiv">
        <Link to='/about' className='dropMenuLinks'>ABOUT</Link>
      </div>
      </ul>
    </div>
  </div>
      );
  }


  }
};
