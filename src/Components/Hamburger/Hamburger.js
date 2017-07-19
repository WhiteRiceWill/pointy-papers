import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hamburgerIcon from '../../Assets/Other/hamburger.svg';

export default class Hamburger extends Component{
  render() {
    return (
    <div className="hamburgerMenu">
      <img src={hamburgerIcon} alt="Mobile Menu Icon" className="hamburgerImg"/>
    </div>
    );
  }
};
