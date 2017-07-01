import React, { Component } from 'react';
import TestPic from '../../Assets/Other/thumbEmoji.png';



export default class Download extends Component{
  constructor() {
    super();
    this.state = {isToggleOn: false, currentCount: 5};
    this.handleClick = this.handleClick.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.timerGo = this.timerGo.bind(this);
  }

  handleClick() {
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
  var countdown = setInterval(this.timerGo, 1000);
  this.setState({intervalId: countdown});
}

toggleState(){
  this.setState(prevState => ({
    isToggleOn: !prevState.isToggleOn
  }));
}



componentWillUnmount() {
   clearInterval(this.state.countdown);
}

timerGo() {
  if(this.state.isToggleOn){
   this.setState({ currentCount: this.state.currentCount -1 });
 }
}

resetTimer() {
  this.setState({currentCount: 5});
}

componentWillUpdate(){
  if(this.state.currentCount < 1){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
    this.resetTimer();
  }


}




  render() {
    console.log(this.state.currentCount);
    console.log(this.state.isToggleOn);
    var desc = this.props.description;
    const imgName = require('../../Assets/Paper' + this.props.imgNum + '/PP' + this.props.imgNum + '-' + this.props.imgType + '.png');



    if(this.state.isToggleOn){
      return (
        <div className="downloadBox">
          <div className= "tooltip">
              <button  className="downloadBtn">
                  <img src={TestPic} alt="Test" className="thumbImg"/>
              </button>
          </div>
        </div>
      );
    }
    else if(this.props.hasDesc){
      return (
        <div className="downloadBox">
          <div className="tooltip">
            <a href={imgName} download>
              <button type="button" className="downloadBtn" onClick={this.handleClick}>
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
              <button type="button" className="downloadBtn" onClick={this.handleClick}>
                {this.props.titleA} <br/> {this.props.titleB}
              </button>
            </a>
          </div>
        </div>


      );
    }

  }
};
