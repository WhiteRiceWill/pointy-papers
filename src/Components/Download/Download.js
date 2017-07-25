import React, {Component} from 'react';
import emojiThumb from '../../Assets/Other/thumbEmoji.png';

export default class Download extends Component {
  constructor() {
    super();
    this.state = {
      isToggleOn: false,
      currentCount: 2
    };
    this.handleClick = this.handleClick.bind(this);
    this.timerGo = this.timerGo.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));

    var countdown = setInterval(this.timerGo, 1000);
    this.setState({intervalId: countdown});
  }

  componentWillUpdate() {
    if (this.state.currentCount < 1) {
      this.setState(prevState => ({isToggleOn: false}));
      this.resetTimer();
      clearInterval(this.state.intervalId);
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timerGo() {
    if (this.state.isToggleOn) {
      this.setState({
        currentCount: this.state.currentCount - 1
      });
    }
  }

  resetTimer() {
    this.setState({currentCount: 2});
  }

  render() {
    var desc = this.props.description;
    const imgName = require('../../Assets/Paper' + this.props.imgNum + '/PP' + this.props.imgNum + '-' + this.props.imgType + '.png');

    if (this.state.isToggleOn) {
      return (
        <div className="downloadBox">
          <div className="tooltip">
            <button className="downloadBtnHolder">
              <img src={emojiThumb} alt="Thumbs Up Emoji" className="thumbImg"/>
            </button>
          </div>
        </div>
      );
    } else if (this.props.hasDesc) {
      return (
        <div className="downloadBox">
          <div className="tooltip">
            <a href={imgName} download>
              <button type="button" className="downloadBtn" onClick={this.handleClick}>
                {this.props.titleA}
                <br/> {this.props.titleB}
              </button>
            </a>
            <span className="tooltipText">{desc}</span>
          </div>
        </div>

      );
    } else {
      return (
        <div className="downloadBox">
          <div className="tooltip">
            <a href={imgName} download>
              <button type="button" className="downloadBtn" onClick={this.handleClick}>
                {this.props.titleA}
                <br/> {this.props.titleB}
              </button>
            </a>
          </div>
        </div>

      );
    }
  }
};
