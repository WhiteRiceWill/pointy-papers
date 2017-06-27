import React, { Component } from 'react';

export default class Download extends Component{
  render() {
    return (

      <div className="downloadBox">
        <div className="tooltip">
          <button type="button" className="downloadBtn">
          Samsung Galaxy S8<br/>
          (5120 x 2880)
          </button>
          <span className="tooltipText">{this.props.description}</span>
        </div>
      </div>

    );
  }
};

/*

      */
