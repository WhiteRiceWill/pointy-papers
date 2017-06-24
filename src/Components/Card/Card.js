import React, { Component } from 'react';
import TestPic from '../../Assets/test4k.png'

export default class Card extends Component{
  render() {
    return (
    <div className="card">
    <img src={TestPic} alt="Test" className="cardimg"/>
    </div>
    );
  }
};
