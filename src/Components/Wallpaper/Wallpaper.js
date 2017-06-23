import React, { Component } from 'react';

export default class Wallpaper extends Component{
  render() {
    return (
    <div className={this.props.className}>
      <ProfilePic ProfileImg={this.props.ProfileImg} />
    </div>
    );
  }
};
