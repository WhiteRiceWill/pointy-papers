import React, { Component } from 'react';
//need to streamline these downloads. I have a stack overflow link bookmarked

//Add Thumbs Up emoji after download

export default class Download extends Component{
  render() {
    var desc = this.props.description;
    const imgName = require('../../Assets/Paper' + this.props.imgNum + '/PP' + this.props.imgNum + '-' + this.props.imgType + '.png');

    if(this.props.hasDesc){
      return (
        <div className="downloadBox">
          <div className="tooltip">
            <a href={imgName} download>
              <button type="button" className="downloadBtn">
                {this.props.titleA} <br/> {this.props.titleB}
              </button>
            </a>
            <span className="tooltipText">{desc}</span>
          </div>
        </div>

      );
    }
    else {
      return (

        <div className="downloadBox">
          <div className= "tooltip">
            <a href={imgName} download>
              <button type="button" className="downloadBtn">
                {this.props.titleA} <br/> {this.props.titleB}
              </button>
            </a>
          </div>
        </div>


      );
    }

  }
};
