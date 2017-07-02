import React, { Component } from 'react';
import logoImg from '../../Assets/Other/PP-logo.png';

export default class NavBar extends Component{
  render() {
    return (
    <div className='navBar'>
      <img src={logoImg} alt="Pointy Papers Logo" className="logoImg"/>
    </div>
    );
  }
};
