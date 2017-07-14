import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../Assets/Other/PP-logo.png';

export default class NavBar extends Component{
  render() {
    return (
    <div className='navBar'>
      <img src={logoImg} alt="Pointy Papers Logo" className="logoImg"/>
      <div className='menu'>
        <Link to='/' className='menuLink'>Papers</Link>
        <Link to='/about' className='menuLink'>About</Link>
      </div>
    </div>
    );
  }
};
