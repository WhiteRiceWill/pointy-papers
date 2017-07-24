import React, {Component} from 'react';
import Download from '../Download/Download.js';

var title0A = "8K";
var title0B = "(7680 x 4320)"

var title1A = "5K";
var title1B = "(5120 x 2880)";

var title2A = "4K";
var title2B = "(3840 x 2160)";

var title3A = "UltraWide 4K";
var title3B = "(3840 x 1600)";

var title4A = "MacBook Retina";
var title4B = "(2880 x 1800)";

var title5A = "HD";
var title5B = "(1920 x 1080)";

var title6A = "Tablet";
var title6B = "(2732 x 2732)";

var title7A = "Smartphone";
var title7B = "(1080 x 1920)";

var title8A = "Samsung Galaxy S8";
var title8B = "(1440 x 2960)";

var title9A = "Twitter";
var title9B = "(1500 x 500)";

var desc2 = "Also fits 2560x1440";
var desc3 = "Also fits 3440x1440 and 2560x1080";
var desc4 = "Also fits 2560x1600 and 2304x1440";
var desc5 = "Also fits 1280x720";
var desc6 = "Also fits 2224x2224 and 2048x2048";
var desc7 = "Also fits 750x1334";

export default class Card extends Component {
  render() {
    const mainImg = require('../../Assets/Paper' + this.props.imgNum + '/PP' + this.props.imgNum + '-4K.png');

    return (
      <div className="card">
        <img src={mainImg} alt="Wallpaper Image" className="cardImg"/>
        <div className="downloadHeader">
          <p>Download</p>
        </div>

        <div className="downloadColumn1">
          <Download titleA={title0A} titleB={title0B} hasDesc={false} imgNum={this.props.imgNum} imgType="8K"/>
          <Download titleA={title1A} titleB={title1B} hasDesc={false} imgNum={this.props.imgNum} imgType="5K"/>
          <Download titleA={title2A} titleB={title2B} hasDesc={true} description={desc2} imgNum={this.props.imgNum} imgType="4K"/>
          <Download titleA={title3A} titleB={title3B} hasDesc={true} description={desc3} imgNum={this.props.imgNum} imgType="UltraWide"/>
          <Download titleA={title4A} titleB={title4B} hasDesc={true} description={desc4} imgNum={this.props.imgNum} imgType="MacBook"/>

        </div>

        <div className="downloadColumn2">
          <Download titleA={title5A} titleB={title5B} hasDesc={true} description={desc5} imgNum={this.props.imgNum} imgType="HD"/>
          <Download titleA={title6A} titleB={title6B} hasDesc={true} description={desc6} imgNum={this.props.imgNum} imgType="Tablet"/>
          <Download titleA={title7A} titleB={title7B} hasDesc={true} description={desc7} imgNum={this.props.imgNum} imgType="Smartphone"/>
          <Download titleA={title8A} titleB={title8B} hasDesc={false} imgNum={this.props.imgNum} imgType="GalaxyS8"/>
          <Download titleA={title9A} titleB={title9B} hasDesc={false} imgNum={this.props.imgNum} imgType="Twitter"/>

        </div>

      </div>
    );
  }
};
