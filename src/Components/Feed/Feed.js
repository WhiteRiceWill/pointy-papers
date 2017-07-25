import React, {Component} from 'react';
import Card from '../Card/Card.js';
import Welcome from '../Welcome/Welcome.js';

export default class Feed extends Component {
  render() {
    return (
      <div className="feed">
        <div className="feedLeft">
          <Welcome/>
          <Card imgNum="4"/>
          <Card imgNum="3"/>
          <Card imgNum="7"/>
          <Card imgNum="6"/>
        </div>
        <div className="feedRight">

          <Card imgNum="2"/>
          <Card imgNum="1"/>
          <Card imgNum="5"/>
          <Card imgNum="8"/>
        </div>
      </div>

    );
  }
};
