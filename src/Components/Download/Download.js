import React, { Component } from 'react';

export default class Download extends Component{
  render() {
    var desc = this.props.description;

    if(this.props.hasDesc){
      return (

        <div className="downloadBox">
          <div className="tooltip">
            <button type="button" className="downloadBtn">
            {this.props.titleA} <br/> {this.props.titleB}
            </button>
            <span className="tooltipText">{desc}</span>
          </div>
        </div>

      );
    }
    else {
      return (

        <div className="downloadBox">
          <div className= "tooltip">
          <button type="button" className="downloadBtn">
            {this.props.titleA} <br/> {this.props.titleB}
          </button>
          </div>
        </div>


      );
    }

  }
};
