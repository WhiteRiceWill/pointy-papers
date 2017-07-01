import React, { Component } from 'react';
import Card from '../Card/Card.js';

export default class Feed extends Component{
  render() {
    return (
      <div>
      <div className="feedLeft">
        <Card imgNum="4"/>
        <Card imgNum="1"/>
        <Card imgNum="7"/>
        <Card imgNum="5"/>
      </div>
      <div className="feedRight">
        <Card imgNum="2"/>
        <Card imgNum="6"/>
        <Card imgNum="3"/>
        <Card imgNum="8"/>
      </div>
    </div>

    );
  }
};
