import React, { Component } from 'react';
import Download from '../Download/Download.js';
import TestPic from '../../Assets/Paper4/PP4-4K.png';

export default class Card extends Component{
  render() {
    return (
    <div className="card">
    <img src={TestPic} alt="Test" className="cardimg"/>
    <div className="downloadHeader">
    <p>Download</p>
    </div>
    <Download description="utrw toewu to euifhas dfiusdh ifu s"/>
<Download description="utrw toewu to euifhas dfiusdh ifu s"/>
<Download description="utrw toewu to euifhas dfiusdh ifu s"/>
<Download description="utrw toewu to euifhas dfiusdh ifu s"/>


    </div>
    );
  }
};
